// Description;
//Make a program that filters a list of strings and returns a list with only your friends name in it. If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not... Input strings will only contain letters.

//Note: keep the original order of the names in the output.

// Solution;
function friend(friends) {
  //your code here
  return friends.filter((friend) => {
    return friend.length === 4;
  });
}

// Example;
Input = ["Ryan", "Kieran", "Jason", "Yous"];
const result = friend(Input);
console.log(result);
