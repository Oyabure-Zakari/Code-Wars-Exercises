/* 
?Challenge: 7 kyu No ifs no buts
  *PROBLEM
  break down: 
  - Write a function that accepts two numbers a and b 
  - and returns whether a is smaller than, bigger than, or equal to b, as a string.

  input: (5, 4)
  output: "5 is greater than 4"

  Note: 
  - There is only one problem...
  - You cannot use if statements, and you cannot use the ternary operator ? :.
  - In fact the word if and the character ? are not allowed in your code.

  *EXAMPLE
  - doTest(1, 1, "1 is equal to 1")
  - doTest(45, 51, "45 is smaller than 51")
  - doTest(20, 19, "20 is greater than 19")

  *DATA STRUCTURE
  input: numbers
  output: strings

  *ALGORITHM
*/

//* CODE
function noIfsNoButs(a, b) {
  return (
    (a < b && `${a} is is smaller than ${b} `) ||
    (a === b && `${a} is equal to ${b} `) ||
    (a > b && `${a} is greater than ${b} `)
  );
}

console.log(noIfsNoButs(1, 1, "1 is equal to 1"));
console.log(noIfsNoButs(1, 2, "1 is smaller than 2"));
console.log(noIfsNoButs(-3, 2, "-3 is smaller than 2"));
console.log(noIfsNoButs(45, 51, "45 is smaller than 51"));
console.log(noIfsNoButs(100, 100, "100 is equal to 100"));
console.log(noIfsNoButs(20, 19, "20 is greater than 19"));
console.log(noIfsNoButs(100, 80, "100 is greater than 80"));
