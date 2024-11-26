const fs = require('fs').promises;

async function countStudents(path) {
  try {
    const file = await fs.readFile(path);
    const fileContent = file.toString();
    const lines = fileContent.split('\n');

    const students = {
      cs: [],
      swe: []
    };

    let studentscount = 0;

    lines.forEach((line, index) => {
      if (line && index > 0) {
        const studat = line.split(',');
        const fn = studat[0];
        const field = studat[3];

        if (field === 'CS') {
          students.cs.push(fn);
          studentscount += 1;
        } else if (field === 'SWE') {
          students.swe.push(fn);
          studentscount += 1;
        }
      }
    });

    let output = '';
    output += `Number of students: ${studentscount}\n`;
    output += `Number of students in CS: ${students.cs.length}. List: ${students.cs.join(', ')}\n`;
    output += `Number of students in SWE: ${students.swe.length}. List: ${students.swe.join(', ')}`;

    console.log(output);
    return output;
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
