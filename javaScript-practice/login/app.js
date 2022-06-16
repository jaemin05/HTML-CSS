const login = document.querySelector(".login");
const loginInput = login.querySelector("input");
const greeting = document.querySelector("#greeting");

function onLoginButtonClick(event) {
    event.preventDefault();
    const accountId = loginInput.value;
    localStorage.setItem("accountId", accountId);
    greeting.innerText = `${accountId}`;
}

login.addEventListener("submit", onLoginButtonClick);