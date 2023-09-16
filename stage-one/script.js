const dateBox = document.querySelector("[data-testid=currentDayOfTheWeek]");
const timeBox = document.querySelector("[data-testid=currentUTCTime]");

function computeDayOfWeek() {
    const now = new Date();
    const index = now.getUTCDay();
    const weekDays = [
        "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday",
    ];
    const dayOfTheWeek = weekDays[index];
    return dayOfTheWeek;
}

function computeTime() {
    const now = new Date();
    const timeInMs = now.getTime();
    return timeInMs;
}

function displayDayOfTheWeek() {
    const date = computeDayOfWeek();
    return dateBox.textContent = date;
}

function displayTime() {
    const time = computeTime();
    return timeBox.textContent = time;
}

displayDayOfTheWeek();
displayTime();

setInterval(function () {
    displayTime();
    computeDayOfWeek();
}, 1000);