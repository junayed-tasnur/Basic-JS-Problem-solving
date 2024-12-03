// JavaScript Basic Problem Solving 2:

// 1. Write a function to convert Celsius to Fahrenheit. The function should take a single argument, which is the temperature in Celsius.

function celsiusToFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}
console.log(celsiusToFahrenheit(0)); // output 32
console.log(celsiusToFahrenheit(25)); // output 77

// 2. Write a function to check if a number is even. The function should take a single argument, which is the number to check in javascript

function isEven(num) {
  return num % 2 === 0;
}
console.log(isEven(4)); // output true
console.log(isEven(7)); // output false

// 3. Write a function to sum two numbers. The function should take two arguments, which are the numbers to sum.

function sum(a, b) {
  return a + b;
}
console.log(sum(3, 4)); // output 7
console.log(sum(10, 20)); // output 30

// 4. Write a function to find the smallest number in an array. The function should take a single argument, which is the array to search.

function findSmallestNum(arr) {
  if (arr.length === 0) {
    return undefined;
  }
  let smallest = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < smallest) {
      smallest = arr[i];
    }
  }
  return smallest;
}
console.log(findSmallestNum([3, 5, 1, 9])); // output 1
console.log(findSmallestNum([-1, -5, 0, 10])); //output -5

// 5. Write a function to count the number of vowels in a string. The function should take a single argument, which is the string to search.

function countVowels(str) {
  let vowels = "aeiouAEIOU";
  let count = 0;
  for (const char of str) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
}

console.log(countVowels("hello world")); //output 3
console.log(countVowels("Javascript")); //output 3

// 6. Write a function to get the first element of an array. The function should take a single argument, which is the array.

function getFirstElement(arr) {
  return arr[0];
}
console.log(getFirstElement([1, 2, 3])); //output 1
console.log(getFirstElement(["a", "b", "c"])); //output "a"

// 7. Write a function to check if an array is empty. The function should take a single argument, which is the array.

function isArrayEmpty(arr) {
  return arr.length === 0;
}
console.log(isArrayEmpty([])); // output true
console.log(isArrayEmpty([1, 2, 3])); // output false

// 8. Write a function to return the factorial of a number. The function should take a single argument, which is the number.

function factorizlize(num) {
  if (num === 0 || num === 1) {
    return 1;
  }
  return num * factorizlize(num - 1);
}

console.log(factorizlize(5)); //output 120
console.log(factorizlize(7)); //output 540

// 9. Write a function to reverse a string. The function should take a single argument, which is the string to reverse.

function reverseString(str) {
  return str.split("").reverse().join("");
}

console.log(reverseString("hello")); //output "olleh"
console.log(reverseString("world")); //output "dlrow"

// 10. Write a function to convert a string to lowercase. The function should take a single argument, which is the string to convert.

function toLowerCase(str) {
  return str.toLowerCase(toLowerCase);
}

console.log(toLowerCase("HELLO WORLD")); //output "hello world"
console.log(toLowerCase("JavaScript")); //output "javascript"

// 11. Write a function to find the length of a string. The function should take a single argument, which is the string.

function stringLength(str) {
  return str.length;
}

console.log(stringLength("hello")); //output 5
console.log(stringLength("world")); //output 5

// 12. Write a function to merge two arrays. The function should take two arguments, which are the arrays to merge.

function mergeArrays(arr1, arr2) {
  return [...arr1, ...arr2];
}

console.log(mergeArrays([1, 2, 3], [4, 5, 6])); // [1, 2, 3, 4, 5, 6]
console.log(mergeArrays(["a", "b"], ["c", "d"])); // ["a", "b", "c", "d"]

// 13. Write a function to get the last element of an array. The function should take a single argument, which is the array.

function getLastElement(arr) {
  return arr[2];
}

console.log(getLastElement([1, 2, 3])); // 3
console.log(getLastElement(["a", "b", "c"])); // "c"

// 14.  Write a function to get the first character of a string. The function should take a single argument, which is the string.

function getFirstCharacter(str) {
  return str[0];
}
console.log(getFirstCharacter("hello")); // "h"
console.log(getFirstCharacter("world")); // "w"

// 15. Write a function to find the sum of all elements in an array. The function should take a single argument, which is the array.

function sumArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}
console.log(sumArray([1, 2, 3, 4])); // 10
console.log(sumArray([-1, -2, -3, -4])); // -10
console.log(sumArray([1.5, 2.5, 3.5])); // 7.5
