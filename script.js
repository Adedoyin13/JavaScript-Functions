// Function Declaration

function functionName() {
    
}

function greet () {
     
}

// Function Expression

// const  functionName = function () {

// }

// Arrow function es6

const add = (a, b) => {
    return a + b
}

console.log(add(50, 40));

// Class-Work

function sayHi (name) {
     console.log(`Hello ${name}`);
}
sayHi('OG')
sayHi('Rodiyat')
sayHi('Muby')
sayHi('Teddy')
sayHi('Opera')
sayHi('Chapo')
sayHi('Team Lead')

const cohorts = (tutors, students) => {
    const tutor1 = 'Tutor Soliu'
    const tutor2 = 'Tutor Noheem'
    const student1 = 'Rodiyat'
    const student2 = 'Doyin'
    return console.log(`${tutor1} is the tutor of the year, while ${student1} is part of his students`);
}

cohorts()

const tester = () => {
    console.log(3>5);
}

tester()

const logAge = (name, age) => {
    console.log(`${name} is ${age} years old`);
}

logAge('Joe', 35)

const select = () => {
    const sentence = console.log('I love the world');
    return sentence
}
select()

// Global Scope

const name2 = 'Doyin';

const logName = () => {
    console.log(name2);
}
logName()

// SCOPE

const globalVar = 'Hello World!';      //Global Scope

function accessGlobal () {
    console.log(globalVar);
}
accessGlobal()

const example = () => {
    let localScope = 'local Champion'     //Local scope
    console.log(localScope);
}
example()

const someFunction = () => {
    let name = 'Rodiyat'
    console.log(name);
    const anotherFunction = () => {
        console.log(name); 
    }
    anotherFunction()
}
someFunction()

const someFunction2 = () => {
    let name = 'John';
    console.log(name);
}

const anotherFunction1 = () => {
    let name = 'Kanaz';
    console.log(name);
}
someFunction2();
anotherFunction1();

if(true) {            //Block Scope
    let blockScope = 'Block Scope';  
    console.log(blockScope);
}

console.log(myFunction);

var myFunction = function () {
    console.log('Hi');
}
myFunction()

// console.log(x);
var x = 10;
console.log(x);

greeting();
function greeting () {
    console.log('Hello World!')
}