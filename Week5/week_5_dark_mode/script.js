const toggleMode = () => {
	let button = document.querySelector('button')
	let body = document.querySelector('body')

	if(button.textContent === "dark mode"){
		body.style.background = "#0A0A0A"
		body.style.color = 'white'
		button.textContent = "light mode"
	}else {
		body.style.background = "white"
		body.style.color = 'black'
		button.textContent = "dark mode"
	}
}
