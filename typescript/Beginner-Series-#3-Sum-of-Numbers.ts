/* 
?Challenge:Beginner Series #3 Sum of Numbers
  *PROBLEM
  break down:
  - Given two integers a and b,
  - which can be positive or negative,
  - find the sum of all the integers between and including them
  - and return it.
  - If the two numbers are equal return a or b.
  - Your function should only return a number, not the explanation about how you get that number.
  
  input: (1, 0) 
  output: 1

  Note: a and b are not ordered! 

  *EXAMPLE
  - (1, 0) --> 1 (1 + 0 = 1)
  - (1, 2) --> 3 (1 + 2 = 3)
  - (0, 1) --> 1 (0 + 1 = 1)
  - (1, 1) --> 1 (1 since both are same)
  - (0,-1) --> (0 + -1 = -1)
  - (-1, 0) --> -1 (-1 + 0 = -1)
  - (-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)


  *DATA STRUCTURE
  input: two parameters of numbers
  output: single number

  *ALGORITHM
  - return a or b if they are the same value
  - create a negative and positive array
  - if b is negative, push to negative array
  - if b is negative, push to negative array
  - if a greater than b, push to postive array
  - if a less than b, push to postive array
  - if a or b is negative, return the sum of the negative array
  - else return the sum of the positive array
*/

//* CODE
function getSum(a:number, b:number):number {
  // a are b the same
  if (a === b) return a;

  const negativeArray:number[] = [];
  const positiveArray:number[] = [];

  // b is negative
  if (b < 0) for (let index = b; index <= a; index++) negativeArray.push(index);
  // a is negative
  if (a < 0) for (let index = a; index <= b; index++) negativeArray.push(index);

  // a is greater than b
  if (a > b) for (let index = a; index >= b; index--) positiveArray.push(index);
  // a is less than
  if (a < b) for (let index = a; index <= b; index++) positiveArray.push(index);

  // a or b is negative return the sum of the negative array, else return the sum of the positive array
  return b < 0 || a < 0
    ? negativeArray.reduce((accumulator, current) => accumulator + current)
    : positiveArray.reduce((accumulator, current) => accumulator + current);
}

console.log(getSum(0, -1)); // --> (0 + -1 = -1)
console.log(getSum(2, 2)); // --> 2 (2 since both are same)
console.log(getSum(1, 0)); // --> 1 (1 + 0 = 1)
console.log(getSum(1, 2)); // --> 3 (1 + 2 = 3)
console.log(getSum(0, 1)); // --> 1 (0 + 1 = 1)
console.log(getSum(1, 1)); // --> 1 (1 since both are same)
console.log(getSum(-1, 0)); // --> -1 (-1 + 0 = -1)
console.log(getSum(-1, 2)); // --> 2 (-1 + 0 + 1 + 2 = 2)
