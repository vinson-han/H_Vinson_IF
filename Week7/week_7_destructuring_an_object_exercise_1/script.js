// Write 3 function
//1 reverseVowelsAndReplace
//2reverseVowelsAndReplaceO
//3reverseVowelsAndReplaceS

//Parameters - "string" ||
//use other functions to spit output
//Output - console.log(reverse string)
//Exmaple - revserVowesAndReplaceS('Supers) -> output -> 5usper5
//Exmaple - reverseVowelsAndReplaceL('LolocalsSupers) -> output -> 1o1oca1s5super5
//Example - reverseVowelsAndReplaceO('Oppona') -> output -> 0pp0na
//use split //join //includes //replac


function reverseVowelsAndReplaceL (string){
	let splitString = string.split('')
	let replaceString = splitString.map(i => (i === 'L' || i === 'l') ?  '1' : i).join('')
	
	return (reverseVowelsAndReplaceS(replaceString))
}
function reverseVowelsAndReplaceO (string){
	let replaceL = (reverseVowelsAndReplaceL(string))
	let splitString = replaceL.split('')
	let replaceString = splitString.map(i => (i === 'O' || i === 'o') ?  '0' : i).join('')

	reverseVowelsAndReplaceS(replaceString)
}
function reverseVowelsAndReplaceS (string) {
	let splitString = string.split('')
	let replaceString = splitString.map(i => (i === 'S' || i === 's') ?  '5' : i).join('')
	
	console.log(replaceString)
	return replaceString
}

reverseVowelsAndReplaceL("LolocalsSupers Supers")
reverseVowelsAndReplaceO("LolocalsSupers. Supers Ooooo")
reverseVowelsAndReplaceS('Supers Supers')
