class Animal {
  constructor(name, height, weight) {
    this.name = name;
    this.height = height;
    this.weight = weight;
  }

  printName() {
    console.log(`The name of this animal is ${this.name}`);
  }
  showHeight() {
    console.log(`The height of this animal is ${this.height} ft`);
  }
  showWeight() {
    console.log(`The weight of this animal is ${this.weight} lbs`);
  }
}

class Dog extends Animal {
  constructor(name, height, weight, color, age) {
    super(name, height, weight);
    this.age = age;
    this.color = color;
  }
  gotThatDogInHim(bool) {
    let message = [
      "He got that dawg in him!",
      "He does not got that dog in him...",
    ];
    console.log(bool ? message[0] : message[1]);
  }
}

const Dawg = new Dog("Teddy", "1 Foot", "20", "brown", "9 month");

Dawg.printName();
Dawg.showHeight();
Dawg.showWeight();
Dawg.gotThatDogInHim();
Dawg.gotThatDogInHim(true);
