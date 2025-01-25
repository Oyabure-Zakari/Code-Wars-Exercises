/* 
?Challenge:Convert number to reversed array of digits
  *PROBLEM
  break down:
  - Convert number to
  - reversed array of digits
  - Given a random non-negative number,
  - you have to return the digits
  - of this number within an array
  - in reverse order.
  
  input: 35231 
  output: [1,3,2,5,3]

  Note: 

  *EXAMPLE
  - 35231 --> [1,3,2,5,3]
  - 0 --> [0]

  *DATA STRUCTURE
  input: integer
  output: array of integers

  *ALGORITHM
  - convert the number to array
  - use the reverse method
  - to return the array in reverse order
*/

//* CODE
const digitize = (n) =>
  String(n)
    .split("")
    .map((str) => Number(str))
    .reverse();

console.log(digitize(35231));
console.log(digitize(0));
