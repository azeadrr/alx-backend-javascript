export default function createIteratorObject(report) {
  const res = [];
  for (const dpt of Object.values(report.allEmployees)) {
    res.push(...dpt);
  }
  return res;
}
