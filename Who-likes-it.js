/* 
?Challenge:Who likes it?
  *PROBLEM
  break down:
  - You probably know the "like" system
  - from Facebook and other pages.
  - People can "like" blog posts, pictures or other items.
  - We want to create the text
  - that should be displayed next to such an item.
  - Implement the function which takes an array
  - containing the names of people that like an item.
  - It must return the display text 
  - as shown in the examples:
  
  input: ["Peter"]
  output: "Peter likes this"

  Note: For 4 or more names, the number in "and 2 others" simply increases. 

  *EXAMPLE
  - []                                -->  "no one likes this"
  - ["Peter"]                         -->  "Peter likes this"
  - ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
  - ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
  - ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"

  *DATA STRUCTURE
  input: array of strings
  output: string

  *ALGORITHM
  - return "no one likes this" when array is empty
  - return "name likes this" when array has a single element
  - for 2-3 elements in the array
      to include "and" infront of the last element
      remove the last element and store it in a variable (lastName).
      return "names and lastName like this".
  - For 4 or more names
      remove the first two elements from the array
      store each of them in their own respective variable
      this is to display the names of the first two elements.
      return firstName, secondName and restOfNames others like this.
*/

//* CODE
function likes(names) {
  // empty array "no one likes this"
  if (names.length === 0) return "no one likes this";

  // array has a single element
  if (names.length === 1) return `${names} likes this`;

  //2-3 elements in the array
  if (names.length === 2 || names.length === 3) {
    // remove the last element
    const lastName = names.pop();
    // return "names and lastName like this".
    return `${names.join(", ")} and ${lastName} like this`;
  }

  // for 4 or more names
  if (names.length >= 4) {
    // remove the first two elements from the array
    const firstName = names.shift();
    const secondName = names.shift();

    // rest of the elements in the array
    const restOfNames = names.length;

    // return firstName, secondName and restOfNames like this.
    return `${firstName}, ${secondName} and ${restOfNames} others like this`;
  }
}

console.log(likes([]));
console.log(likes(["Peter"]));
console.log(likes(["Jacob", "Alex"]));
console.log(likes(["Max", "John", "Mark"]));
console.log(likes(["Alex", "Jacob", "Mark", "Max"]));
