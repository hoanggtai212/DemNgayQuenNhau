document.addEventListener("DOMContentLoaded", () => {

const startDate = "2026-05-23 00:00:00";

function updateLoveTimer() {
    const startDateObj = new Date(startDate);
    const currentDate = new Date();

    const timeDifference = currentDate - startDateObj;

    const days = Math.floor(timeDifference / (1000 * 3600 * 24));
    const hours = Math.floor((timeDifference % (1000 * 3600 * 24)) / (1000 * 3600));
    const minutes = Math.floor((timeDifference % (1000 * 3600)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    const daysElement = document.getElementById("love-days");
    if (daysElement) daysElement.textContent = days;

    const timeElement = document.getElementById("love-hours");
    if (timeElement) {
        timeElement.textContent =
            `${String(hours).padStart(2,"0")}:${String(minutes).padStart(2,"0")}:${String(seconds).padStart(2,"0")}`;
    }

    document.title = `${days} Ngày Yêu ❤️`;
}

setInterval(updateLoveTimer, 1000);
updateLoveTimer();

});

// ================= PETALS =================
function createPetals() {
const emojis = ["🌸","🌺","💮","🌷"];

setInterval(() => {
    const petal = document.createElement("div");
    petal.className = "petal";
    petal.textContent = emojis[Math.floor(Math.random() * emojis.length)];

    petal.style.left = Math.random() * 100 + "vw";
    petal.style.fontSize = (18 + Math.random() * 10) + "px";
    petal.style.animationDuration = (2 + Math.random() * 2) + "s";

    document.body.appendChild(petal);

    setTimeout(() => petal.remove(), 4000);
}, 250);

}

// ================= PAGE SWITCH =================
function showPassword() {
createPetals();

const counterPage = document.getElementById("counterPage");
const passwordPage = document.getElementById("passwordPage");

counterPage.classList.add("love-fade-out");

setTimeout(() => {
    counterPage.style.display = "none";
    passwordPage.style.display = "flex";
    passwordPage.classList.add("love-fade-in");
}, 800);

}

function showAlbum() {
document.getElementById("passwordPage").style.display = "none";
document.getElementById("albumPage").style.display = "block";

setTimeout(() => {
    startTyping();
}, 500);

}

function backHome() {
location.reload();
}

// ================= PASSWORD =================
let input = "";

function addNum(num) {
const display = document.getElementById("display");

if (display.value === "Đúng rồi 💗" || display.value === "Sai rồi 😏") {
    display.value = "";
    input = "";
}

input += num;
display.value = "*".repeat(input.length);
display.style.color = "#2196f3";
}

function delNum() {
const display = document.getElementById("display");

input = input.slice(0, -1);
display.value = "*".repeat(input.length);
display.style.color = "#e75480";
}

function checkPassword() {
const display = document.getElementById("display");

if (input === "0000") {

    display.value = "Đúng rồi 💗";
    display.style.color = "#00c853";

    setTimeout(() => {
        document.getElementById("passwordPage").style.display = "none";
        document.getElementById("loveLoading").style.display = "flex";
        showLoadingLove();
    }, 800);

} else {

    display.value = "Sai rồi 😏";
    display.style.color = "#ff1744";

    const container = document.querySelector(".container");
    container.classList.add("shake");

    setTimeout(() => {
        container.classList.remove("shake");
        input = "";
        display.value = "";
    }, 800);
}

}

// ================= LOADING =================
function showLoadingLove() {
const fill = document.getElementById("progressFill");
const text = document.getElementById("progressPercent");

let progress = 0;

const timer = setInterval(() => {
    progress++;

    fill.style.width = progress + "%";
    text.textContent = progress + "%";

    if (progress >= 100) {
        clearInterval(timer);

        setTimeout(() => {
            document.getElementById("loveLoading").style.display = "none";
            showLoveSuccess();
        }, 500);
    }
}, 30);

}

// ================= SUCCESS =================
function showLoveSuccess() {
document.getElementById("loveSuccess").style.display = "flex";
}
