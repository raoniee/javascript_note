//Function
// - fundametal building block in the program
// - subprogram can be used multiple times
// - performs a task or calculates a value

//1. Function declaration
//function name(param1, param2) { body... return; }
//one function === one thing
//naming: doSomething, command, verb
//e.g. createCardAndPoint -> createCard, createPoint
//function is object in JS


//2. Parameters
//premitive parameters: passed by value
//object parameters: passed by reference
function changeName(obj) {
    obj.name = 'coder';
}

const raon = { name: 'raon' };
changeName(raon);
console.log(raon); //cooder

//3. Default parameters (added in ES6)
function showMessage(message, from = 'unknown') {
    console.log(`${message} by ${from}`); //Hi by unknown
}
showMessage('Hi');

//4. Rest parameters (added in ES6)
function printAll(...args) {
    for (let i = 0; i < args.length; i++) {
        console.log(args[i]);
    }

    for (const arg of args) {
        console.log(arg);
    }

    args.forEach((arg) => console.log(arg));
}
printAll('dream', 'coding', 'raon');

//5. Local scope
let globalMessage = 'global'; //global variable
function printMessage() {
    let message = 'hello';
    console.log(message); //local variable //'hello'
    console.log(globalMessage); //'global'
    function printAnother() {
        console.log(message); //'hello'
        let childMessage = 'hello';
    }
    console.log(childMessage); //error
}
printMessage();

//6. Return a value
function sum(a, b) {
    return a + b;
}
const result = sum(1, 2); //3

//7. Early return, early exit
//bad
function upgradeUser(user) {
    if (user.point > 10) {
        //long upgrade logic...
    }
}

//good
function upgradeUser(user) {
    if (user.point <= 10) {
        return;
    }
    //long upgrade logic...
}

//First-class function
//functions are treated like any other variable
//can be assigned as a value to variable
//can be passed as an argument to other functions.
//can be returned by another function

//1. Function expression
//a function declaration can be called earlier than it is defiend. (hoisted)
//a function expression is created when the execution reaches it.
const print = function () { //anonymous function
    console.log('print');
}
print(); //'print'
const printAgain = print;
printAgain(); //'print'
const sumAgain = sum;
console.log(sumAgain(1, 3)); //4

//2. Callback function using function expression
function randomQuiz(answer, printYes, printNo) {
    if (answer === 'love you') {
        printYes();
    } else {
        printNo();
    }
}
//-anonymous function
const printYes = function () {
    console.log('yes!');
}

//-named function
//better debugging in debugger's stack traces
//recutsions
const printNo = function print() {
    console.log('no!');
    print();
}
randomQuiz('wrong', printYes, printNo);
randomQuiz('love you', printYes, printNo);

//-Arrow function
//always anonymous
//const simplePrint = function () {
//  console.log('simpleprint!');
//};

const simplePrint = () => console.log('simplePrint');
const add = (a, b) => a + b;
const simpleMutiply = (a, b) => {
    //do something more
    return a * b;
}

//IIFE: Immediately Invoked Function Expression
(function hello() {
    console.log('IIFE');
})(); //'IIFE'