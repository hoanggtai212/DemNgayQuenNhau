document.addEventListener('DOMContentLoaded',()=>{const startDate='2026-05-23 00:00:00';function updateLoveTimer(){const startDateObj=new Date(startDate),currentDate=new Date(),timeDifference=currentDate.getTime()-startDateObj.getTime(),daysDifference=Math.floor(timeDifference/(1000*3600*24)),hours=Math.floor(timeDifference%(1000*3600*24)/(1000*3600)),minutes=Math.floor(timeDifference%(1000*3600)/(1000*60)),seconds=Math.floor(timeDifference%(1000*60)/1000),daysElement=document.getElementById('love-days'),timeElement=document.getElementById('love-hours');if(daysElement)daysElement.textContent=daysDifference;if(timeElement)timeElement.textContent=`${String(hours).padStart(2,'0')}:${String(minutes).padStart(2,'0')}:${String(seconds).padStart(2,'0')}`;document.title=`${daysDifference} Ngày Yêu ❤️`}setInterval(updateLoveTimer,1000);updateLoveTimer()});

function showPassword(){const counterPage=document.getElementById("counterPage"),passwordPage=document.getElementById("passwordPage"),curtain=document.getElementById("curtainTransition");if(curtain){curtain.style.display="block";curtain.classList.remove("curtain-open");curtain.style.pointerEvents="none"}if(counterPage)counterPage.style.display="none";if(passwordPage)passwordPage.style.display="flex";if(passwordPage)passwordPage.classList.remove("fade-in");setRunningTextInfinite("💗 ENTER PASSWORD 💗");requestAnimationFrame(()=>requestAnimationFrame(()=>{if(curtain)curtain.classList.add("curtain-open")}));setTimeout(()=>{if(curtain){curtain.style.display="none";curtain.classList.remove("curtain-open");curtain.style.pointerEvents="none"}},3000)}

function showAlbum(){const menuPage=document.getElementById("menuPage"),passwordPage=document.getElementById("passwordPage"),albumPage=document.getElementById("albumPage");if(menuPage)menuPage.style.display="none";if(passwordPage)passwordPage.style.display="none";if(albumPage)albumPage.style.display="block";setTimeout(()=>startTyping(),800)}

function showCounterWithCurtain(){const menuPage=document.getElementById("menuPage"),counterPage=document.getElementById("counterPage"),curtain=document.getElementById("curtainTransition");if(menuPage)menuPage.style.display="none";if(curtain){curtain.style.display="block";curtain.classList.remove("curtain-open");curtain.style.pointerEvents="none"}if(counterPage)counterPage.style.display="flex";requestAnimationFrame(()=>requestAnimationFrame(()=>{if(curtain)curtain.classList.add("curtain-open")}));setTimeout(()=>{if(curtain){curtain.style.display="none";curtain.classList.remove("curtain-open");curtain.style.pointerEvents="none"}},3000)}

function backHome(){location.reload()}

function showLoadingLove(){const passwordPage=document.getElementById("passwordPage"),loading=document.getElementById("loveLoading");if(passwordPage)passwordPage.style.display="none";if(!loading)return;loading.style.display="flex";let progress=0;const fill=document.getElementById("progressFill"),text=document.getElementById("progressPercent"),hearts=[document.getElementById("loadingHeart1"),document.getElementById("loadingHeart2"),document.getElementById("loadingHeart3")],startBtn=document.getElementById("startLoveBtn");if(!fill||!text)return;fill.style.width="0%";text.textContent="0%";if(startBtn){startBtn.style.display="none";startBtn.classList.remove("show")}hearts.forEach(heart=>{if(heart){heart.classList.remove("heart-active");heart.style.animationPlayState="running"}});const timer=setInterval(()=>{progress++;fill.style.width=progress+"%";text.textContent=progress+"%";if(progress===20&&hearts[0])hearts[0].classList.add("heart-active");if(progress===50&&hearts[1])hearts[1].classList.add("heart-active");if(progress===80&&hearts[2])hearts[2].classList.add("heart-active");if(progress>=100){clearInterval(timer);fill.style.width="100%";text.textContent="100%";setTimeout(()=>{if(startBtn){startBtn.style.display="block";requestAnimationFrame(()=>startBtn.classList.add("show"))}},300)}},30)}

document.addEventListener("DOMContentLoaded",()=>{const startBtn=document.getElementById("startLoveBtn");if(!startBtn)return;startBtn.addEventListener("click",()=>{const loading=document.getElementById("loveLoading"),hearts=[document.getElementById("loadingHeart1"),document.getElementById("loadingHeart2"),document.getElementById("loadingHeart3")];hearts.forEach(heart=>{if(heart)heart.style.animationPlayState="running"});startBtn.classList.add("button-click-out");setTimeout(()=>{if(loading)loading.classList.add("loading-transition-out");const success=document.getElementById("loveSuccess");if(success){success.style.display="flex";success.classList.add("success-transition-in");showLoveSuccess()}setTimeout(()=>{if(loading){loading.style.display="none";loading.classList.remove("loading-transition-out")}},1800)},350)})});

let password="",checkTimer=null,actionTimer=null;

function cancelCurrentAction(){if(checkTimer){clearTimeout(checkTimer);checkTimer=null}if(actionTimer){clearTimeout(actionTimer);actionTimer=null}const runningText=document.getElementById("runningText"),display=document.getElementById("display");if(runningText)runningText.getAnimations().forEach(a=>a.cancel());password="";if(display)display.value="";setRunningTextInfinite("💗 ENTER PASSWORD 💗")}

function setRunningText(text,color="#e75480"){return startMarquee(text,color,false)}
function setRunningTextInfinite(text,color="#e75480"){startMarquee(text,color,true)}

function startMarquee(text,color="#e75480",loop=true){const running=document.getElementById("runningText"),wrap=document.querySelector(".display-wrap");if(!running||!wrap)return 0;running.getAnimations().forEach(a=>a.cancel());running.style.display="none";running.textContent=text;running.style.color=color;running.style.display="block";requestAnimationFrame(()=>{const textWidth=running.offsetWidth,wrapWidth=wrap.offsetWidth,distance=textWidth+wrapWidth,speed=100,duration=distance/speed*1000;running.animate([{transform:`translate3d(${wrapWidth}px,-50%,0)`},{transform:`translate3d(-${textWidth}px,-50%,0)`}],{duration:duration,iterations:loop?Infinity:1,easing:"linear"})});return((running.offsetWidth+wrap.offsetWidth)/100)*1000}

document.addEventListener("DOMContentLoaded",()=>setRunningTextInfinite("💗 ENTER PASSWORD 💗"));

function addNum(num){if(checkTimer||actionTimer)cancelCurrentAction();password+=num;const running=document.getElementById("runningText"),display=document.getElementById("display");if(running)running.style.display="none";if(display)display.value="*  ".repeat(password.length)}

function delNum(){if(checkTimer||actionTimer){cancelCurrentAction();return}password=password.slice(0,-1);const display=document.getElementById("display");if(display)display.value="*  ".repeat(password.length);if(password.length===0){if(display)display.value="";setRunningTextInfinite("💗 ENTER PASSWORD 💗")}}

function checkPassword(){if(checkTimer){clearTimeout(checkTimer);checkTimer=null}if(actionTimer){clearTimeout(actionTimer);actionTimer=null}const display=document.getElementById("display");if(display)display.value="";const checkingTime=setRunningText("💗 ĐANG KỂM TRA TỀNH ÊU... 💗","#ffb300");checkTimer=setTimeout(()=>{if(password==="0"){const successTime=setRunningText("💗 ĐÚM RÙI BÉ UI. HAY QÓ 💗","#00cc66");actionTimer=setTimeout(()=>{showUnlockAnimation();actionTimer=null},successTime)}else{const failTime=setRunningText("😜 SAI RÙI BÉ UI. LIU LIU 😜","#ff3333"),container=document.querySelector(".container");if(container)container.classList.add("shake");actionTimer=setTimeout(()=>{if(container)container.classList.remove("shake");password="";if(display)display.value="";setRunningTextInfinite("💗 ENTER PASSWORD 💗");actionTimer=null},failTime)}checkTimer=null},checkingTime)}

function showUnlockAnimation(){const overlay=document.getElementById("unlock-overlay");if(!overlay)return;const bigLock=overlay.querySelector(".big-lock");if(!bigLock)return;const front=bigLock.querySelector(".front"),back=bigLock.querySelector(".back");overlay.style.display="flex";bigLock.classList.remove("spin","lock-open");if(front)front.textContent="🔒";if(back)back.textContent="🔒";bigLock.classList.add("spin");setTimeout(()=>bigLock.classList.add("lock-open"),2000);setTimeout(()=>{if(front)front.textContent="🔓";if(back)back.textContent="🔓"},2400);setTimeout(()=>{overlay.style.display="none";showLoadingLove()},3000)}

function showLoveSuccess(){const heart1=document.getElementById("heart1"),heart2=document.getElementById("heart2"),heart3=document.getElementById("heart3"),successFill=document.querySelector(".success-fill"),successPercent=document.getElementById("successPercent"),successTitle=document.querySelector(".success-title"),clickMe=document.getElementById("clickMe");if(!successFill)return;let progress=0;successFill.style.width="0%";if(successPercent)successPercent.textContent="0%";[heart1,heart2,heart3].forEach(heart=>{if(heart)heart.classList.remove("heart-active")});if(successTitle){successTitle.classList.remove("show");successTitle.style.opacity="0";successTitle.style.visibility="hidden"}if(clickMe){clickMe.classList.remove("show");clickMe.style.display="none";clickMe.style.opacity="0";clickMe.style.visibility="hidden";clickMe.style.pointerEvents="none"}const timer=setInterval(()=>{progress++;successFill.style.width=progress+"%";if(successPercent)successPercent.textContent=progress+"%";if(progress===20&&heart1)heart1.classList.add("heart-active");if(progress===50&&heart2)heart2.classList.add("heart-active");if(progress===80&&heart3)heart3.classList.add("heart-active");if(progress>=100){clearInterval(timer);progress=100;successFill.style.width="100%";if(successPercent)successPercent.textContent="100%";setTimeout(()=>{if(successTitle){successTitle.style.visibility="visible";successTitle.classList.add("show")}if(clickMe){clickMe.style.display="block";clickMe.style.visibility="visible";clickMe.style.pointerEvents="auto";requestAnimationFrame(()=>clickMe.classList.add("show"))}},600)}},30)}

document.addEventListener("DOMContentLoaded",()=>{const clickMe=document.getElementById("clickMe");if(!clickMe)return;clickMe.addEventListener("click",()=>{const successPage=document.getElementById("loveSuccess"),curtain=document.getElementById("curtainTransition"),menuPage=document.getElementById("menuPage");if(successPage)successPage.style.display="none";if(curtain){curtain.style.display="block";curtain.classList.remove("curtain-open");curtain.style.pointerEvents="none"}if(menuPage)menuPage.style.display="flex";requestAnimationFrame(()=>requestAnimationFrame(()=>{if(curtain)curtain.classList.add("curtain-open")}));setTimeout(()=>{if(curtain){curtain.style.display="none";curtain.classList.remove("curtain-open");curtain.style.pointerEvents="none"}},3300)})});

const message="Hành trình của chúng ta bắt đầu từ hôm nay. Mỗi khoảnh khắc bên nhau sẽ là một viên gạch xây nên ngôi nhà hạnh phúc. Cùng nhau, chúng ta sẽ viết nên một câu chuyện tình yêu vĩnh cửu. ❤️";
const photoUrls=["img/anh1.jpg","img/anh2.jpg","img/anh3.jpg","img/anh4.jpg","img/anh5.jpg","img/anh6.jpg","img/anh7.jpg","img/anh8.jpg","img/anh9.jpg","img/anh10.jpg","img/anh11.jpg","img/anh12.jpg","img/anh13.jpg","img/anh14.jpg","img/anh15.jpg","img/anh16.jpg","img/anh17.jpg","img/anh18.jpg","img/anh19.jpg","img/anh20.jpg","img/anh21.jpg","img/anh22.jpg","img/anh23.jpg","img/anh24.jpg","img/anh25.jpg","img/anh26.jpg","img/anh27.jpg","img/anh28.jpg","img/anh29.jpg","img/anh30.jpg"];

const music=document.getElementById("music"),musicBtn=document.getElementById("musicBtn"),albumBtn=document.getElementById("albumBtn"),typingDiv=document.getElementById("typing");
if(!albumBtn)console.warn("albumBtn not found");
let idx=0;

window.startTyping=function(){idx=0;if(typingDiv)typingDiv.textContent="";if(albumBtn)albumBtn.classList.remove("visible");type()};

function type(){if(!typingDiv||!albumBtn)return;if(idx<message.length){typingDiv.textContent+=message[idx++];setTimeout(type,50)}else albumBtn.classList.add("visible")}

const heartColors=["#ffb6c1","#ffd1dc","#ff69b4","#ffc0cb","#ff77aa"];
for(let i=0;i<25;i++){const heart=document.createElement("div");heart.className="floating-heart";heart.textContent="💗";heart.style.left=Math.random()*100+"vw";heart.style.color=heartColors[Math.floor(Math.random()*heartColors.length)];heart.style.animationDelay=Math.random()*10+"s";heart.style.animationDuration=7+Math.random()*8+"s";document.body.appendChild(heart)}

if(musicBtn&&music){musicBtn.addEventListener("click",()=>{if(music.paused){music.play();musicBtn.innerHTML=''}else{music.pause();musicBtn.innerHTML=''}})}

function showConfetti(){const confettiColors=["#ff6f91","#ff9671","#ffc75f","#f9f871","#ff3c78"];for(let i=0;i<100;i++){const confetti=document.createElement("div");confetti.className="confetti";if(i%2===0)confetti.classList.add("heart");confetti.style.backgroundColor=confettiColors[Math.floor(Math.random()*confettiColors.length)];confetti.style.setProperty("--x",Math.random()*500-250+"px");confetti.style.setProperty("--y",Math.random()*-500+"px");confetti.style.left=window.innerWidth/2+"px";confetti.style.top=window.innerHeight/2+"px";document.body.appendChild(confetti);setTimeout(()=>confetti.remove(),1200)}}

function showFirework(){const container=document.getElementById("fireworkContainer");if(!container)return;container.innerHTML="";container.style.opacity=1;for(let i=0;i<30;i++){const fw=document.createElement("div");fw.className="firework";fw.style.transform=`rotate(${i*12}deg) translateY(-40px)`;container.appendChild(fw)}setTimeout(()=>container.style.opacity=0,1000)}

if(albumBtn){albumBtn.addEventListener("click",()=>{albumBtn.style.display="none";showConfetti();showFirework();setTimeout(()=>spawnHeartPhotosCentered(),500)})}

function createHeartPhotoCentered(idx,total){const photo=document.createElement("img");photo.src=photoUrls[idx%photoUrls.length];photo.className="photo";document.body.appendChild(photo);const centerX=window.innerWidth/2,centerY=window.innerHeight/2,t=Math.PI*2*(idx/total),scale=window.innerWidth<=480?14:22,targetX=centerX+scale*16*Math.pow(Math.sin(t),3),targetY=centerY-scale*(13*Math.cos(t)-5*Math.cos(2*t)-2*Math.cos(3*t)-Math.cos(4*t));photo.style.left=centerX+"px";photo.style.top=centerY+"px";setTimeout(()=>{photo.style.opacity="1";photo.style.pointerEvents="auto";photo.style.transform=`translate(-50%,-50%) translate(${targetX-centerX}px,${targetY-centerY}px)`},100)}

function spawnHeartPhotosCentered(){const totalPhotos=30;for(let i=0;i<totalPhotos;i++){setTimeout(()=>createHeartPhotoCentered(i,totalPhotos),i*100)}}

let lastTouchEnd=0;
document.addEventListener("touchend",e=>{const clickable=e.target.closest("button,a,input,textarea,select,.btn,.ok");if(clickable)return;const now=Date.now();if(now-lastTouchEnd<300)e.preventDefault();lastTouchEnd=now},{passive:false});


/* ===== INTRO DOOR ===== */
const door = document.getElementById("introDoor");
const passwordPage = document.getElementById("passwordPage");
if(door){
    door.addEventListener("click",()=>{
        if(door.classList.contains("door-start")) return;
        console.log("🚪 MỞ CỬA");
        // Cửa + ánh sáng bắt đầu NGAY LẬP TỨC
        door.classList.add("door-start");
        door.style.pointerEvents = "none";
        // Khi ánh sáng đã lóe gần kín màn hình → hiện Password
        setTimeout(()=>{
            console.log("💗 HIỆN PASSWORD");
            if(passwordPage){
                passwordPage.style.display = "flex";
                passwordPage.style.visibility = "visible";
                passwordPage.style.opacity = "1";
                passwordPage.style.zIndex = "100000000";
            }
            password = "";
            const display = document.getElementById("display");
            if(display) display.value = "";

            setRunningTextInfinite("💗 ENTER PASSWORD 💗");
        },3500);
        // Bỏ intro ngay sau khi chuyển cảnh
        setTimeout(()=>{
            console.log("🚪 XÓA INTRO DOOR");
            door.remove();
        },3600);
    });
}
