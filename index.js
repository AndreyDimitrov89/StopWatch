let secondsELapsed = 0;
let interval = null;
const time = document.getElementById("time")

function setTime() {
    const minutes = Math.floor(secondsELapsed / 60)
    const seconds = secondsELapsed % 60;
    time.innerHTML = `${minutes}:${seconds}`;
}
function setTime() {
    
}
function timer() {
    secondsELapsed++;
    setTime()
}
function startClock() {
    interval = setInterval(timer, 1000)
}
function stopClock() {}
function resetClock() {}