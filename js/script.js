// let i = 0;

// DO while loop
// do {
//     console.log(i);
//     i++;    
// } while (i < 10);

// console.log("***************************");

// while(i < 10){
//     console.log(i);
//     i++;
// }

// for loop
// for (let i = 0; i < 10; i++){
//     if(i == 5){
//         console.log("five");
//         continue;
//         // break;
//     }
//     console.log(i);
// }

// function
function mySelf(){
    console.log("My name is John Doe");
}


// function with parameter
function mySelf(name){
    console.log("My name is", name);
}

mySelf("John Doe");
mySelf("Jane Doe");
mySelf("Jay Dee");

function add(x,y){
    let sum = x + y;
    console.log(sum);
}

add(5,6);
add(6,7);
add(7,8);

console.log("***************************");
function multiply(x,y){
    let m = x * y;
    console.log(m);
}

multiply(6,7);
console.log("***************************");

// function with return value
function add(x, y) {
    let sum = x + y;
    return sum;
}

let result = add(10,15);
let newResult = result * 2;
console.log(newResult);

// arrow function
let divide = (a,b) => a/b;
let multi = (a,b) => a*b;
console.log(divide(10,5));
console.log(multi(10,5));

// higher order functions
// takes a function as a parameter

let numbers = [0,1,2,3,4,5,6,7,8,9,10];
let squares = numbers.map((number) => number * number);
console.log(squares);

let digits = [0,1,2,3,4,5,6,7,8,9,10];
let doubles = digits.map((double) => double + double);
console.log(doubles);

let evens = numbers.filter((number) => number % 2 === 0);
console.log(evens);

let odds = numbers.filter((number) => number % 2 !== 0);
console.log(odds);

let five = numbers.find(num => num === 5);
console.log(five);

console.log("***************************");

// Strings
let sentence = "The quick brown fox jumps over the lazy dog";
console.log(sentence.length);
console.log(sentence.charCodeAt(5));
console.log(sentence.charAt(10));
console.log(sentence.concat(" from concatenation"));
console.log(sentence.endsWith("dog"));
console.log(sentence.includes("hardworking"));
console.log(sentence.indexOf("o",7));
console.log(sentence.indexOf("r"));

console.log("***************************");
console.log(sentence.padStart(50));
console.log(sentence.repeat(2));
console.log(sentence.replace("lazy", "hardworking"));
console.log(sentence.slice(20,50));
console.log(sentence.substring(20, 35));

console.log("***************************");
let email = "    kofi@gmail.com       ";
console.log(email.split("@"));    
console.log(sentence.toLowerCase());    
console.log(sentence.toUpperCase()); 
console.log(email);   
console.log(email.trim());    