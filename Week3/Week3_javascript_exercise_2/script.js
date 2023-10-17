let form  = document.getElementById('form')

form.addEventListener("submit", (e) => {
	e.preventDefault();
	
	let firstInput = Number(document.getElementById('firstInput').value)
	let secondInput = Number(document.getElementById('secondInput').value)
	
	let mathOpperator = document.getElementById('mathOpperator').value
	let result = document.getElementById('result')
	
	switch(mathOpperator){
		case '+':
			result.innerText = firstInput + secondInput
			break
		case '-':
			result.innerText = firstInput - secondInput
			break
		case '*':
			result.innerText = firstInput * secondInput
			break
		case '**':
			result.innerText = firstInput ** secondInput
			break
		case '/':
			result.innerText = firstInput / secondInput
			break
		case '%':
			result.innerText = firstInput % secondInput
			break
		default:
			break
	}
})

