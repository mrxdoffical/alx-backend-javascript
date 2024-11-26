const fs = require('fs');

function countStudents(path) {
  try {
    const file = fs.readFileSync(path);
    const fileContent = file.toString();
    const lines = fileContent.split('\n');

    const students = {
      cs: [],
      swe: [],
    };

    let totalStud = 0;

    lines.forEach((line, index) => {
      if (line && index > 0) {
        const studata = line.split(',');
        const fn = studata[0];
        const field = studata[3];

        if (field === 'CS') {
          students.cs.push(fn);
          totalStud += 1;
        } else if (field === 'SWE') {
          students.swe.push(fn);
          totalStud += 1;
        }
      }
    });

    console.log(`Number of students: ${totalStud}`);
    console.log(`Number of students in CS: ${students.cs.length}. List: ${students.cs.join(', ')}`);
    console.log(`Number of students in SWE: ${students.swe.length}. List: ${students.swe.join(', ')}`);
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
