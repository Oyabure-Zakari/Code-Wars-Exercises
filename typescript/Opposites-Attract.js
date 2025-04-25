/* 
?Challenge:Opposites Attract
  *PROBLEM
  break down:
  - Timmy & Sarah think they are in love,
  - but around where they live,
  - they will only know once they pick a flower each.
  - If one of the flowers has an even number of petals
  - and the other has an odd number of petals
  - it means they are in love.
  - Write a function
  - that will take the number of petals of each flower
  - and return true if they are in love
  - and false if they aren't.

  
  input: (1,4) 
  output: true

  Note: 

  *EXAMPLE
  - lovefunc(1,4) --> true
  - lovefunc(2,2) --> false
  - lovefunc(0,1) --> true
  - lovefunc(0,0) --> false

  *DATA STRUCTURE
  input: two parameters of numbers
  output: boolean

  *ALGORITHM
  - check if flower1 is even and flower2 is odd, return true
  - check if flower1 is odd and flower2 is even, return true
  - return fasle for other cases
*/

//* CODE
function lovefunc(flower1, flower2) {
  //flower1 is even and flower2 is odd
  if (flower1 % 2 === 0 && flower2 % 2 !== 0) return true;

  //flower1 is odd and flower2 is even
  if (flower1 % 2 !== 0 && flower2 % 2 === 0) return true;

  // for other cases
  return false;
}

console.log(lovefunc(1, 4));
console.log(lovefunc(2, 2));
console.log(lovefunc(0, 1));
console.log(lovefunc(0, 0));
