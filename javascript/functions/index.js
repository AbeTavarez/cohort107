// ====
// let username = 'Alex';
// console.log(username);

// const myObject = {
//     print: function() {
//         console.log('Hello');
//     }
// }
// myObject.print(username);

// === Function Declaration
function addTwoNumbers(a, b) {
  // code goes here
}

sayHi("Bob");

function sayHi(name) {
  console.log(`Hello ${name}`);
}

// calling the function
// addTwoNumbers(2, 3);

sayHi("Lea");
sayHi("Kyle");

const sayHello = function (name) {
  console.log(`Hello ${name}`);
};

sayHello("Ana");

fnDeclaration(); // thank you function declarations :)

function fnDeclaration() {
  console.log("I'm coming from a function declaration.");
}

const fnExpression = function () {
  console.log("I'm coming from a function expression.");
};

fnExpression(); // TypeError: fnExpression is not a function

// function declaration
function add(a, b) {
  return a + b;
}

const result = add(2, 3);
console.log(result);

// arrow function
const multiply = (a, b) => {
  return a * b;
};

const newResult = multiply(3, 3);

console.log(newResult);


// function declaration
function areBothEven(n1, n2) {
  return !(n1 % 2) && !(n2 % 2);
}

const result3 = areBothEven(2, 5);
console.log(result3);


// Arguments Array like
// function getDevObject(name) {
//     const skills = [];

//     for (let i = 1; i < arguments.length; i++) {
//         skills.push(arguments[i]);
//     }

//     return {
//         devName: name,
//         jobSkills: skills
//     }
// }

function getDevObject(name, ...skills) {
    return {
        devName: name, 
        jobKills: skills
    }
}

// getDevObject('Maria', 'HTML', 'CSS', 'JS', 'React');

const devObj = getDevObject('Maria', 'HTML', 'CSS', 'JS', 'React');

console.log(devObj);