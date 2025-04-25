/* 
?Challenge:Replace With Alphabet Position
  *PROBLEM
  break down:
  - In this kata you are required to,
  - given a string,
  - replace every letter with its position in the alphabet.
  - If anything in the text isn't a letter,
  - ignore it and don't return it.
  - "a" = 1, "b" = 2, etc.
  
  input: "The sunset sets at twelve o' clock."
  output: "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11"

  Note: 

  *EXAMPLE
  - "The sunset sets at twelve o' clock." -> "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11"
  - "The narwhal bacons at midnight." -> "20 8 5 14 1 18 23 8 1 12 2 1 3 15 14 19 1 20 13 9 4 14 9 7 8 20"

  *DATA STRUCTURE
  input: string
  output: string of integers

  *ALGORITHM
  - convert the string input to array
  - generate alphabets from a-z, with their positions
  - create an empty array
  - loop through the string array 
  - inside the loop of the string array
  - loop through the alphabets array
  - then check if the element of the string array is an alphabet
  - and push the position of the element from the alphabets array
  - to the empty array
  - return the empty as a string
*/

//* CODE
function alphabetPosition(text) {
  // convert the text input to array
  const texts = text.toLowerCase().split("");

  // generates alphabets from a-z, with their positions
  const alphabets = Array.from({ length: 26 }, (_, i) => ({
    letter: String.fromCharCode(97 + i),
    position: i + 1,
  }));

  // empty array
  const letters = [];

  // iterate over the string array
  texts.forEach((text) =>
    // iterate over the alphabets array of objects
    alphabets.forEach(
      (alphabet) => text === alphabet.letter && letters.push(alphabet.position)
    )
  );

  // convert the letters array to string
  return letters.join(" ");
}

console.log(alphabetPosition("The sunset sets at twelve o' clock."));
console.log(alphabetPosition("The narwhal bacons at midnight."));
