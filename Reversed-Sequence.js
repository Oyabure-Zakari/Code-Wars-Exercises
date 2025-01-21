/* 
?Challenge:Reversed sequence
  *PROBLEM
  break down:
  - Build a function
  - that returns an array of integers
  - from n to 1 where n>0.
  
  input: 5 
  output: [5,4,3,2,1]

  Note: 

  *EXAMPLE
  - n=5 --> [5,4,3,2,1]

  *DATA STRUCTURE
  input: integer
  output: array

  *ALGORITHM
  - create an empty array 
  - using forloop to loop "n" number of times from n to 1
  - for each iteration push the element to the empty array
  - return the array
*/

//* CODE
const reverseSeq = (n) => {
  // an empty array
  let array = [];

  // loop "n" number of times from n to 1
  for (let index = n; index > 0; index--) {
    array.push(index);
  }

  // return the array
  return array;
};

console.log(reverseSeq(5));
