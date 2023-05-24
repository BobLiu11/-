class Animal {
  public name;
  static age: number;
  constructor(name: string) {
    this.name = name;
  }
  get getName() {
    return this.name;
  }
  set setName(name: string) {
    this.name = name;
  }
  sayHi() {
    return `My name is ${this.name}`;
  }
  static sayHello() {
    return `say static`;
  }
}

class Cat extends Animal {
  constructor(name: string) {
    super(name);
  }
  sayHi(): string {
    return `Meow` + super.sayHi();
  }
}

let a = new Animal("Jack");
console.log(a.sayHi());
