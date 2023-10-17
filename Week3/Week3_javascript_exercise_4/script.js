const getUTCtime = () => {
	let date = new Date()
	let globalTimeHours = date.getUTCHours()
	let globalTimeMinutes =  date.getUTCMinutes()
	let globalTimeSeconds =  date.getUTCSeconds()

	globalTimeHours = globalTimeHours < 10 ? '0' + globalTimeHours : globalTimeHours
	globalTimeMinutes = globalTimeMinutes < 10 ? '0' + globalTimeMinutes : globalTimeMinutes
	globalTimeSeconds = globalTimeSeconds < 10 ? '0' + globalTimeSeconds : globalTimeSeconds

	return globalTimeHours + ":" + globalTimeMinutes +":"+ globalTimeSeconds
}

let globalTime = document.getElementById('globalTime')

globalTime.innerText = getUTCtime()

function getLocalTime() {
	globalTime.innerText = getUTCtime()

	let localDate = new Date()
	let localTimeHours = localDate.getHours()
	let localTimeMinutes =  localDate.getMinutes()
	let localTimeSeconds =  localDate.getSeconds()
	let  timeOfDay= 'AM'
	
	if(localTimeHours > 12) {
		localTimeHours -=12
		timeOfDay= 'PM'
	}
	
	localTimeHours = localTimeHours < 10 ? '0' + localTimeHours : localTimeHours
	localTimeMinutes = localTimeMinutes < 10 ? '0' + localTimeMinutes : localTimeMinutes
	localTimeSeconds = localTimeSeconds < 10 ? '0' + localTimeSeconds : localTimeSeconds

	let localTime = localTimeHours + ":" + localTimeMinutes +":"+ localTimeSeconds+ " " + timeOfDay
	

	document.getElementById('localTime').innerText = localTime
}