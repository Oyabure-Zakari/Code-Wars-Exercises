/* 
?Challenge:Credit Card Mask
  *PROBLEM
  break down:
  - Usually when you buy something, 
  - you're asked whether your credit card number, 
  - phone number or answer to your most secret question is still correct. 
  - However, since someone could look over your shoulder, 
  - you don't want that shown on your screen. Instead, we mask it.
  - Your task is to write a function maskify, 
  - which changes all but the last four characters into '#'.
  
  input: ('4556364607935616')
  output: '############5616'

  Note: 

  *EXAMPLE
  - maskify("")  -->   ""
  - maskify("1")  -->   "1"
  - maskify('11111'))   --> '#1111';
  - maskify("Skippy")  -->   "##ippy"
  - maskify("64607935616")  -->   "#######5616"
  - maskify("4556364607935616")  -->   "############5616"
  - maskify("Nananananananananananananananana Batman!") --> "####################################man!"

  *DATA STRUCTURE
  input: string
  output: string

  *ALGORITHM
  - check if the value is "", then return "".
  - if the number of characters is < 4 then return the value
  - if the number of characters is > 4 then all characters expect
  - then convert string to an array
  - create variable to store the characters before last four
  - then fill it with "#"
  - create variable to store the last four characters
  - concate the characters before last four(array) and the last four characters(array)
  - and return as string
*/

//* CODE
function maskify(cc) {
  // the value is an empty string
  if (cc === "") return "";

  // number of characters is < 4
  if (cc.length < 4) return cc;

  // the number of characters is > 4
  // convert cc string to an array
  const ccArray = cc.split("");

  // characters before last four
  const beforeLastFour = ccArray.slice(0, -4).fill("#");

  // last four characters
  const lastFour = ccArray.slice(-4);

  return beforeLastFour.concat(lastFour).join("");
}

console.log(maskify(""));
console.log(maskify("1"));
console.log(maskify("11111"));
console.log(maskify("Skippy"));
console.log(maskify("64607935616"));
console.log(maskify("4556364607935616"));
console.log(maskify("Nananananananananananananananana Batman!"));
