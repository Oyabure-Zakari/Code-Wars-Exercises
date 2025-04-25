/* 
?Challenge:Vowel Count
  *PROBLEM
  break down:
  - Return the number (count)
  - of vowels in the given string.
  - We will consider a, e, i, o, u as vowels
  - for this Kata (but not y).
  - The input string will only consist
  - of lower case letters and/or spaces.
  
  input: ("abracadabra")
  output: 5

  Note: 

  *EXAMPLE
  console.log(getCount("abracadabra")); -> 5;

  *DATA STRUCTURE
  input: string
  output: number

  *ALGORITHM
  - create an empty array to hold the vowels
  - create an array of the given vowels
  - convert the input string to an array
  - if the string array is empty, return 0
  - iterate over the string array
  - iterate over the array of the given vowels
  - check if the vowels are found in the string array
  - if true push the element to the empty array
  - return the length of the empty array
*/

//* CODE
function getCount(str) {
  // empty array to hold the vowels
  const vowels = [];

  // array of the given vowels
  const givenVowels = ["a", "e", "i", "o", "u"];

  // convert the input string to an array
  const stringArray = str.split("");

  // the string array is empty
  if (stringArray.length < 0) return 0;

  // iterate over the string array
  stringArray.forEach((string) =>
    // iterate over the array of the given vowels, check if the vowels are found in the string array
    givenVowels.forEach(
      (givenVowel) => givenVowel === string && vowels.push(string)
    )
  );

  // gets the vowels count
  return vowels.length;
}

console.log(getCount("abracadabra"));
