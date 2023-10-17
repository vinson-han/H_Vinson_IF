function getResult() {
		
	let firstInput = Number(document.getElementById('firstInput').value)
	let secondInput = Number(document.getElementById('secondInput').value)

	let mathComparison = document.getElementById('mathComparison').value
	let result = document.getElementById('result')
	switch(mathComparison){
		case '>':
			result.innerHTML = firstInput > secondInput
			break;
		case '<':
			result.innerHTML = firstInput < secondInput
			break;
		case '>=':
			result.innerHTML = firstInput >= secondInput
			break;
		case '<=':
			result.innerHTML = firstInput <= secondInput
			break;
		case '=':
			result.innerHTML = firstInput == secondInput
			break;
		case '!=':
			result.innerHTML = firstInput != secondInput
			break;
		default:
			console.log("comparison not found")
			break;
	}
}
	


