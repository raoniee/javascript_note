//1. Use Strict
//add in ES 5
//use this for Valina Javascript
'use strict';

//2.Variable, rw(read/write)
//let (added in ES6)
let globalName = 'global name';
{
    let name = 'raon';
    console.log(name);
    name = 'hello';
    console.log(name);
    console.log(globalName);
}
console.log(name);
console.log(globalName);

//var(don't ever use this!)
//var hoisting (move declaration from dottom to top)
//has no block scope
{
    age = 4;
    var age;
}
console.log(age);

//3. Contant, r(read only)
//use const whenevr possible.
//only use let if variable needs to change.
const daysInWeek = 7;
const maxNumber = 5;

//Note!
//Immutable data types: premitive types, frozen objecs (i.e. object.freeze())
//Mutable data types: all objects by default are mutanle in JS
//favor immutable data type always for a few reasons:
// -security
// -thread safety
// -reduce human mistakes

//4. Variable types
//prmitive, single item: number, string, boolean, null, undefined, symbol
//object, box container
//function, first-class function

const count = 17; //integer
const size = 17.1; //decimal number
console.log(`value: ${count}, type:${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);

//number - special numeric values: infinity, -infinity, NaN
const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = 'not a number' / 2;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

//bigInt (fairly new, don't use it yet)
const bigInt = 1234567890123456789012345678901234567890n; //over (-2**53) ~ 2*53
console.log(`value: ${bigInt}, type: ${typeof bigInt}`);
Number.MAX_SAFE_INTEGER;

//string

//boolean
//false: 0, null, undefined, NaN, ''
//true: any other value

//null

//undefined

//symbol, create unique indentifiers for objects
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2); //false
const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1 === gSymbol2); //true
console.log(`value: ${symbol1.description}, type:${typeof symbol1}`);

//object, real-life object, data structue
const raon = { name: 'raon', age: 20 };
raon.age = 21;

//5. Dynamic typing: dynamically typed language
let text = 'hello';
console.log(text.charAt(0)); //h
console.log(`value: ${text}, type: ${typeof text}`);
text = 1;
console.log(`value: ${text}, type: ${typeof text}`);
text = '7' + 5;
console.log(`value: ${text}, type: ${typeof text}`);
text = '8' / '2';
console.log(`value: ${text}, type: ${typeof text}`);
console.log(text.charAt(0));






