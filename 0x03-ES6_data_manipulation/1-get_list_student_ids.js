export default function getListStudentIds(List) {
  if (Array.isArray(List)) {
    return List.map((std) => std.id);
  }
  return [];
}
