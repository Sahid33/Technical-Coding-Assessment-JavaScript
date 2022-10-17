//  Q1 Write a program to print a new number with digits reversed from the original one.
// The number provided will be greater than or equal to 0

const revInt = (num) => {
  let myRevInt = num.toString().split("").reverse().join("");
  console.log(myRevInt);
};
revInt(1234);
