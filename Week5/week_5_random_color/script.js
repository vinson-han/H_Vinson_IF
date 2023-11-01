let body = document.querySelector('body')
let button = document.createElement('button')
button.textContent = "Click Me"

body.appendChild(button)

// Use Code to generate random hex Value
// https://www.shecodes.io/athena/73117-how-to-generate-an-array-of-random-colors-in-javascript#:~:text=Sure%2C%20to%20generate%20an%20array,a%20color%20in%20hexadecimal%20format.&text=const%20colors%20%3D%20%5B%5D%3B%20for%20(let,%3D%20%22%23%22%20%2B%20Math.

button.addEventListener('click', () => {
	body.style.background = `#${Math.floor(Math.random() * 16777215).toString(16)}`
})

