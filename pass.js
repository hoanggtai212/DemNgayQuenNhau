let currentLock = 1;
let inputPass = "";

const passwords = {
  1: "1",
  2: "1",
  3: "1"
};

function getInput() {
  return document.getElementById("password-input-" + currentLock);
}

function enterNumber(num) {
  if (inputPass.length >= 8) return;
  inputPass += num;
  getInput().value = "*".repeat(inputPass.length);
}

function deleteNumber() {
  inputPass = inputPass.slice(0, -1);
  getInput().value = "*".repeat(inputPass.length);
}

function checkPass() {

  const currentScreen = document.getElementById("lock-screen-" + currentLock);

  if (inputPass === passwords[currentLock]) {

    const overlay = document.getElementById("unlock-overlay");
    const bigLock = overlay.querySelector(".big-lock");
    const front = bigLock.querySelector(".front");
    const back = bigLock.querySelector(".back");

    overlay.style.display = "flex";

    // reset trạng thái
    bigLock.classList.remove("spin", "open");

    // đảm bảo bắt đầu là 🔒
    if (front) front.textContent = "🔒";
    if (back) back.textContent = "🔒";

    // ===== 1️⃣ Quay =====
    bigLock.classList.add("spin");

    // ===== 2️⃣ Bung to =====
    setTimeout(() => {
      bigLock.classList.add("open");
    }, 2000);

    // ===== 3️⃣ Sau khi bung xong mới đổi thành 🔓 =====
    setTimeout(() => {
      if (front) front.textContent = "🔓";
      if (back) back.textContent = "🔓";
    }, 2400);

    // ===== 4️⃣ Ẩn overlay & chuyển màn =====
    setTimeout(() => {

      overlay.style.display = "none";
      bigLock.classList.remove("spin", "open");

      currentScreen.style.display = "none";

      inputPass = "";
      getInput().value = "";

      if (currentLock < 3) {
        currentLock++;
        document.getElementById("lock-screen-" + currentLock).style.display = "flex";
      } else {
        document.getElementById("book").style.display = "block";
      }

    }, 3000);

  } else {

    // Sai → rung
    currentScreen.classList.add("shake");

    setTimeout(() => {
      currentScreen.classList.remove("shake");
    }, 400);

    inputPass = "";
    getInput().value = "";
  }
}

window.addEventListener("load", () => {
  const overlay = document.getElementById("unlock-overlay");
  const bigLock = overlay.querySelector(".big-lock");

  overlay.style.display = "flex";

  // ép render trước animation
  bigLock.classList.add("spin");
  bigLock.offsetHeight;
  bigLock.classList.remove("spin");

  overlay.style.display = "none";
});


