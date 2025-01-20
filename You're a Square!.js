/* 
?Challenge:You're a square!
  *PROBLEM
  break down:
  - A square of squares
  - You like building blocks.You especially like building blocks that are squares.
  - And what you even like more, is to arrange them into a square of square building blocks!
  - However, sometimes, you can't arrange them into a square.
  - Instead, you end up with an ordinary rectangle! Those blasted things!
  - If you just had a way to know, whether you're currently working in vain… Wait! That's it!
  - You just have to check if your number of building blocks is a perfect square.
  - Task
  - Given an integral number, determine if it's a square number:
  - In mathematics, a square number or perfect square
  - is an integer that is the square of an integer;
  - in other words, it is the product of some integer with itself.
  - The tests will always use some integral number
  - so don't worry about that in dynamic typed languages.
  
  input:  -1
  output: false

  Note: 

  *EXAMPLE
  - -1  =>  false, "-1: Negative numbers cannot be square numbers"
  - 0  =>  true, "0 is a square number (0 * 0)"
  - 3  =>  false, "3 is not a square number"
  - 4  =>  true, "4 is a square number (2 * 2)"
  - 25  =>  true, "25 is a square number (5 * 5)"
  - 26  =>  false, "26 is not a square number"

  *DATA STRUCTURE
  input: integer
  output: boolean

  *ALGORITHM
  - integral number meaning whole number, i.e no fraction or decimal
  - if its a negative integer return false
  - find the square root of the integer
  - if the square root of the integer is an integral number
  - retun true
  - else return false
*/

//* CODE
var isSquare = function (n) {
  // its a negative integer
  if (n < 0) return false;

  // the square root is an integral number
  if (Number.isInteger(Math.sqrt(n))) return true;

  // the square root is not an integral number
  return false;
};

console.log(isSquare(-1));
console.log(isSquare(0));
console.log(isSquare(3));
console.log(isSquare(4));
console.log(isSquare(25));
console.log(isSquare(26));
