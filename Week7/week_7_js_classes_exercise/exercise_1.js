class Bike {
	constructor(handlebars, color, numOfWheels) {
		this.handlebars = handlebars
		this.color = color
		this.numOfWheels = numOfWheels
	}
}

class Student {
	constructor(name, age, major) {
		this.name = name
		this.age = age
		this.major = major
	}
}

const Dude = new Student('Dude', 18, "economics")

console.log(Dude)