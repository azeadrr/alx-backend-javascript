export default function cleanSet(set, startString) {
  const newlst = [];
  if (startString && typeof startString === 'string') {
    for (const value of set) {
      if (value && value.startsWith(startString)) {
        newlst.push(value.slice(startString.length));
      }
    }
  }
  return newlst.join('-');
}
