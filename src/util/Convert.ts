const _floatView = new Float32Array(1);
const _int32View = new Int32Array(_floatView.buffer);

export let toHalfFloat = function (val) {
  _floatView[0] = val;
  const x = _int32View[0];

  let bits = (x >> 16) & 0x8000;
  let m = (x >> 12) & 0x07ff;
  const e = (x >> 23) & 0xff;

  if (e < 103) return bits;

  if (e > 142) {
    bits |= 0x7c00;
    bits |= (e == 255 ? 1 : 0) && x & 0x007fffff;
    return bits;
  }

  if (e < 114) {
    m |= 0x0800;
    bits |= (m >> (114 - e)) + ((m >> (113 - e)) & 1);
    return bits;
  }

  bits |= ((e - 112) << 10) | (m >> 1);
  bits += m & 1;
  return bits;
};
