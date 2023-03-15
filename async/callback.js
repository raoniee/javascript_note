'use strict';

//JavaScript is synchronous.
//Execute the code block in order after hoisting.
//hoisting: var, function declaration
console.log('1');
setTimeout(() => console.log('2'), 1000);
console.log('3');

//Sychronous callback
function printImmediately(print) {
    print();
}
printImmediately(() => console.log('hello'));

//Asynchronous callback
function printWithDelay(print, timeout) {
    setTimeout(print, timeout);
}
printWithDelay(() => console.log('async callback'), 2000);

// function printImmediately(print) {
//     print();
// } 호이스팅

// function printWithDelay(print, timeout) {
//     setTimeout(print, timeout);
// } 호이스팅

// console.log('1'); 1번(동기) ->출력1
// setTimeout(() => console.log('2'), 1000); 2번(비동기) ->출력4
// console.log('3'); 3번(동기) ->출력2
// printImmediately(() => console.log('hello')); 4번(동기) ->출력3
// printWithDelay(() => console.log('async callback'), 2000); 5번(비동기) ->출력5