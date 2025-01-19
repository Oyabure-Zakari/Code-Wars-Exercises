/* 
?Challenge:Opposite number
  *PROBLEM
  break down:
  - Very simple, given a number 
  - (integer / decimal / both depending on the language),
  -  find its opposite (additive inverse).
  
  input: 3.3333333 
  output: -3.3333333

  Note: 

  *EXAMPLE
  - 1: -1
  - 14: -14
  - -34: 34
  - 0: 0

  *DATA STRUCTURE
  input: integer might be positive or negative
  output: integer might be positive or negative

  *ALGORITHM
  - convert the number to a string and store it in a variable
  - if the number is negative
  - extract the second element at index 1
  - this is to leave the negative sign behind
  - then convert back to a number
  - if the number is positive
  - use a template literal and include the negative sign in front 
  - and then the string number
  - then convert back to a number
*/

//* CODE
function opposite(number) {
  // convert the number to a string
  const numberToString = String(number);

  // the number is negative, slice from index 1 to leave the negative sign behind
  if (number < 0) return Number(numberToString.slice(1));

  // the number is positive, add the negative sign and the numberToString
  if (number > 0) return Number(`-${numberToString}`);

  // it doesn't match any of the condition then return the number
  return number;
}

console.log(opposite(1));
console.log(opposite(0));
console.log(opposite(4.25));
console.log(opposite(3.3333333));
console.log(opposite(-12525220.3325));
console.log(opposite(-5));
