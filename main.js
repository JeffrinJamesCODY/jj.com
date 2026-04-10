const timer = document.getElementById("timer");
const startBtn = document.getElementById("startBtn");
const resetBtn = document.getElementById("resetBtn");

const startTime = new Date("2026-04-10T00:00:00").getTime();

function updateTimer() {
    const now = new Date().getTime();
    const difference = now - startTime;

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((difference / (1000 * 60)) % 60);
    const seconds = Math.floor((difference / 1000) % 60);

    document.getElementById("timer").textContent =
    `${days} Days : ${hours.toString().padStart(2, "0")} Hours : ${minutes
        .toString()
        .padStart(2, "0")} Minutes : ${seconds
        .toString()
        .padStart(2, "0")} Seconds`;
}

setInterval(updateTimer, 1000);
updateTimer();