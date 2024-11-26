import readDatabase from '../utils';

class StudentsController {
  static getAllStudents(request, response) {
    readDatabase(process.argv[2])
      .then((studentGroups) => {
        const output = ['This is the list of our students'];
        const sortedFields = Object.keys(studentGroups).sort((a, b) =>
          a.localeCompare(b, 'en', { ignorePunctuation: true }));

        for (const field of sortedFields) {
          output.push(`Number of students in ${field}: ${studentGroups[field].length}. List: ${studentGroups[field].map((student) => student.firstname).join(', ')}`);
        }
        response.status(200).send(output.join('\n'));
      })
      .catch(() => {
        response.status(500).send('Cannot load the database');
      });
  }

  static getAllStudentsByMajor(request, response) {
    const { major } = request.params;
    if (major !== 'CS' && major !== 'SWE') {
      response.status(500).send('Major parameter must be CS or SWE');
      return;
    }
    readDatabase(process.argv[2])
      .then((studentGroups) => {
        const students = studentGroups[major] || [];
        response.status(200).send(`List: ${students.map((student) => student.firstname).join(', ')}`);
      })
      .catch(() => {
        response.status(500).send('Cannot load the database');
      });
  }
}

export default StudentsController;
