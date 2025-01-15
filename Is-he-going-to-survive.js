/*
  *PROBLEM
  break down:
  - hero is on his way to complete his mission
  - but the castle is surrounded with a couple of powerful dragons
  - each dragon takes 2 bullet to be defeated
  - our hero has no idea how many bullets he should carry
  - assuming he's gonna grab a specific given number of bullets
  - and move forward to fight another specific given number of dragons
  - will he survive
  - return true if yes, false otherwise

  input: bullets and dragons both numbers
  output: return a boolean

  *EXAMPLE
  - hero(10, 5) - true
  - hero(7, 4) - false
  - hero(4, 5) - false
  - hero(100, 40) - true
  - hero(1500, 751) - false
  - hero(0, 1) - false

  *DATA STRUCTURE
  - for the input, has two numbers representing the bullets and the dragon
  - for the output, it is going to be a boolean

  *ALGORITHM
  - it takes 2 bullet to defeat a dragon
  - so we need to calculate how many bullets will be required to defeat a specific amount of dragons i.e multiply the bulletRequired(2) by the specific amount of dragons
  - result of the multiplication will be compared to the bullets the hero carried
  - return true if the bullet is enough, otherwise return false
*/

//* CODE
function hero(bullets, dragons) {
  // number of bullet required to defeat one dragon
  const bulletRequired = 2;

  // number of bullets required to defeat a specific amount of dragons
  const numberOfBullets = bulletRequired * dragons;

  // return true if the bullet is enough otherwise return false
  if (bullets >= numberOfBullets) return true;

  return false;
}
