'use strict';
//object-oriendted programming
//class: template
//object: instance of a class
//JavaScript classes
// - intruoduce in ES6
// - syntactical sugar over prototype-based inheritance

//1. Class declarations
class Person {
    //constructor
    constructor(name, age) {
        //fields
        this.name = name;
        this.age = age;
    }

    //methods
    speak() {
        console.log(`${this.name}: hello!`);
    }
}

const raon = new Person('raon', 20);
console.log(raon.name); //'raon'
console.log(raon.age); //20
raon.speak(); //'raon:hello!'

// 2. Getter and setters
class User {
    constructor(fistName, lastName, age) {
        this.fistName = fistName;
        this.lastName = lastName;
        this.age = age;
    }

    get age() {
        return this._age;
    }

    set age(value) {
        this._age = value < 0 ? 0 : value;
    }
}

const user1 = new ('steve', 'job', -1);
console.log(user.age) //0

// 5. Inheritance
// a way for one class to extend another class.
class Shape {
    constructor(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }

    draw() {
        console.log(`drawing ${this.color} color of`);
    }

    getArea() {
        return this.width * this.height;
    }
}

class Rectangle extends Shape { }
class Triangle extends Shape {
    draw() {
        super.draw(); //drawing red color of
        console.log('🔺');
    }
    getArea() {
        return (this.width * this.height) / 2;
    }

    toString() {
        return `Triangle: color: ${this.color}`;
    }
}

const rectangle = new Rectangle(20, 20, 'blue');
rectangle.draw(); //drawing blue color of
console.log(rectangle.getArea()); //400

const triangle = new Triangle(20, 20, 'red');
triangle.draw(); //🔺
console.log(triangle.getArea()); //200

//6. Class checking: instanceOf
console.log(rectangle instanceof Rectangle); //t
console.log(triangle instanceof Rectangle); //f
console.log(triangle instanceof Triangle); //t
console.log(triangle instanceof Shape); //t
console.log(triangle instanceof Object); //t
console.log(triangle.toString());
