export default function updateUniqueItems(maplst) {
  if (!(maplst instanceof Map)) {
    throw new Error('Cannot process');
  }

  for (const [key, value] of maplst) {
    if (value === 1) {
      maplst.set(key, 100);
    }
  }

  return maplst;
}
