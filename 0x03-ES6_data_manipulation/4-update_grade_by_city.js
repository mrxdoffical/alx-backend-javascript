export default function updateStudentGradeByCity(students, city, newGrades) {
  return students
    .filter((student) => student.location === city)
    .map((student) => {
      // Find the grade object for the current student
      const gradeObj = newGrades.find((grade) => grade.studentId === student.id);

      // Return the student object with the updated or 'N/A' grade
      return {
        ...student,
        grade: gradeObj ? gradeObj.grade : 'N/A',
      };
    });
}
