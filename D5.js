/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- The solution must be available for the tutors by the end of the day (5PM CET)
- You can Google / use StackOverflow BUT we suggest you to use just the material provided
*/

/* EXERCISE 1
Write a function "area" which receives 2 parameters (l1,l2) and calculates the area of the associated rectangle.
*/

let area = function(l1, l2) {
  // Area = Length x Width
  let rectangleArea = l1 * l2;
  let result = `The calculated area of rectangle is ${rectangleArea} square units`;
  return result;

  // return `The calculated area of a rectangle is ${l1 * l2} square units`;
}
// console.log("EXERCISE 1:");
// console.log(area(2,2));

/* EXERCISE 2
Write a function "crazySum" which receives two integers. It should return the sum of those two values, but if the two values are the same then it should return their sum multiplied by 3.
*/

let crazySum = function(num1, num2) {
  let result;
  if(num1 === num2) {
    result = (num1 + num2) * 3;
  } else {
    result = num1 + num2;
  }
  return result;

  // Ternary operator:
  // let result1 = (num1 === num2) ? (num1 + num2) * 3 : num1 + num2;
  // return result1;
}
// console.log("EXERCISE 2:");
// console.log("With different values provided: ");
// console.log(crazySum(2,3));
// console.log("With same values provided:");
// console.log(crazySum(2,2));



/* EXERCISE 3
Write a function "crazyDiff" that computes the absolute difference between a given number and 19. 
It should return triple their absolute difference if the given number is greater than 19.
*/

let crazyDiff = function(number) {
  let positiveNumber;
  let difference;
  // If number is negative, turn it into positive and then subtract.
  if(number < 0) {
    positiveNumber = -number;
    difference = positiveNumber - 19;
  } else {
    difference = Math.abs((number - 19));
  }

  return difference;
}
// console.log("EXERCISE 3:");
// console.log(crazyDiff(-200));



/* EXERCISE 4
Write a function "boundary" which accept an integer n and returns true if n is within 20 and 100 (included) or if it's equal to 400.
*/

let boundary = function(n) {
  if (n >= 20 || n <= 100 || n === 400) {
    return true;
  } else {
    return false;
  }
  // return (n >= 20 || n <= 100) || n === 400)
}
// console.log("EXERCISE 4:");
// console.log(boundary(39));
// console.log(boundary(100));
// console.log(boundary(400));



/* EXERCISE 5
Write a function "strivify" which accepts a string.
It should add the word "Strive" in front of the given string, but if the given string already begins with "Strive", then it should just return the original string.
*/

let strivify = function(string) {
  if(string === "Strive") {
    return string;
  } else {
    return "Strive " + string;
  }
}
// console.log("EXERCISE 5:");
// console.log(strivify("Strive"));
// console.log(strivify("and prosper"));



/* EXERCISE 6
Write a function "check3and7" which accepts a positive number and check if it is a multiple of 3 or a multiple of 7.
HINT: Module Operator
*/

let check3and7 = function(number) {
  // if(number > 0) {
  //   if(number % 3 === 0 || number % 7 === 0) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }

  if(number > 0 && (number % 3 === 0 || number % 7 === 0)) {
    return true;
  } else {
    return false;
  }
}
// console.log("EXERCISE 6: ");
// console.log(check3and7(18));



/* EXERCISE 7
Write a function "reverseString" to programmatically reverse a given string (es.: Strive => evirtS).
*/

let reverseString = function(string) {
  let reversedString = [];
  for(let i = string.length -1; i >= 0; i--) {
    reversedString.push(string[i]);
  }
  let result = reversedString.join("");
  return result;
  
  // Other solution:
  // let reversedString = "";
  // for (let i= string.length; i > 0; i--) {
  // reversedString += string[i];
  // }
  }

// return reversedString.join("");
// console.log("EXERCISE 7:");
// console.log(reverseString("Strive"));



/* EXERCISE 8
Write a function "upperFirst" to capitalize the first letter of each word of a given string passed as a parameter.
*/

let upperFirst = function(string) {

    for(let i=0; i<string.length; i++) {
      if(i === 0 || string[i-1] === " " || string[i-1] === ",") {
        string[i].toUpperCase();
      }
    }

  return string;
}
upperFirst("this is to test the speed between two functions.");



/* EXERCISE 9
Write a function "cutString" to create a new string without the first and last character of a given string.
*/

let cutString = function(string) {
  let result = string.slice(1,string.length - 1);
  return result;

  // return string.slice(1, string.length - 1);
}
// console.log("EXERCISE 9:");
// console.log(cutString("Slice this string"));



/* EXERCISE 10
Write a function "giveMeRandom" which accepts a number n and returns an array containing n random numbers between 0 and 10.
*/

let giveMeRandom = function(n) {
  let randomArray = [];
  for(let i = 0; i < n; i++) {
    let randomNumber = Math.floor(Math.random() * 10);
    randomArray.push(randomNumber);
  }
  console.log(randomArray);
}
// console.log("EXERCISE 10:");
// console.log(giveMeRandom(3));

/* WHEN YOU ARE FINISHED
Commit and push the code to your personal GitHub repository and share the link to your commit in Eduflow.
*/

