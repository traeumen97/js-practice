const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");

const link = document.querySelector("a");

function onLoginSubmit(tomato) {
    tomato.preventDefault();
    console.log(loginInput.value);
}

function handleLinkClick(event) {
    console.log("event");
    alert("clicked!");
}

loginForm.addEventListener("submit", onLoginSubmit);
link.addEventListener("click", handleLinkClick);