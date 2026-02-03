const timer = document.getElementById("timer");
const startBtn = document.getElementById("startBtn");
const resetBtn = document.getElementById("resetBtn");

let interval;

function run() {
    clearInterval(interval);
    interval = setInterval(() => {
        const startTime = localStorage.getItem("startTime");
        if (!startTime) return;
    }
}