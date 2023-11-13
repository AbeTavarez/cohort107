// console.log('running script ...');


// ==== 'let' variables

// global scope
let x = 32; // global variable

if (true) {
    // block scope
    let x = 100; // block/local variable
    x = 10000
    console.log(x);
}

x = 55;
console.log(x);


console.log('========== Typeof ===========');

const msg = "Hello World!";
const favoriteNum = 3;

console.log(typeof msg);
console.log(typeof favoriteNum);

console.log(typeof 'Javascript');