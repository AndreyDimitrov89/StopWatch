let secondsELapsed = 0;
let interval = null;
const time = document.getElementById("time")

function setTime() {
    time.innerHTML = secondsELapsed;
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