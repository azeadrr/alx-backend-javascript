export default function updateStudentGradeByCity(List, city, newGrades) {
  if (!Array.isArray(List) || !Array.isArray(newGrades)) {
    return [];
  }
  const cityFilter = List.filter((std) => std.location === city).map((std) => {
    const grade = newGrades.find((grade) => grade.studentId === std.id);
    return { ...std, grade: grade ? grade.grade : 'N/A' };
  });

  return cityFilter;
}
