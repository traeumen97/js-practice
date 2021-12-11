```javascript

// const loginForm = document.getElementById("login-form");
// const loginInput = loginForm.querySelector("input");
// const loginButton = loginForm.querySelector("button");

// const loginInput = document.querySelector("#login-form input");
// const loginButton = document.querySelector("#login-form button");

// function onLoginBtnClick() {
    //     const username = loginInput.value;
    //     if (username === "") {
        //         alert("Please write your name");
        //     } else if(username.length > 15) { // console에서 username.length 입력하면 입력한 글자 수 확인가능
        //         alert("Your name is too long");
        //     }
        // }
        
        // loginButton.addEventListener("click", onLoginBtnClick);
const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");

function onLoginSubmit() {
    const username = loginInput.ariaValueMax;
    console.log(username);
}

loginForm.addEventListener("submit", onLoginSubmit);
onLoginSubmit();

```