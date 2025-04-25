/*
Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

  *PROBLEM
  break down:
  - Check to see if a string has the same amount of 'x's and 'o's
  - The method must return a boolean
  - and be case insensitive
  - The string can contain any char
  
  input: "ooxx"
  output: true

  Note: when no 'x' and 'o' is present should return true

  *EXAMPLE
  - XO("ooxx") => true
  - XO("xooxx") => false
  - XO("ooxXm") => true
  - XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
  - XO("zzoo") => false
  - XO('xo'),true);
  - XO("xxOo"),true);
  - XO("xxxm"),false);
  - XO("Oo"),false);
  - XO("ooom"),false);

  *DATA STRUCTURE
  input: string
  output: boolean 

  *ALGORITHM
  - if the string doesnt include "x" and "o" return true
  - create an empty array for "x" and "o"
  - convert the string to an array and loop through the array
  - if the element is equal to "x" push it to the "x" array
  - if the element is equal to "o" push it to the "o" array
  - compare the array length of both "x" and "o", if the lengths are the same then return true else return false
*/

//* CODE
function XO(str) {
  // if the string doesnt include "x" and "o" return true
  if (!str.includes("x") && !str.includes("o")) return true;

  // create an empty array for "x" and "o"
  let xArray = [];
  let oArray = [];

  // convert the string to an array and loop through the array
  str.split("").forEach((element) => {
    // if the element is equal to "x" push it to the xArray
    if (element === "x" || element === "X") xArray.push(element);

    // if the element is equal to "o" push it to the oArray
    if (element === "o" || element === "O") oArray.push(element);
  });

  // compare the length of both xArray and oArray
  if (xArray.length === oArray.length) return true;
  return false;
}

console.log(XO("ooxx"));
console.log(XO("xooxx"));
console.log(XO("ooxXm"));
console.log(XO("zpzpzpp"));
console.log(XO("zzoo"));
console.log(XO("xo"));
console.log(XO("xxOo"));
console.log(XO("xxxm"));
console.log(XO("Oo"));
console.log(XO("ooom"));
