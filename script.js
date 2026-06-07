/* ==========================
ĐẾM NGÀY YÊU
========================== */

document.addEventListener('DOMContentLoaded', () => {

const startDate = '2026-05-23 00:00:00';

function updateLoveTimer() {

    const startDateObj = new Date(startDate);
    const currentDate = new Date();

    const timeDifference =
        currentDate.getTime() -
        startDateObj.getTime();

    const daysDifference =
        Math.floor(timeDifference / (1000 * 3600 * 24));

    const hours =
        Math.floor((timeDifference % (1000 * 3600 * 24)) / (1000 * 3600));

    const minutes =
        Math.floor((timeDifference % (1000 * 3600)) / (1000 * 60));

    const seconds =
        Math.floor((timeDifference % (1000 * 60)) / 1000);

    const daysElement =
        document.getElementById('love-days');

    if (daysElement) {
        daysElement.textContent = daysDifference;
    }

    const timeElement =
        document.getElementById('love-hours');

    if (timeElement) {
        timeElement.textContent =
            `${String(hours).padStart(2,'0')}:${String(minutes).padStart(2,'0')}:${String(seconds).padStart(2,'0')}`;
    }

    document.title =
        `${daysDifference} Ngày Yêu ❤️`;
}

setInterval(updateLoveTimer, 1000);
updateLoveTimer();

});

/* ==========================
CHUYỂN MÀN HÌNH
========================== */

function showPassword() {

document.getElementById("homePage").style.display = "none";

document.getElementById("passwordPage").style.display = "flex";

}

function showAlbum() {

document.getElementById("passwordPage").style.display = "none";

document.getElementById("albumPage").style.display = "block";

}

function backHome() {
location.reload();
}

/* ==========================
PASSWORD
========================== */

let password = "";

function addNum(num) {

password += num;

document.getElementById("display").value =
    password;

}

function delNum() {

password = password.slice(0, -1);

document.getElementById("display").value =
    password;

}

function checkPassword() {

if (password === "29012012") {

    const overlay =
        document.getElementById("unlock-overlay");

    const bigLock =
        overlay.querySelector(".big-lock");

    const front =
        bigLock.querySelector(".front");

    const back =
        bigLock.querySelector(".back");

    overlay.style.display = "flex";

    bigLock.classList.remove(
        "spin",
        "open"
    );

    front.textContent = "🔒";
    back.textContent = "🔒";

    bigLock.classList.add("spin");

    setTimeout(() => {

        bigLock.classList.add("open");

    }, 2000);

    setTimeout(() => {

        front.textContent = "🔓";
        back.textContent = "🔓";

    }, 2400);

    setTimeout(() => {

        showAlbum();

    }, 3000);

} else {

    const container =
        document.querySelector(".container");

    container.classList.add("shake");

    setTimeout(() => {

        container.classList.remove("shake");

    }, 400);

    password = "";

    document.getElementById("display").value = "";
}

}
