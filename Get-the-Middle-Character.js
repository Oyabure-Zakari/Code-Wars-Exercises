/* 
?Challenge:Get the Middle Character
  *PROBLEM
  break down:
  - You are going to be given a non-empty string
  - Your job is to return the middle character(s) of the string.
  - If the string's length is odd, return the middle character.
  - If the string's length is even, return the middle 2 characters.
  
  input: "test", "testing", "A" 
  output: "es",   "t",      "A"

  Note: 

  *EXAMPLE
  - "test" --> "es"
  - "testing" --> "t"
  - "middle" --> "dd"
  - "A" --> "A"

  *DATA STRUCTURE
  input: string
  output: string

  *ALGORITHM
  - find the median
  - check if even or not
  - if its odd, return the middle character
      the result of the median will be the index which will be used 
      to access the particular element in the string at that index
  - if its even, return the middle 2 characters 
      the result of the median will be the index which will be used 
      to access the 2 middle elements in the string
      i.e to access the 2 middle elements
      s.charAt(median - 1) to access the first middle element
      s.charAt(median) to access the second middle element
*/

//* CODE
function getMiddle(s) {
  const median = Math.floor(s.length / 2);
  if (s.length % 2 !== 0) return s.charAt(median);
  return s.charAt(median - 1) + s.charAt(median);
}

console.log(getMiddle("test"));
console.log(getMiddle("testing"));
console.log(getMiddle("middle"));
console.log(getMiddle("A"));
