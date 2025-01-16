/*
  *PROBLEM
  break down:
  - given a string of digits
  - you should replace any digit below 5 with "0"
  - and any digit 5 and above with "1"
  - return the resulting string

  input: string of digits fakeBin('45385593107843568')
  output: return a string '01011110001100111'

  Note: input will never be an empty string

  *EXAMPLE
  - fakeBin('45385593107843568')  - '01011110001100111';
  - fakeBin('509321967506747') - '101000111101101'
  - fakeBin('366058562030849490134388085') - '011011110000101010000011011'

  *DATA STRUCTURE
  - for the input, string
  - for the output, string

  *ALGORITHM
  - convert the string to an array, then convert each element of the array to numbers
  - create an empty array to store the values that will be pushed to it
  - loop through the array
  - if the element < 5, then convert the element to a string and replace it with the string "0"
  - if the element >= 5, then convert the element to a string and replace it with the string "1"
  - convert the empty array to string and use the join method to remove comma
  - return the resulting string
*/

//* CODE
function fakeBin(x) {
  // convert the string to an array, then convert each element of the array to numbers
  let numberArray = x.split("").map((element) => Number(element));

  // create an empty array to store the values that will be pushed to it
  const binary = [];

  // loop through the array
  for (const element of numberArray) {
    // if the element < 5, assign it to 0
    if (element < 5) {
      let realElement = element;
      realElement = 0;
      binary.push(realElement);
    }
    // if the element >= 5, assign it to 1
    else if (element >= 5) {
      let realElement = element;
      realElement = 1;
      binary.push(realElement);
    }
  }

  // convert the empty array to string and use the join method to remove comma
  const fakeBinary = String(binary.join(""));

  // return the resulting string
  return fakeBinary;
}

console.log(fakeBin("45385593107843568"));
console.log(fakeBin("509321967506747"));
console.log(fakeBin("366058562030849490134388085"));
