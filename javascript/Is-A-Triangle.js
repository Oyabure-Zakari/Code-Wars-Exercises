/* 
?Challenge: Is this a triangle? (7 kyu)
  *PROBLEM
  break down: 
  - Implement a function that accepts 3 integer values a, b, c. 
  - The function should return true 
  - if a triangle can be built with the sides of given length 
  - and false in any other case.

  Note: (In this case, all triangles must have surface greater than 0 to be accepted).

  *EXAMPLE
  Input -> Output
1,2,2 -> true
4,2,3 -> true
2,2,2 -> true
1,2,3 -> false
-5,1,3 -> false
0,2,3 -> false
1,2,9 -> false 

  *DATA STRUCTURE
  input: numbers
  output: boolean

  *ALGORITHM
  /* 
  - all sides must be greater than 0
  - check if the sum of any two sides is greater than the third
  - check if all the sides are true
  - return false for other cases 
  */

//* CODE
const isTriangle = (a, b, c) => {
  if (a && b && c > 0) {
    const sideAB = a + b > c;
    const sideBC = b + c > a;
    const sideCA = c + a > b;

    if (sideAB && sideBC && sideCA) return true;
  }
  return false;
};

console.log(isTriangle(1, 2, 2)); // true
console.log(isTriangle(7, 2, 2)); // false
