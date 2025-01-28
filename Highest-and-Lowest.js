/* 
?Challenge:Highest and Lowest
  *PROBLEM
  break down:
  - In this little assignment
  - you are given a string
  - of space separated numbers,
  - and have to return
  - the highest and lowest number.

  input:  "1 2 3 4 5"
  output: "5 1"

  Note: 
  - All numbers are valid Int32, no need to validate them.
  - There will always be at least one number in the input string.
  - Output string must be two numbers separated by a single space, and highest number is first.

  *EXAMPLE
  - highAndLow("1 2 3 4 5"); // return "5 1"
  - highAndLow("1 2 -3 4 5"); // return "5 -3"
  - highAndLow("1 9 3 4 -5"); // return "9 -5"

  *DATA STRUCTURE
  input: string of numbers
  output: string of highest and lowest number

  *ALGORITHM
  - convert the string to array
  - use the map method to map through
  - the string array and convert 
  - each string in the array to number
  - use the Math.max and Math.min 
  - to find the highest and lowest number
  - and store them in their respective variables
  - then join the highest and lowest variables 
  - as a single array
  - return them as a string
*/

//* CODE
function highAndLow(numbers) {
  // converts the string to an array and then converts each string to number
  const numbersArray = numbers.split(" ").map((number) => Number(number));

  //finds the highest and lowest number
  const highestNumber = Math.max(...numbersArray);
  const lowestNumber = Math.min(...numbersArray);

  // highest and lowest number as an array, converted to string
  const finalNumbers = [highestNumber, lowestNumber].join(" ");
  return finalNumbers;
}

console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"));
console.log(highAndLow("1 2 3"));
console.log(highAndLow("1 2 3 4 5"));
console.log(highAndLow("1 2 -3 4 5"));
console.log(highAndLow("1 9 3 4 -5"));
