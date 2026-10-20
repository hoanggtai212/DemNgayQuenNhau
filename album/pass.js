let currentLock=1;
let inputPass="";
let isChecking=false;

const passwords={1:"333",2:"22",3:"1"};

function getInput(){return document.getElementById("password-input-"+currentLock)}

function enterNumber(num){if(isChecking||inputPass.length>=8)return;inputPass+=num;const input=getInput();if(input)input.value="*".repeat(inputPass.length)}

function deleteNumber(){if(isChecking)return;inputPass=inputPass.slice(0,-1);const input=getInput();if(input)input.value="*".repeat(inputPass.length)}

function checkPass(){
if(isChecking)return;
const currentScreen=document.getElementById("lock-screen-"+currentLock);
if(!currentScreen)return;
if(inputPass===passwords[currentLock]){
isChecking=true;
const overlay=document.getElementById("unlock-overlay");
if(!overlay){isChecking=false;return}
const bigLock=overlay.querySelector(".big-lock");
if(!bigLock){isChecking=false;return}
const front=bigLock.querySelector(".front"),back=bigLock.querySelector(".back");
overlay.style.display="flex";
bigLock.classList.remove("spin","open");
if(front)front.textContent="🔒";
if(back)back.textContent="🔒";
void bigLock.offsetWidth;
bigLock.classList.add("spin");
setTimeout(()=>bigLock.classList.add("open"),2000);
setTimeout(()=>{if(front)front.textContent="🔓";if(back)back.textContent="🔓"},2400);
setTimeout(()=>{overlay.style.display="none";bigLock.classList.remove("spin","open");currentScreen.style.display="none";inputPass="";const input=getInput();if(input)input.value="";if(currentLock<3){currentLock++;const nextScreen=document.getElementById("lock-screen-"+currentLock);if(nextScreen)nextScreen.style.display="flex";isChecking=false}else{const book=document.getElementById("book");if(book)book.style.display="block"}},3000);
}else{
currentScreen.classList.add("shake");
setTimeout(()=>currentScreen.classList.remove("shake"),400);
inputPass="";
const input=getInput();if(input)input.value="";
}
}

window.addEventListener("load",()=>{const overlay=document.getElementById("unlock-overlay");if(!overlay)return;const bigLock=overlay.querySelector(".big-lock");if(!bigLock)return;overlay.style.display="flex";bigLock.classList.add("spin");void bigLock.offsetHeight;bigLock.classList.remove("spin");overlay.style.display="none"});
