const title = document.querySelector(".title h1");
const h1 = document.querySelector(".test h1");

title.innerText = "HERE";

function handleTitleClick() {    
    h1.classList.toggle("active");
}

function handleMouseEnter() {
    title.innerText = "Mouse Here";
}

function handleMouseLeave() {
    title.innerText = "Hello";
}

function handleWindow() {
    document.body.style.backgroundColor = "bisque";
}

function handleCopy() {
    alert("복사 금지!");
}

function handleOffline() {
    alert("와이파이 필요!");
}

function handleOnline() {
    alert("와이파이 연결 성공");
}

console.log(title);

h1.addEventListener("click", handleTitleClick);

title.addEventListener("mouseenter", handleMouseEnter);
title.addEventListener("mouseleave", handleMouseLeave);

window.addEventListener("resize", handleWindow);
window.addEventListener("copy", handleCopy);
window.addEventListener("offline", handleOffline);
window.addEventListener("online", handleOnline);
