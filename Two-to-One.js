/* 
?Challenge:Two to One
  *PROBLEM
  break down:
  - Take 2 strings s1 and s2
  - including only letters from a to z.
  - Return a new sorted string (alphabetical ascending),
  - the longest possible,
  - containing distinct letters
  - each taken only once
  - coming from s1 or s2.
  
  input:  (a = "xyaabbbccccdefww", b = "xxxxyyyyabklmopq")  &  (a = "abcdefghijklmnopqrstuvwxyz", a)
  output:                 "abcdefklmopqwxy"                        "abcdefghijklmnopqrstuvwxyz"

  Note: 

  *EXAMPLE
  - (longest("aretheyhere", "yestheyarehere") -> "aehrsty"
  - (longest("loopingisfunbutdangerous", "lessdangerousthancoding") -> "abcdefghilnoprstu"
  - (longest("inmanylanguages", "theresapairoffunctions") -> "acefghilmnoprstuy"

  *DATA STRUCTURE
  input: two parameters both strings
  output: string

  *ALGORITHM
  - join s1 and s2 as a single single string
  - convert it to an array
  - remove duplicate elements
  - sort alphabetically
  - convert back to string
*/

//* CODE
function longest(s1, s2) {
  // joins s1 and s2 as a single single string
  const combinedString = s1.concat(s2);

  // convert to an array & remove duplicate elements
  const stringArray = new Set(combinedString.split(""));

  // convert set{} object to an arry and sort alphabetically, convert back to string
  return (sortedString = [...stringArray].sort().join(""));
}

console.log(longest("aretheyhere", "yestheyarehere"));
console.log(longest("loopingisfunbutdangerous", "lessdangerousthancoding"));
console.log(longest("inmanylanguages", "theresapairoffunctions"));
