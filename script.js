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

// JS Function -> A block of reusable codes designed to perform certain tasks, it is executed when called or invoked.

function name() {
    statement;
}

// Types Of JS Functions

// Function Declaration

function multiply (number) {
    return number * number
}

const answer = multiply(5);       //Function declaration with an argument/something in the parameter
console.log(answer);        //One Params

function sum () {                //Function declaration with no argument/nothing in the parameter
    return 9 + 5
}

console.log(sum());


function subtraction (a,b) {                    //Function declaration with two arguments/things in the parameter                   //Two Params
    return a - b
}
const subResult = subtraction(5, 4);
console.log(subResult);

// Assigning value to param

function division (g, h = 7) {
    return g / h
}
console.log(division(21));

// Function Expression

const greeTing = function sayHello(name) {       //Expressing a function through a variable
    console.log(`Hello ${name}`);
}
greeTing('Rodiyat');

const myNumber = function addNumber(s, t) {
    return 2 + 3
}
console.log(myNumber());

// Arrow Function 

const arrow = (x) => x * x - 6;     // First Method
console.log(arrow(4));

const example2 = (tutor, student) => {
    const tutorOne = 'Abdullah';
    const tutorTwo = 'Abdullah';

    const studentOne = 'Opera';
    const studentTwo = 'Opera';

    return console.log(`Mr ${tutorOne} is today's tutor, while ${studentOne} is part of the cohorts`);
};
example2();

// Global Scope

const scope = 2;

const testScope = () => {
    const k = 10;
    console.log(scope + k);
}
testScope();


let num = 5

const testNum = () => {
    console.log(num);
    num = 10
}

testNum()
console.log(num);


// Local Scope

function localScope () {
    const name = 'OG';
    const potBellied = 'is Pot Bellied';
    const isPresent = '✅';

    console.log(name, potBellied, isPresent);
}
localScope()

const aFunctionn = () => {
    const name = 'Yemi'
    console.log(name);
    
    const anotherFunction2 = () => {
        const age = 2
        console.log(age);
    }
    anotherFunction2();
     
}
aFunctionn();

// Hoisting

hoistedFunction()

function hoistedFunction () {
    console.log('I am hoisted');
}

console.log(myHoistedFn(2, 5));

function myHoistedFn(a, b) {
    return a-b;
}

// Closure


