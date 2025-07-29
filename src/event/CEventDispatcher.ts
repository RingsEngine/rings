import { CEvent } from "./CEvent";
import { CEventListener } from "./CEventListener";

export class CEventDispatcher {
  protected listeners: any = {};
  public data: any;
  public dispatchEvent(event: CEvent) {
    let list: any = this.listeners[event.type];
    if (list != null) {
      list = list.slice();
      for (let i = 0; i < list.length; i++) {
        let listener: CEventListener = list[i];
        if (listener.handler) {
          try {
            event.param = listener.param;
            event.currentTarget = listener;
            if (!listener.thisObject) {
            }
            listener.handler.call(listener.thisObject, event);
          } catch (error) {}
          if (event.isStopImmediatePropagation) {
            break;
          }
        }
      }
    }
  }
  public destroy() {
    for (let key in this.listeners) {
      let list: any = this.listeners[key];
      while (list.length > 0) {
        let listener: CEventListener = list[0];
        listener.handler = null;
        listener.thisObject = null;
        list.splice(0, 1);
      }
    }
  }

  public addEventListener(
    type: string | number,
    callback: Function,
    thisObject: any,
    param: any = null,
    priority: number = 0
  ): number {
    if (this.listeners[type] == null) {
      this.listeners[type] = [];
    }

    if (!this.hasEventListener(type, callback, thisObject)) {
      let listener: CEventListener = new CEventListener(
        type,
        thisObject,
        callback,
        param,
        priority
      );
      listener.id = ++CEventListener.event_id_count;
      listener.current = this;
      this.listeners[type].push(listener);
      this.listeners[type].sort(function (
        listener1: CEventListener,
        listener2: CEventListener
      ) {
        return listener2.priority - listener1.priority;
      });

      return listener.id;
    }

    for (let i = 0; i < this.listeners[type].length; i++) {
      let listener: CEventListener = this.listeners[type][i];
      if (listener.equalCurrentListener(type, callback, thisObject, param)) {
        return listener.id;
      }
    }

    return 0;
  }

  public removeEventListener(
    type: string | number,
    callback: Function,
    thisObject: any
  ): void {
    if (this.hasEventListener(type, callback, thisObject)) {
      for (let i: number = 0; i < this.listeners[type].length; i++) {
        let listener: CEventListener = this.listeners[type][i];
        if (
          listener.equalCurrentListener(
            type,
            callback,
            thisObject,
            listener.param
          )
        ) {
          listener.handler = null;
          listener.thisObject = null;
          this.listeners[type].splice(i, 1);
          return;
        }
      }
    }
  }

  public removeEventListenerAt(id: number): boolean {
    for (let key in this.listeners) {
      for (let i: number = 0; i < this.listeners[key].length; i++) {
        let listener = this.listeners[key][i];
        if (listener.id == id) {
          listener.handler = null;
          listener.thisObject = null;
          this.listeners[key].splice(i, 1);
          return true;
        }
      }
    }
    return false;
  }

  public removeAllEventListener(
    eventType: string | number | null = null
  ): void {
    let listener: CEventListener;

    if (eventType) {
      if (this.listeners[eventType]) {
        for (let i: number = 0; i < this.listeners[eventType].length; i++) {
          listener = this.listeners[eventType][i];
          listener.dispose();
          this.listeners[eventType].splice(i, 1);
        }

        delete this.listeners[eventType];
      }
    } else {
      for (let key in this.listeners) {
        for (let i: number = 0; i < this.listeners[key].length; i++) {
          listener = this.listeners[key][i];
          listener.dispose();
          this.listeners[key].splice(i, 1);
        }

        delete this.listeners[key];
      }
    }
  }

  public containEventListener(type: string): boolean {
    if (this.listeners[type] == null) return false;
    return this.listeners[type].length > 0;
  }

  public hasEventListener(
    type: string | number,
    callback: Function | null = null,
    thisObject: any = null
  ): boolean {
    if (this.listeners[type] == null) return false;
    if (thisObject && callback) {
      for (let i: number = 0; i < this.listeners[type].length; i++) {
        let listener: CEventListener = this.listeners[type][i];
        if (
          listener.equalCurrentListener(
            type,
            callback,
            thisObject,
            listener.param
          )
        ) {
          return true;
        }
      }
    }
    return false;
  }
}
