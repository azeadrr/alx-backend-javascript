const weakMap = new WeakMap();
let cnt = 1;

function queryAPI(endpnt) {
  weakMap.set(endpnt, cnt);
  cnt += 1;
  if (weakMap.get(endpnt) >= 5) {
    throw Error('Endpoint load is high');
  }
}

export { weakMap, queryAPI };
