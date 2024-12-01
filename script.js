// 1. Create a variable called carName, assign the value Volvo to it.

let carName = "Volvo";

// 2. On one single line, declare three variables with the following names and values:

let firstName = "jhon";
let lastName = "Doe";
let age = 35;

// 3. Use the correct assignment operator that will result in x being 50 (same as x = x * y).

let x = 10;
let y = 5;
x = x * y;
console.log(x);

// 4. Use comments to describe the correct data type of the following variables:

let length = 16; // data type of numbers
let LastName = "Jhonson"; //data type of string
const dd = {
  firstName: "Jhon",
  lastName: "Doe",
}; // data type of object
console.log(dd);
// 5. Execute the function named myFunction.

function myFunction() {
  alert("Hello World");
}
myFunction();

// 6. Create an object called person with name = John, age = 50, Then, access the object to alert("John is 50").

let person = {
  name: "Jhon",
  age: 50,
};

let res = person.name + " is " + person.age;
alert(res);

// 7 no question:
//ans:  the ans is html page and also have in here?

// <button id="demo" onclick="alert('Try to fix it')">Click Me</button>

// 8. Array Related Question

const cars = ["Volvo", "Jeep", "Mercedes"];
alert(cars.length);

const Brand = ["Volvo", "Jeep", "Mercedes"];
Brand[0] = "Ford";
console.log(Brand);

// 9. Math Related Problems

let rdm = Math.random();
console.log(rdm);

let rdmlarg = Math.max(10, 20);
console.log(rdmlarg);

let root = Math.sqrt(9);
console.log(root);

// 10. comparison operator related problems!

let xx = 10;
let yy = 5;
alert(xx > yy);

let Age = 12;
alert((message = Age < 18 ? "Too young" : "Old enough"));
