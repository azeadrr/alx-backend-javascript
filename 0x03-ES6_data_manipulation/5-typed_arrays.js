export default function createInt8TypedArray(length, position, value) {
  if (position >= length) {
    throw Error('Position outside range');
  }
  const buffer = new ArrayBuffer(length);
  const vw = new Int8Array(buffer);
  vw[position] = value;
  return new DataView(buffer);
}
