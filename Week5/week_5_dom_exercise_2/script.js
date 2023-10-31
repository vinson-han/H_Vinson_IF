let namePrompt = prompt('What is your name?')

let welcomeMessage = document.querySelector('p')

welcomeMessage.innerText = `Welcome ${namePrompt}. Nice to meet you.`