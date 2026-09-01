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
function showPassword() {
    const counterPage =
        document.getElementById("counterPage");
    const passwordPage =
        document.getElementById("passwordPage");
    const curtain =
        document.getElementById("curtainTransition");
    /* =================================
       1. HIỆN RÈM
    ================================= */
    curtain.style.display = "block";
    /* Đảm bảo rèm đang đóng */
    curtain.classList.remove("open");
    /* Không cho bấm lung tung lúc chuyển */
    curtain.style.pointerEvents = "auto";
    /* =================================
       2. SAU KHI RÈM ĐÓNG
          → HIỆN KHUNG PASSWORD PHÍA SAU
    ================================= */
    setTimeout(() => {
        counterPage.style.display = "none";
        passwordPage.style.display = "flex";
        passwordPage.classList.remove("fade-in");
        setRunningTextInfinite(
            "💗 ENTER PASSWORD 💗"
        );
        /* =================================
           3. MỞ RÈM
        ================================= */
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                curtain.classList.add("open");
            });
        });
    }, 300);
    /* =================================
       4. RÈM MỞ XONG → ẨN RÈM
    ================================= */
    setTimeout(() => {
        curtain.style.display = "none";
        curtain.classList.remove("open");
        curtain.style.pointerEvents = "none";
    }, 1900);
}
function showAlbum() {
document.getElementById("passwordPage").style.display = "none";
document.getElementById("albumPage").style.display = "block";
setTimeout(() => {
startTyping();
}, 800);
}
function backHome() {
location.reload();
}
function showLoadingLove(){

    document.getElementById("passwordPage").style.display = "none";

    const loading = document.getElementById("loveLoading");
    loading.style.display = "flex";

    let progress = 0;

    const fill = document.getElementById("progressFill");
    const text = document.getElementById("progressPercent");

    const hearts = [
        document.getElementById("loadingHeart1"),
        document.getElementById("loadingHeart2"),
        document.getElementById("loadingHeart3")
    ];

    const startBtn = document.getElementById("startLoveBtn");

    // RESET
    fill.style.width = "0%";
    text.textContent = "0%";

    if(startBtn){
        startBtn.style.display = "none";
        startBtn.classList.remove("show");
    }

    hearts.forEach(heart => {
        heart.classList.remove("heart-active");
        heart.style.animationPlayState = "running";
    });

    // =========================
    // CHẠY LOADING
    // =========================

    const timer = setInterval(() => {

        progress++;

        // Thanh %
        fill.style.width = progress + "%";
        text.textContent = progress + "%";


        // =========================
        // 20% → TIM 1
        // =========================

        if(progress === 20){
            hearts[0].classList.add("heart-active");
        }


        // =========================
        // 50% → TIM 2
        // =========================

        if(progress === 50){
            hearts[1].classList.add("heart-active");
        }


        // =========================
        // 80% → TIM 3
        // =========================

        if(progress === 80){
            hearts[2].classList.add("heart-active");
        }


        // =========================
        // 100%
        // =========================

        if(progress >= 100){

            clearInterval(timer);

            fill.style.width = "100%";
            text.textContent = "100%";

            // Hiện nút sau khi loading xong
            setTimeout(() => {

                if(startBtn){

                    startBtn.style.display = "block";

                    requestAnimationFrame(() => {
                        startBtn.classList.add("show");
                    });

                }

            }, 300);
        }

    }, 30);
}

document.addEventListener("DOMContentLoaded", () => {

    const startBtn = document.getElementById("startLoveBtn");

    if(!startBtn) return;

startBtn.addEventListener("click", () => {

    const loading = document.getElementById("loveLoading");

    const hearts = [
        document.getElementById("loadingHeart1"),
        document.getElementById("loadingHeart2"),
        document.getElementById("loadingHeart3")
    ];

    hearts.forEach(heart => {
        heart.style.animationPlayState = "running";
    });

    startBtn.classList.add("button-click-out");

    setTimeout(() => {

        // Loading bắt đầu fade out
        loading.classList.add("loading-transition-out");

        // Hiện SUCCESS
        const success = document.getElementById("loveSuccess");

        success.style.display = "flex";
        success.classList.add("success-transition-in");

        // ⬇️ Đợi đúng thời gian FADE-IN xong
        // rồi chạy thanh %
        showLoveSuccess();

        // Xóa loading sau
        setTimeout(() => {

            loading.style.display = "none";
            loading.classList.remove("loading-transition-out");

        }, 1800);

    }, 350);

});

});

let password = "";
let checkTimer = null;
let actionTimer = null;

function cancelCurrentAction(){
    if(checkTimer){
        clearTimeout(checkTimer);
        checkTimer = null;
    }
    if(actionTimer){
        clearTimeout(actionTimer);
        actionTimer = null;
    }
    document.getElementById("runningText")
        .getAnimations()
        .forEach(a => a.cancel());
    password = "";
    document.getElementById("display").value = "";
    setRunningTextInfinite(
        "💗 ENTER PASSWORD 💗"
    );
}

function setRunningText(text, color = "#e75480") {
    return startMarquee(text, color, false);
}

function setRunningTextInfinite(text, color = "#e75480") {
    startMarquee(text, color, true);
}

function startMarquee(text, color = "#e75480", loop = true) {
const running =
    document.getElementById("runningText");
running.getAnimations()
       .forEach(a => a.cancel());
running.style.display = "none";
    const wrap = document.querySelector(".display-wrap");

    running.getAnimations().forEach(a => a.cancel());

    running.textContent = text;
    running.style.color = color;
    running.style.display = "block";

    requestAnimationFrame(() => {

        const textWidth = running.offsetWidth;
        const wrapWidth = wrap.offsetWidth;

        const distance = textWidth + wrapWidth;
        const speed = 100;
        const duration = (distance / speed) * 1000;

        running.animate(
            [
                {
                    transform:
                        `translateY(-50%) translateX(${wrapWidth}px)`
                },
                {
                    transform:
                        `translateY(-50%) translateX(-${textWidth}px)`
                }
            ],
            {
                duration,
                iterations: loop ? Infinity : 1,
                easing: "linear"
            }
        );
    });

    return ((running.offsetWidth + wrap.offsetWidth) / 100) * 1000;
}

document.addEventListener("DOMContentLoaded", () => {
    setRunningTextInfinite(
        "💗 ENTER PASSWORD 💗"
    );
});
function addNum(num) {
    if(checkTimer || actionTimer){
        cancelCurrentAction();
    }
    password += num;
    document.getElementById("runningText")
        .style.display = "none";
    document.getElementById("display")
        .value = "*".repeat(password.length);
}
function delNum() {
    if(checkTimer || actionTimer){
        cancelCurrentAction();
        return;
    }
    password = password.slice(0,-1);
    const display =
        document.getElementById("display");
    display.value =
        "*".repeat(password.length);
    if(password.length === 0){
        display.value = "";
        setRunningTextInfinite(
            "💗 ENTER PASSWORD 💗"
        );
    }
}
function checkPassword() {
// hủy toàn bộ luồng cũ
if (checkTimer) {
clearTimeout(checkTimer);
checkTimer = null;
}
if (actionTimer) {
    clearTimeout(actionTimer);
    actionTimer = null;
}
document.getElementById("display").value = "";
const checkingTime = setRunningText(
    "💗 ĐANG KỂM TRA TỀNH ÊU... 💗",
    "#ffb300"
);
checkTimer = setTimeout(() => {
    if (password === "0") {
        const successTime = setRunningText(
            "💗 ĐÚM RÙI NÈ 💗",
            "#00cc66"
        );
        actionTimer = setTimeout(() => {
            showUnlockAnimation();
            actionTimer = null;
        }, successTime);
    } else {
        const failTime = setRunningText(
            "😜 SAI RÙI NÈ 😜",
            "#ff3333"
        );
        const container =
            document.querySelector(".container");
        container.classList.add("shake");
        actionTimer = setTimeout(() => {
            container.classList.remove("shake");
            password = "";
            document.getElementById("display").value = "";
            setRunningTextInfinite(
                "💗 ENTER PASSWORD 💗"
            );
            actionTimer = null;
        }, failTime);
    }
    checkTimer = null;
}, checkingTime);
}
function showUnlockAnimation() {
    const overlay = document.getElementById("unlock-overlay");
    const bigLock = overlay.querySelector(".big-lock");
    const front = bigLock.querySelector(".front");
    const back = bigLock.querySelector(".back");
    overlay.style.display = "flex";
    bigLock.classList.remove("spin", "open");
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
        document.getElementById("unlock-overlay").style.display = "none";
        showLoadingLove();
    }, 3000);
}

function showLoveSuccess() {

    const heart1 = document.getElementById("heart1");
    const heart2 = document.getElementById("heart2");
    const heart3 = document.getElementById("heart3");

    const successFill = document.querySelector(".success-fill");
    const successPercent = document.getElementById("successPercent");
    const successTitle = document.querySelector(".success-title");
    const clickMe = document.getElementById("clickMe");

    if (!successFill) return;

    let progress = 0;

    // =========================
    // RESET
    // =========================

    successFill.style.width = "0%";

    if (successPercent) {
        successPercent.textContent = "0%";
    }

    [heart1, heart2, heart3].forEach(heart => {
        if (heart) {
            heart.classList.remove("heart-active");
        }
    });

    if (successTitle) {
        successTitle.classList.remove("show");
        successTitle.style.opacity = "0";
        successTitle.style.visibility = "hidden";
    }

    if (clickMe) {
        clickMe.classList.remove("show");
        clickMe.style.display = "none";
        clickMe.style.opacity = "0";
        clickMe.style.visibility = "hidden";
        clickMe.style.pointerEvents = "none";
    }

    // =========================
    // CHẠY 0% → 100%
    // =========================

    const timer = setInterval(() => {

        progress++;

        // THANH %
        successFill.style.width = progress + "%";

        if (successPercent) {
            successPercent.textContent = progress + "%";
        }

        // =========================
        // 20% → TIM 1 SÁNG
        // =========================

        if (progress === 20 && heart1) {
            heart1.classList.add("heart-active");
        }

        // =========================
        // 50% → TIM 2 SÁNG
        // =========================

        if (progress === 50 && heart2) {
            heart2.classList.add("heart-active");
        }

        // =========================
        // 80% → TIM 3 SÁNG
        // =========================

        if (progress === 80 && heart3) {
            heart3.classList.add("heart-active");
        }

        // =========================
        // 100%
        // =========================

        if (progress >= 100) {

            clearInterval(timer);

            progress = 100;

            successFill.style.width = "100%";

            if (successPercent) {
                successPercent.textContent = "100%";
            }

            // Chờ thanh chạy xong rồi mới hiện chữ
            setTimeout(() => {

                // OK RỒI ĐÓ
                if (successTitle) {
                    successTitle.style.visibility = "visible";
                    successTitle.classList.add("show");
                }

                // CLICK HERE
                if (clickMe) {

                    clickMe.style.display = "block";
                    clickMe.style.visibility = "visible";
                    clickMe.style.pointerEvents = "auto";

                    requestAnimationFrame(() => {
                        clickMe.classList.add("show");
                    });
                }

            }, 600);
        }

    }, 30);
}

document.addEventListener('DOMContentLoaded', () => {
const clickMe =
document.getElementById("clickMe");
if(clickMe){
    clickMe.addEventListener("click", () => {
        const successPage = document.getElementById("loveSuccess");
        const curtain = document.getElementById("curtainTransition");

    // Ẩn màn SUCCESS
    successPage.style.display = "none";

    // Hiện rèm
    curtain.style.display = "block";

    // Mở sẵn trang album ở phía sau rèm
    showAlbum();

    // Một chút delay để tạo cảm giác rèm đang chuẩn bị mở
    setTimeout(() => {
        curtain.classList.add("open");
    }, 300);

    // Sau khi rèm mở xong thì xóa rèm
    setTimeout(() => {
        curtain.style.display = "none";
        curtain.classList.remove("open");
    }, 2100);
});
}
const message =
"Hành trình của chúng ta bắt đầu từ hôm nay. Mỗi khoảnh khắc bên nhau sẽ là một viên gạch xây nên ngôi nhà hạnh phúc. Cùng nhau, chúng ta sẽ viết nên một câu chuyện tình yêu vĩnh cửu. ❤️";
const photoUrls = [
"img/anh1.jpg",
"img/anh2.jpg",
"img/anh3.jpg",
"img/anh4.jpg",
"img/anh5.jpg",
"img/anh6.jpg",
"img/anh7.jpg",
"img/anh8.jpg",
"img/anh9.jpg",
"img/anh10.jpg",
"img/anh11.jpg",
"img/anh12.jpg",
"img/anh13.jpg",
"img/anh14.jpg",
"img/anh15.jpg",
"img/anh16.jpg",
"img/anh17.jpg",
"img/anh18.jpg",
"img/anh19.jpg",
"img/anh20.jpg",
"img/anh21.jpg",
"img/anh22.jpg",
"img/anh23.jpg",
"img/anh24.jpg",
"img/anh25.jpg",
"img/anh26.jpg",
"img/anh27.jpg",
"img/anh28.jpg",
"img/anh29.jpg",
"img/anh30.jpg"
];
const music = document.getElementById("music");
const musicBtn = document.getElementById("musicBtn");
const albumBtn = document.getElementById("albumBtn");
const typingDiv = document.getElementById("typing");
if (!albumBtn) {
  console.warn("albumBtn not found");
}
let idx = 0;
window.startTyping = function () {
idx = 0;
typingDiv.textContent = "";
albumBtn.classList.remove("visible");
type();
};
function type() {
if (idx < message.length) {
typingDiv.textContent += message[idx++];
setTimeout(type, 50);
} else {
albumBtn.classList.add("visible");
}}
const heartColors = [
"#ffb6c1",
"#ffd1dc",
"#ff69b4",
"#ffc0cb",
"#ff77aa"
];
for (let i = 0; i < 25; i++) {
const heart = document.createElement("div");
heart.className = "floating-heart";
heart.textContent = "💗";
heart.style.left =
Math.random() * 100 + "vw";
heart.style.color =
heartColors[
Math.floor(
Math.random() * heartColors.length
)
];
heart.style.animationDelay =
Math.random() * 10 + "s";
heart.style.animationDuration =
(7 + Math.random() * 8) + "s";
document.body.appendChild(heart);
}
musicBtn.addEventListener("click", () => {
if (music.paused) {
music.play();
musicBtn.innerHTML =
'';
} else {
music.pause();
musicBtn.innerHTML =
'';
}});
function showConfetti() {
const confettiColors = [
"#ff6f91",
"#ff9671",
"#ffc75f",
"#f9f871",
"#ff3c78"
];
for (let i = 0; i < 100; i++) {
const confetti =
document.createElement("div");
confetti.className = "confetti";
if (i % 2 === 0) {
confetti.classList.add("heart");
}
confetti.style.backgroundColor =
confettiColors[
Math.floor(
Math.random() *
confettiColors.length
)
];
confetti.style.setProperty(
"--x",
(Math.random() * 500 - 250) + "px"
);
confetti.style.setProperty(
"--y",
(Math.random() * -500) + "px"
);
confetti.style.left =
window.innerWidth / 2 + "px";
confetti.style.top =
window.innerHeight / 2 + "px";
document.body.appendChild(confetti);
setTimeout(() => {
confetti.remove();
}, 1200);
}}
function showFirework() {
    const container = document.getElementById("fireworkContainer");
    container.innerHTML = "";
    container.style.opacity = 1;
    for (let i = 0; i < 30; i++) {
        const fw = document.createElement("div");
        fw.className = "firework";
        fw.style.transform = `rotate(${i * 12}deg) translateY(-40px)`;
        container.appendChild(fw);
    }
    setTimeout(() => {
        container.style.opacity = 0;
    }, 1000);
}
albumBtn.addEventListener("click", () => {
albumBtn.style.display = "none";
showConfetti();
showFirework();
setTimeout(() => {
spawnHeartPhotosCentered();
}, 500);
});
function createHeartPhotoCentered(idx, total) {
    const photo = document.createElement("img");
    photo.src = photoUrls[idx % photoUrls.length];
    photo.className = "photo";
    document.body.appendChild(photo);
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    const t = Math.PI * 2 * (idx / total);
    const scale = window.innerWidth <= 480 ? 14 : 22;
    const targetX =
        centerX +
        scale *
        16 *
        Math.pow(Math.sin(t), 3);

    const targetY =
        centerY -
        scale *
        (
            13 * Math.cos(t)
            - 5 * Math.cos(2 * t)
            - 2 * Math.cos(3 * t)
            - Math.cos(4 * t)
        );
    photo.style.left = centerX + "px";
    photo.style.top = centerY + "px";
    setTimeout(() => {
        photo.style.opacity = "1";
        photo.style.pointerEvents = "auto";
        photo.style.transform =
            `translate(-50%, -50%)
             translate(
                ${targetX - centerX}px,
                ${targetY - centerY}px
             )`;
    }, 100);
}
function spawnHeartPhotosCentered() {
    const totalPhotos = 30;
    for (let i = 0; i < totalPhotos; i++) {
        setTimeout(() => {
            createHeartPhotoCentered(i, totalPhotos);
        }, i * 100);
    }
}
});
let lastTouchEnd = 0;
document.addEventListener("touchend", function (e) {
    const clickable = e.target.closest(
        "button, a, input, textarea, select, .btn, .ok"
    );
    if (clickable) return;
    const now = Date.now();
    if (now - lastTouchEnd < 300) {
        e.preventDefault();
    }
    lastTouchEnd = now;
}, { passive: false });
