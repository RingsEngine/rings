import { LoaderBase } from "./LoaderBase";
import { LoaderFunctions } from "./LoaderFunctions";
import { ParserBase } from "./parser/ParserBase";
import { Parser } from "../util/Global";
import { ParserFormat } from "./parser/ParserFormat";

/**
 * Stream loader result with cancel capability
 */
export interface StreamLoadResult<T extends ParserBase> {
  parser: T;
  cancel: () => void;
}

/**
 * Stream loader for progressive resource loading
 * Supports streaming data as it arrives, enabling progressive rendering
 */
export class StreamLoader extends LoaderBase {
  /**
   * Load resource with streaming support
   * @param url Resource URL
   * @param parserClass Parser class that supports streaming
   * @param loaderFunctions Optional loader callbacks
   * @param userData Optional user data
   * @returns Promise that resolves when initial data is ready (header parsed), includes cancel method
   */
  public async loadStream<T extends ParserBase>(
    url: string,
    parserClass: Parser<T>,
    loaderFunctions?: LoaderFunctions,
    userData?: any
  ): Promise<StreamLoadResult<T>> {
    if (parserClass.format !== ParserFormat.BIN) {
      throw new Error("StreamLoader only supports BIN format parsers");
    }

    return new Promise(async (succ, fail) => {
      let aborted = false;
      let reader: ReadableStreamDefaultReader<Uint8Array> | null = null;
      let abortController: AbortController | null = null;

      // Cancel function
      const cancel = () => {
        aborted = true;
        if (reader) {
          reader.cancel().catch(() => {
            // Ignore cancel errors
          });
          reader.releaseLock();
        }
        if (abortController) {
          abortController.abort();
        }
        // Cancel parser if it supports cancellation
        if (parser && typeof (parser as any).cancel === 'function') {
          (parser as any).cancel();
        }
      };

      let parser: T | null = null;

      try {
        this.baseUrl = url.substring(0, url.lastIndexOf('/') + 1);
        this.initUrl = url;

        // Create abort controller for fetch
        abortController = new AbortController();

        const response = await fetch(url, {
          headers: loaderFunctions?.headers,
          signal: abortController.signal
        });
        if (!response.ok) {
          throw new Error(`Request rejected with status ${response.status}`);
        }

        reader = response.body.getReader();
        const contentLength = +response.headers.get("Content-Length") || 0;

        // Create parser instance
        parser = new parserClass();
        parser.userData = userData;
        parser.baseUrl = this.baseUrl;
        parser.initUrl = url;
        parser.loaderFunctions = loaderFunctions;

        // Check if parser supports streaming
        if (typeof (parser as any).initStream !== 'function') {
          throw new Error(`Parser ${parserClass.name} does not support streaming. Implement initStream() method.`);
        }

        // Track if parser is ready (header parsed)
        let parserResolved = false;

        // Initialize streaming parser with header parsed callback
        await (parser as any).initStream(contentLength, () => {
          // Header parsed: resolve promise immediately so user can add object to scene
          if (!parserResolved && !aborted && parser && parser.verification()) {
            parserResolved = true;
            succ({ parser, cancel });
          }
        });

        // Start reading stream
        let receivedLength = 0;

        // Continue reading stream (even after promise resolves)
        while (!aborted) {
          const { done, value } = await reader.read();
          if (done || aborted) {
            if (!aborted) {
              // Finalize parsing
              if (typeof (parser as any).finalizeStream === 'function') {
                await (parser as any).finalizeStream();
              }
              // If parser wasn't ready yet, resolve now
              if (!parserResolved && parser) {
                if (parser.verification()) {
                  parserResolved = true;
                  succ({ parser, cancel });
                } else {
                  throw new Error("Parser verification failed");
                }
              }
            }
            break;
          }

          if (aborted) break;

          receivedLength += value.length;

          // Report progress
          if (contentLength > 0 && loaderFunctions?.onProgress && !aborted) {
            loaderFunctions.onProgress.call(
              this,
              receivedLength,
              contentLength,
              url,
              parser
            );
          }

          // Process chunk (this will trigger header parsing callback when header is complete)
          if (!aborted && typeof (parser as any).processChunk === 'function') {
            await (parser as any).processChunk(value, receivedLength, contentLength);
          }

          // Check if parser is ready after processing chunk (header might be parsed)
          if (!parserResolved && !aborted && parser && parser.verification()) {
            parserResolved = true;
            succ({ parser, cancel });
          }
        }

        if (!aborted && loaderFunctions?.onComplete) {
          loaderFunctions.onComplete.call(this, url);
        }
      } catch (e) {
        if (aborted) {
          // Cancellation is not an error
          return;
        }
        if (loaderFunctions?.onError) {
          loaderFunctions.onError(e);
        }
        fail(e);
      } finally {
        // Clean up reader if still locked
        if (reader && !aborted) {
          try {
            reader.releaseLock();
          } catch {
            // Ignore release errors
          }
        }
      }
    });
  }
}

