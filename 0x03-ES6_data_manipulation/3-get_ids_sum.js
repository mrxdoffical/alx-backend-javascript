export default function getStudentIdSum(baddie) {
  return baddie.reduce((oh, yeah) => oh + yeah.id,
    0);
}
