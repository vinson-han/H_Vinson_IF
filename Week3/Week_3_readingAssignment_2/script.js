for (let x = 0, y=1; x < 7; x++){
	let stringOutput = ''
	for(let i = 0; i < y;i++){
		stringOutput+='#'	
	}
	console.log(stringOutput)
	y++
}

for (let x = 1; x <= 100; x++){
	if(x%3 === 0 && x%5 !== 0){
		console.log("Fizz: " + x)
	} else if (x%5 === 0 && x % 3 !== 0){
		console.log("Buzz: " + x)
	} else if( x % 5 === 0 && x % 3 === 0){
		console.log("FizzBuzz: "+ x)
	}
}

let height = 9
let width = 9
let string = ''
for(let x = 1; x < height; x++){

	for(let y = 1; y < width; y++)
	{
		if((x + y) % 2 == 0)
			string+='#'
		else
			string+=' '
	}
	string+='\n'
}
console.log(string)
