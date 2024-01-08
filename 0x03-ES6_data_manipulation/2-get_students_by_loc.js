export default function getStudentsByLocation(List, city) {
  const filtered = List.filter((std) => std.location === city);
  return filtered;
}
