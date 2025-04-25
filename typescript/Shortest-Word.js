/* 
  Description ;
Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types.
*/

//Solution;
function findShort(s) {
  let length = [];
  let a = s.split(" ");
  for (let index = 0; index < a.length; index++) {
    const element = a[index].length;
    length.push(element);
  }
  return Math.min(...length);
}
