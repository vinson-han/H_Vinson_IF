class Animal {
  constructor(name, height, weight) {
    this.name = name;
    this.height = height;
    this.weight = weight;
  }

  printName() {
    console.log(`The name of this animal is 
${this.name}`);
  }

  showHeight() {
    console.log(`The height of this animal is 

${this.height} ft`);
  }

  showWeight() {
    console.log(`The weight of this animal is 

${this.weight} lbs`);
  }
}

const ringedSeal = new Animal("seal", 5, 120);

//Print the name of the ringedSeal

ringedSeal.printName();

class Cat extends Animal {
  clawEnemy() {
    console.log(`Attack Enemy infront of me`);
  }
}

const orangeCat = new Cat("orange", "25cm", 10);
orangeCat.printName();
orangeCat.clawEnemy();
