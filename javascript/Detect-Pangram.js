/* 
?Challenge: Detect Pangram (6 kyu)
  *PROBLEM
  break down: 
  - A pangram is a sentence that contains every single letter of the alphabet at least once. 
  - For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, 
  - because it uses the letters A-Z at least once (case is irrelevant).
  - Given a string, detect whether or not it is a pangram. 
  - Return True if it is, False if not. Ignore numbers and punctuation.


  input:  The quick brown fox jumps over the lazy dog.
  output: true

  Note: 

  *EXAMPLE
  - "The quick brown fox jumps over the lazy dog." -----> true

  *DATA STRUCTURE
  input: string
  output: boolean

  *ALGORITHM
  - check if the function's parameter is empty (i.e falsy)
  - create a string variable that has all the letters in the alphabet
  - convert the string parameter into lowercase
  - convert the string parameter into an array and sort the array
  - then remove any duplicate elements from the array
  - spread the new Set() into an array variable
  - and then convert back to string
  - check if the sentence includes the string in the alphabet string variable
  - return true if it does and false if it doesn't
*/

//* CODE
function isPangram(string) {
  if (!string) return;
  const lettersOfTheAlphabet = "abcdefghijklmnopqrstuvwxyz";
  const sentence = [...new Set(string.toLowerCase().split("").sort())].join("");
  return sentence.includes(lettersOfTheAlphabet) ? true : false;
}

console.log(isPangram("This is not a pangram.")); // false
console.log(isPangram("The quick brown fox jumps over the lazy dog.")); // true
