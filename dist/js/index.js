"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const userId = 10;
const productId = "10";
var Size;
(function (Size) {
    Size["P"] = "pequeno";
    Size["M"] = "Medio";
    Size["G"] = "Grande";
})(Size || (Size = {}));
const camisa = {
    name: "Camisa Gola V",
    size: Size.G,
};
let teste;
teste = "algumvalor";
teste = null;
function sum(a, b) {
    return a + b;
}
function sayHelloTo(name) {
    return `Hello ${name}`;
}
function logger(msg) {
    console.log(msg);
}
function greeting(name, greet) {
    if (greet) {
        console.log(`Olá ${greet} ${name}`);
        return;
    }
    console.log(`Olá ${name}`);
}
function sumNumbers(nums) {
    return nums.n1 + nums.n2;
}
function multiplyuNumbers(nums) {
    return nums.n1 * nums.n2;
}
const someNumber = {
    n1: 5,
    n2: 10,
};
function doSomething(info) {
    if (typeof info === "number") {
        console.log(`O numero é ${info}`);
        return;
    }
    else if (typeof info === "boolean") {
        console.log(info);
        return;
    }
    console.log("Não foi passado um numero!");
}
function showArraysItem(arr) {
    arr.forEach((item) => {
        console.log(`Item: ${item}`);
    });
}
const a1 = [1, 2, 3];
const a2 = ["a", "b", "c"];
class User {
    name;
    role;
    isApproved;
    constructor(name, role, isApproved) {
        this.name = name;
        this.role = role;
        this.isApproved = isApproved;
    }
    showUserName() {
        console.log(`Seu nome é ${this.name}`);
    }
    showUserRole(canShow) {
        if (canShow) {
            console.log(`Permissão do usuario: ${this.role}`);
            return;
        }
        console.log("Você não tem permissão");
    }
}
class Car {
    brand;
    wheels;
    constructor(brand, wheels) {
        this.brand = brand;
        this.wheels = wheels;
    }
    showBrand() {
        console.log(`A marca do carro é ${this.brand}`);
    }
}
const fusca = new Car("VW", 4);
class superCar extends Car {
    engine;
    constructor(brand, wheels, engine) {
        super(brand, wheels);
        this.engine = engine;
    }
}
const a4 = new superCar("Audi", 4, 2.0);
function baseParamters() {
    return function (constructor) {
        return class extends constructor {
            id = Math.random();
            createdAt = new Date();
        };
    };
}
let Person = class Person {
    name;
    constructor(name) {
        this.name = name;
    }
};
Person = __decorate([
    baseParamters()
], Person);
const sam = new Person("Sam");
console.log(sam);
