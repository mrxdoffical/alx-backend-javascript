// Define the Student interface
interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

// Create two student objects
const student1: Student = {
    firstName: "bero",
    lastName: "gerges",
    age: 19,
    location: "cairo"
};

const student2: Student = {
    firstName: "elijah",
    lastName: "gerges",
    age: 15,
    location: "cairo"
};

// Create an array of students
const studentsList: Student[] = [student1, student2];

// Render a table and append rows for each student
const table = document.createElement("table");

studentsList.forEach((student) => {
    const row = table.insertRow();
    const firstNameCell = row.insertCell(0);
    const locationCell = row.insertCell(1);

    firstNameCell.textContent = student.firstName;
    locationCell.textContent = student.location;
});

// Append the table to the document body
document.body.appendChild(table);
