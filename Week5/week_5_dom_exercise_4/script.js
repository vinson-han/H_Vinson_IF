let counter = 1

let nextClick = document.getElementById('nextClick')

nextClick.addEventListener('click', () => {
	let x = document.getElementById('randomImage').src = "https://source.unsplash.com/random/300×300" + new Date().getTime()
})

let addMe = document.getElementById('addMe')
let x = document.getElementById('randomImage').src
let ul = document.querySelector('ul')

addMe.addEventListener('click', () => {
	
	let li = document.createElement('li')
	let img = document.createElement('img')
	let button = document.createElement('button')

	li.id = counter++	
	button.textContent = "Remove"
	button.addEventListener('click', () => {
		let x = document.getElementById(li.id)
		x.remove()
		button.remove()
	})

	img.style.cssText = "width: 200px; height: 200px;"
	img.src = document.getElementById('randomImage').src
	li.appendChild(img)
	ul.appendChild(li)
	ul.appendChild(button)
})
