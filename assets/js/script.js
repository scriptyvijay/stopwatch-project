// All HTML components Added First

let seconds = 0;
let tens = 0;
let appendTens = document.getElementById("tens");
let appendSeconds = document.getElementById("seconds");
let buttonStart = document.getElementById("button-start");
let buttonStop = document.getElementById("button-stop");
let buttonReset = document.getElementById("button-reset");
let Interval;

// Start Button On Click Event Handling

buttonStart.onclick = function () {
	clearInterval(Interval);
	// In every 10 Milliseconds setInterval Will Run startTimer Function
	Interval = setInterval(startTimer, 10);
};

// Stop Button On Click Event Handling

buttonStop.onclick = function () {
	clearInterval(Interval);
};

// Reset Button On Click Event Handling

buttonReset.onclick = function () {
	clearInterval(Interval);
	tens = "00";
	seconds = "00";
	appendTens.innerHTML = tens;
	appendSeconds.innerHTML = seconds;
};

// Start Timer Function

function startTimer() {
	tens++;
	//In every 10 Milliseconds tens will add 1;
	if (tens <= 9) {
		appendTens.innerHTML = "0" + tens;
	}

	if (tens > 9) {
		appendTens.innerHTML = tens;
	}

	if (tens > 99) {
		seconds++;
		appendSeconds.innerHTML = "0" + seconds;
		tens = 0;
		appendTens.innerHTML = "0" + 0;
	}
	if (seconds > 9) {
		appendSeconds.innerHTML = seconds;
	}
}
