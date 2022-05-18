const startButton = document.getElementById("start-button");
const endButton = document.getElementById("stop-button");
const resetButton = document.getElementById("reset-button");
const timer = document.getElementById("timer");
let timerID;
let timeOfStart;
let millisElapsedBeforeStart = 0 ;

startButton.addEventListener("click", startTimer);
endButton.addEventListener("click", endTimer);
resetButton.addEventListener("click", resetTimer);



function startTimer() {

    startButton.disabled = true;
    endButton.disabled = false;
    resetButton.disabled = true;


    timeOfStart = Date.now();

    timerID = requestAnimationFrame(updateTimer);
};



function endTimer() {
    startButton.disabled = false;
    endButton.disabled = true;
    resetButton.disabled = false;

    millisElapsedBeforeStart += Date.now() - timeOfStart;

    

    cancelAnimationFrame(timerID);


};


function resetTimer() {
    startButton.disabled = false;
    endButton.disabled = true;
    resetButton.disabled = true;
    timer.textContent = "00:00:000";


    millisElapsedBeforeStart = 0;
};


function updateTimer() {
    const millisElapsed = Date.now() - timeOfStart + millisElapsedBeforeStart;
    const secondsElapsed = millisElapsed / 1000;
    const minutesElapsed = secondsElapsed / 60;


    const millisText = formatNumber(millisElapsed % 1000, 3);
    const secondsText = formatNumber(Math.floor(secondsElapsed) % 60, 2);
    const minutesText = formatNumber(Math.floor(minutesElapsed), 2);

    timer.textContent = `${minutesText}:${secondsText}:${millisText}`;

    timerID = requestAnimationFrame(updateTimer);
}


function formatNumber(number, desiredLength) {
    const stringNumber = String(number);

    return stringNumber.padStart(desiredLength, '0');
}

