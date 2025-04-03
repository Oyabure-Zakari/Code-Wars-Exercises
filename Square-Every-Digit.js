/* 
?Challenge: 7 kyu Square Every Digit
  *PROBLEM
  break down: 
  - Welcome. In this kata, you are asked to square every digit of a number and concatenate them.
  - For example, if we run 9119 through the function, 811181 will come out, because 9 square is 81 and 1 square is 1. (81-1-1-81)

  Note: The function accepts an integer and returns an integer.

  input:  9119
  output:  811181     

  *EXAMPLE
  Example #2: An input of 765 will/should return 493625 because 7 square is 49, 6 square is 36, and 5 square is 25. (49-36-25)

  *DATA STRUCTURE
  input: number
  output: number

  *ALGORITHM
  - convert the digits to string
  - then use the split method to 
  - seperate the digit into individual elements
  - square each of the element
  - join them back to form a single element
  - then convert back to number
*/

//* CODE

const squareDigits = (num) =>
  Number(
    num
      .toString()
      .split("")
      .map((element) => Number(element) ** 2)
      .join("")
  );

console.log(squareDigits(765));
console.log(squareDigits(9119));
