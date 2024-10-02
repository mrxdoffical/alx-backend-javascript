export default function appendToEachArrayValue(array, appendString) {
  const newArray = [];
  for (const value of array) {
    const newValue = appendString + value;
    newArray.push(newValue); // Add the new value to the new array
  }

  return newArray;
}
