// Task 1 : Create a function that takes a string as input and returns the reversed version of the string without using the built-in reverse() method.

function reverseString(str) {
  let reversedString = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversedString += str[i];
  }
  return reversedString;
}

console.log(reverseString("Hello world"));

// Task 2 : Create a function that takes an array of numbers as input and returns the sum of all positive numbers in the array.

function positiveNumbersSum(numbers) {
  let sum = 0;
  for (const n of numbers) {
    if (n >= 0) {
      sum += n;
    }
  }
  return sum;
}

const numbers = [1, 2, 2, 3, 4, 4, 5, -9, -6, -4, 2];
console.log(positiveNumbersSum(numbers));

// Task 5: Implement a simple JavaScript calculator. The calculator should take two numbers and an operator (+, -, *, /) as input and return the result of the operation.

function calculate(num1, operator, num2) {
  switch (operator) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      if (num2 !== 0) {
        return num1 / num2;
      } else {
        console.log("Division by zero is not allowed!");
      }
    default:
      console.log("Invalid operator. Supported operators are +, -, *, and /.");
  }
}

const num1 = 10;
const operator = "+";
const num2 = 0;
const result = calculate(num1, operator, num2);
console.log("Result:", result);

// Task 6: Create a program that generates a random password of a specified length. The password should include a mix of uppercase letters, lowercase letters, numbers, and special characters.

function generateRandomPassword(length) {
  const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
  const numbers = "0123456789";
  const specialCharacters = "!@#$%^&*()-_=+[]{}|;:,.<>?";

  const allChars =
    uppercaseLetters + lowercaseLetters + numbers + specialCharacters;
  let password = "";

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * allChars.length);
    password += allChars.charAt(randomIndex);
    // console.log((password += allChars.charAt(randomIndex)));
  }
  return password;
}

console.log(generateRandomPassword(12));

//Task 7: Implement a function that converts a Roman numeral to an integer. The function should take a Roman numeral string (e.g., "IX" or "XXI") as input and return the corresponding integer value.

function romanToInt(roman) {
  const romanNumerals = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let result = 0;

  for (let i = 0; i < roman.length; i++) {
    const currentNumeral = romanNumerals[roman[i]];
    const nextNumeral = romanNumerals[roman[i + 1]];

    if (nextNumeral && currentNumeral < nextNumeral) {
      result -= currentNumeral;
    } else {
      result += currentNumeral;
    }
  }

  return result;
}

const romanNumeral = "xi";
const romanNumber = romanNumeral.toUpperCase();
console.log(romanToInt(romanNumber));

// Task 8: Implement a JavaScript function to find the second smallest element in an array of numbers. The function should return the second smallest number.

function findSecondSmallest(arr) {
  if (arr.length == 0) {
    return console.log("Array can't be empty");
  }
  if (arr.length < 2) {
    return console.log("Array length must be bigger than 1");
  }

  const truthyArrValue = arr.filter(Boolean);
  const positiveArrValue = truthyArrValue.filter((num) => num > 0);
  const uniqueNumber = [...new Set(positiveArrValue)];
  const smallestNumber = uniqueNumber.sort((a, b) => a - b);
  const secondSmallest = smallestNumber[1];

  return secondSmallest;
}

const secondSmallest = findSecondSmallest([
  9,
  88,
  8,
  67,
  4,
  4,
  3,
  3,
  5,
  3,
  3,
  -1,
  NaN,
  "",
  0,
  0,
  1,
  2,
  3,
  3,
  4,
]);
console.log("Second smallest element:", secondSmallest);
