type numstr = number | string;

const userId: numstr = 10;
// console.log(userId, typeof userId);

const productId: numstr = "10";
// console.log(productId, typeof productId);

enum Size {
  P = "pequeno",
  M = "Medio",
  G = "Grande",
}

const camisa = {
  name: "Camisa Gola V",
  size: Size.G,
};

// console.log(camisa);

let teste: "algumvalor" | null;

teste = "algumvalor";
teste = null;

function sum(a: number, b: number) {
  return a + b;
}

// console.log(sum(10, 12));

function sayHelloTo(name: string): string {
  return `Hello ${name}`;
}

// console.log(sayHelloTo("Vinicios"))

function logger(msg: string): void {
  console.log(msg);
}
// logger("teste")

function greeting(name: string, greet?: string): void {
  if (greet) {
    console.log(`Olá ${greet} ${name}`);
    return;
  }

  console.log(`Olá ${name}`);
}

// greeting("José");
// greeting("José", "sir");

interface MathFunctions {
  n1: number;
  n2: number;
}

function sumNumbers(nums: MathFunctions) {
  return nums.n1 + nums.n2;
}
// console.log(sumNumbers({ n1: 1, n2: 2 }));

function multiplyuNumbers(nums: MathFunctions) {
  return nums.n1 * nums.n2;
}

const someNumber: MathFunctions = {
  n1: 5,
  n2: 10,
};

// console.log(multiplyuNumbers({n1: 5, n2: 10}));

function doSomething(info: number | boolean): void {
  if (typeof info === "number") {
    console.log(`O numero é ${info}`);
    return;
  } else if (typeof info === "boolean") {
    console.log(info);
    return;
  }
  console.log("Não foi passado um numero!");
}

// console.log(doSomething(5));
// console.log(doSomething(false));

function showArraysItem<a>(arr: a[]) {
  arr.forEach((item) => {
    console.log(`Item: ${item}`);
  });
}

const a1 = [1, 2, 3];
const a2 = ["a", "b", "c"];

// showArraysItem(a1);
// showArraysItem(a2);

class User {
  name;
  role;
  isApproved;

  constructor(name: string, role: string, isApproved: boolean) {
    this.name = name;
    this.role = role;
    this.isApproved = isApproved;
  }

  showUserName() {
    console.log(`Seu nome é ${this.name}`);
  }

  showUserRole(canShow: boolean) {
    if (canShow) {
      console.log(`Permissão do usuario: ${this.role}`);
      return;
    }
    console.log("Você não tem permissão");
  }
}

// const vini = new User("Vinicios", "Admin", true);

// vini.showUserName();
// vini.showUserRole(true);

interface IVehicle {
  brand: string;
  showBrand(): void;
}

class Car implements IVehicle {
  brand;
  wheels;

  constructor(brand: string, wheels: number) {
    this.brand = brand;
    this.wheels = wheels;
  }

  showBrand(): void {
    console.log(`A marca do carro é ${this.brand}`);
  }
}

const fusca = new Car("VW", 4);

class superCar extends Car {
  engine;

  constructor(brand: string, wheels: number, engine: number) {
    super(brand, wheels);
    this.engine = engine;
  }
}

const a4 = new superCar("Audi", 4, 2.0);
// console.log(a4);

// a4.showBrand()

function baseParamters() {
  return function <T extends { new (...args: any[]): {} }>(constructor: T) {
    return class extends constructor {
      id = Math.random();
      createdAt = new Date();
    };
  };
}

@baseParamters()
class Person {
  name;

  constructor(name: string) {
    this.name = name;
  }
}

const sam = new Person("Sam");

console.log(sam);
