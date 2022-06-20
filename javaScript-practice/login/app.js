const login = document.querySelector(".login");
const loginInput = login.querySelector("input");
const greeting = document.querySelector("#greeting");

const ACCOUNTID_KEY = "accountId";

function onLoginButtonClick(event) {
    event.preventDefault();
    const accountId = loginInput.value;
    localStorage.setItem(ACCOUNTID_KEY, accountId);
    greeting.innerText = `${accountId}`;
}

login.addEventListener("submit", onLoginButtonClick);

const savedAccountId = localStorage.getItem(ACCOUNTID_KEY);

if(savedAccountId == null) {
    console.log("404");
}
