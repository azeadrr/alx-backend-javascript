export default function getStudentIdsSum(List) {
  const initial = 0;
  const sAll = List.reduce(
    (account, std) => account + std.id,
    initial,
  );
  return sAll;
}
