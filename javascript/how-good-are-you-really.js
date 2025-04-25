//Description;
/* 
There was a test in your class and you passed it. Congratulations!

But you're an ambitious person. You want to know if you're better than the average student in your class.

You receive an array with your peers' test scores. Now calculate the average and compare your score!

Return true if you're better, else false!

Note:
Your points are not included in the array of your class's points. Do not forget them when calculating the average score
 */

//Solution;
// add yourPoints to the array of classPoints
const totalPoints = classPoints.concat(yourPoints);

// find sum
const sum = totalPoints.reduce((previous, current) => {
  return previous + current;
});

// find the average
const classAverage = Math.floor(sum / totalPoints.length);

// check if better than class average
if (yourPoints > classAverage) return true;

// not better than class average
return false;
