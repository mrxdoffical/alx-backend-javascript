export default function getListStudentsIds(somethingBad) {
  if (!Array.isArray(somethingBad)) {
    return [];
  }
  return somethingBad.map((student) => student.id);
}
