
//A student will not be allowed to sit in the exam if his/her attendance is less than 75%. if he/she has medical causes reduce attendance criteria to 60%. Ask the user if he/she has a medical cause or not ( 'Y' or 'N' ) and print accordingly. You were given a total no classes and total classes attended by the student.

const attendence = 65;
const medical = true;

if (attendence >= 75) {
  console.log("ture");
} else if (medical === false && attendence < 75) {
  console.log("False");
} else if (medical === true && attendence >= 60) {
  console.log("ture");
} else {
  console.log("N");
}
