//Description;
/* 
Task:
Given a list of integers, determine whether the sum of its elements is odd or even.

Give your answer as a string matching "odd" or "even".

If the input array is empty consider it as: [0] (array with a zero)
*/

//#Examples:
/*Input: [0]
Output: "even"

Input: [0, 1, 4]
Output: "odd"

Input: [0, -1, -5]
Output: "even"*/

//Solution;
function oddOrEven(array) {
  const sum = array.reduce((acc, num) => acc + num, 0); // Sum all elements of the array
  return sum % 2 === 0 ? "even" : "odd"; // Check if the sum is even or odd
}

// Example usage:
console.log(oddOrEven([0])); // Output: "even"
console.log(oddOrEven([1, 2, 3])); // Output: "even"
console.log(oddOrEven([1, 2, 4])); // Output: "odd"
console.log(oddOrEven([])); // Output: "even"
