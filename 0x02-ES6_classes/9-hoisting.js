// 9-hoisting.js

// HolbertonClass definition
export class HolbertonClass {
  constructor(year, location) {
    this._year = year; // Initialize _year attribute
    this._location = location; // Initialize _location attribute
  }

  // Getter for year
  get year() {
    return this._year;
  }

  // Getter for location
  get location() {
    return this._location;
  }
}

// StudentHolberton definition
export class StudentHolberton {
  constructor(firstName, lastName, holbertonClass) {
    this._firstName = firstName; // Initialize _firstName attribute
    this._lastName = lastName; // Initialize _lastName attribute
    this._holbertonClass = holbertonClass; // Initialize _holbertonClass attribute
  }

  // Getter for fullName
  get fullName() {
    return `${this._firstName} ${this._lastName}`;
  }

  // Getter for holbertonClass
  get holbertonClass() {
    return this._holbertonClass;
  }

  // Getter for fullStudentDescription
  get fullStudentDescription() {
    return `${this._firstName} ${this._lastName} - ${this._holbertonClass.year} - ${this._holbertonClass.location}`;
  }
}

// Instances of HolbertonClass
const class2019 = new HolbertonClass(2019, 'San Francisco');
const class2020 = new HolbertonClass(2020, 'San Francisco');

// Instances of StudentHolberton
const student1 = new StudentHolberton('Guillaume', 'Salva', class2020);
const student2 = new StudentHolberton('John', 'Doe', class2020);
const student3 = new StudentHolberton('Albert', 'Clinton', class2019);
const student4 = new StudentHolberton('Donald', 'Bush', class2019);
const student5 = new StudentHolberton('Jason', 'Sandler', class2019);

// Export the list of students
export const listOfStudents = [student1, student2, student3, student4, student5];
