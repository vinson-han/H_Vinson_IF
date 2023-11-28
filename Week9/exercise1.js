const prepareIngredients = (callback) => {
	setTimeout(() => {
		callback("Ingredients are prepared.");
 }, 2000);
}

const assembleSadwich = (callback) => {
	setTimeout(() => {
		callback("Sanwich assembled")
	}, 1500)
}

const serveSandwich = (callback) => {
	setTimeout(() => {
		callback("Sandwich is Served")
	}, 1000)
}

const makeSandwich = () => {
	prepareIngredients((message1) => {
		console.log(message1)
	})
	assembleSadwich((message2) => {
		console.log(message2)
	})
	serveSandwich((message3) => {
		console.log(message3)
	})

}

makeSandwich()