//Objects
//one of the JavaScript's data types.
//a collection of related data and/or functionality.
//Nearly all object in JavaScript are instances of Object

//1. Literlas and properties
const obj1 = {}; //'object literal' syntax
const obj2 = new Object(); //'object constructor' syntax

function print(person) {
    console.log(person.name);
    console.log(person.age);
}

const raon = { name: 'raon', age: 4 };
print(raon);

//with JavaScript magic (dynamically typed language)
//can add propertise later
raon.hasJob = true;
console.log(raon.hasJob); //true

//can delete properties later
delete raon.hasJob;
console.log(raon.hasJob);

//2. Computed properties
//key should be always string
console.log(raon.name); //raon
console.log(raon['name']); //raon
raon['hasJob'] = true;
console.log(raon.hasJob); //true

function printValue(obj, key) {
    console.log(obj[key]);
}
printValue(raon, 'name'); //raon
printValue(raon, 'age'); //4

// 3. Property value shorthand
const person1 = { name: 'bob', age: 2 };
const person2 = { name: 'steve', age: 3 };
const person3 = { name: 'dave', age: 4 };
const person4 = new Person('raon', 30);
console.log(person4);

// 4. Constructor Function
function Person(name, age) {
    //this = {};
    this.name = name;
    this.age = age;
    //return this;
}

// 5. in operator: property existence check (key in obj)
console.log('name' in raon); //t
console.log('age' in raon); //t
console.log('random' in raon); //f
console.log(raon.random); //undefined

// 6. for...in vs for...of
//for (key in obj)
for (key in raon) {
    console.log(raon);
}

//for (value of iterable)
const array = [1, 2, 3, 4, 5];
for (value of array) {
    console.log(value);
}

// 7. cloning
//Object.assign(dest, [obj1, obj2, obj3...])
const user = { name: 'raon', age: '20' };
const user2 = user;
//user2.name = 'coder';
console.log(user); //name: coder

//old way
const user3 = {};
for (key in user) {
    user3[key] = user[key];
}
console.log(user3);

//new
const user4 = Object.assign({}, user);
console.log(user4);

//another example
const fruit1 = { color: 'red' };
const fruit2 = { color: 'blue', size: 'big' };
const mixed = Object.assign({}, fruit1, fruit2);
console.log(mixed.color); //blue
console.log(mixed.size); //big