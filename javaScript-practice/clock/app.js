const clock = document.querySelector("h1#clock");

clock.innerText = "lalala"

function getDate() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0")
    const minutes = String(date.getMinutes()).padStart(2, "0")
    const seconds = String(date.getSeconds()).padStart(2, "0")
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getDate();
setInterval(getDate, 1000);