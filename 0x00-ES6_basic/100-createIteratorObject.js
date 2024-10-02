export default function createIteratorObject(report) {
  let employees = [];

  // Concatenate all employee arrays into one
  for (const department of Object.values(report.allEmployees)) {
    employees = employees.concat(department);
  }

  return employees[Symbol.iterator](); // Return an iterator for the concatenated employee array
}
