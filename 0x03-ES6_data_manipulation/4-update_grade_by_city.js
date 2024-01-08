export default function updateStudentGradeByCity(List, city, newGrades) {
  if (!Array.isArray(List) || !Array.isArray(newGrades)) {
    return [];
  }
  const cityFilter = List.filter((std) => std.location === city).map((std) => {
    const grad = newGrades.find((grad) => grad.studentId === std.id);
    return { ...std, grad: grad ? grad.grad : 'N/A' };
  });

  return cityFilter;
}
