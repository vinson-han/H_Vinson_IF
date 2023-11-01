//global variables

let computerScore = 0;

let userScore = 0;
let round = 1
let playGame = true

let computerChoice = getComputerChoice()
let choice = ''


let scoreBoard = document.getElementById('scoreBoard')
scoreBoard.textContent = `Round: ${round} Score - Player: ${userScore} | Computer :${computerScore}`

let rock = document.getElementById('rock').addEventListener('click', (e) => {
	choice = e.currentTarget.id
	compareChoice(choice, computerChoice)
	
})
let paper = document.getElementById('paper').addEventListener('click', (e) => {
	choice = e.currentTarget.id
	compareChoice(choice, computerChoice)
})
let scissors = document.getElementById('scissors').addEventListener('click', (e) => {
	choice = e.currentTarget.id
	compareChoice(choice, computerChoice)
})



//function getComputerChoice
//uses Math.random to pick rock, paper or scissors at random from an array 
//returns computer's choice
function getComputerChoice(){
  let random = Math.floor(Math.random()* 3)
  let choices = ['rock', 'paper', 'scissors']
  let computerChoice = choices[random]
  
  return computerChoice
}

function compareChoice(userChoice,computerChoice){
  let result = ''
  let winMessage = ''

  if(userChoice === computerChoice){
    winMessage = "Tie"
    
  } else if(userChoice === 'rock'){
    switch(computerChoice){
      case('paper'):
        computerScore+=1
        winMessage = 'Paper cover Rocks. computer Win'
        break;
      case('scissors'):
        userScore+=1
        winMessage = 'Rock smash scissors. user Win'
        break;
      default:
        break;
    }
  } else if(userChoice === 'paper'){
    switch(computerChoice){
      case('scissors'):
        computerScore+=1
        winMessage = 'scissors cut paper. computer Win.'
       
        break;
      case('rock'):
        userScore+=1
        winMessage = 'paper cover rock. user Win'
        break;
      default:
        break;
    }
  }  else if(userChoice === 'scissors') {
    switch(computerChoice){
      case('rock'):
        computerScore+=1
        winMessage = 'Rock smash scissors. computer Win'
    
        break;
      case('paper'):
        userScore+=1
        winMessage = 'scissors cut paper. user Win'
        break;
      default:
        break;
    }
  }

	let x = document.getElementById('scoreBoardMessage')
	x.style.visibility = "visible"
	x.textContent = `User Choose ${userChoice}. Computer choose ${computerChoice}. ${winMessage}`
  setTimeout(()=>{
		x.style.visibility = "hidden"
	}, 5000)
	console.log(round, userScore, computerScore)
  scoreBoard.textContent = `Round: ${round} Score - Player: ${userScore} | Computer :${computerScore}`
  round+=1
} 