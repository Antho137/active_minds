// function that determine the current year
function updateYear() {
	let now = new Date();// today date
	let theYear = now.getFullYear();
	let thisYear = document.getElementById("ye");
	thisYear.innerHTML = theYear;
	return theYear;// return the current year
}

updateYear();