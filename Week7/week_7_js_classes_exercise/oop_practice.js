//1.Write a JavaScript program that creates a class called 'Shape'
//with a method to calculate the area.
//2. Create two subclasses, 'Circle' and 'Triangle', that inherit from the 'Shape' class
// and override the area calculation method. Create an instance of the 'Circle' class and calculate its area.
//3. Similarly, do the same for the 'Triangle' class.

class Shape {
  constructor(name) {
    this.name = name;
  }
  calculateArea() {
    console.log("Method to calculate Area");
  }
  printShapeName() {
    console.log(`I am a ${this.name}`);
  }
}

class Circle extends Shape {
  constructor(r) {
    super("Circle");
    this.r = r;
    this.pi = 3.14;
  }
  calculateArea() {
    console.log(this.pi * this.r ** 2);
  }
}

const circle = new Circle(2);
circle.printShapeName();
circle.calculateArea();

class Triangle extends Shape {
  constructor(base, height) {
    super("Triangle");
    this.base = base;
    this.height = height;
  }
  calculateArea() {
    console.log(0.5 * this.base * this.height);
  }
}

const triangle = new Triangle(4, 5);
triangle.printShapeName();
triangle.calculateArea();
