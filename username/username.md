# Practicd

## User Name

- select 기본적인 선택 방법
    ```javascript
    //1번
    const loginForm = document.getElementById("login-form"); // id 선택
    const loginInput = loginForm.querySelector("input"); // 선택한 id 안의 input 선택
    const loginButton = loginForm.querySelector("button"); // 선택한 id 안의 button 선택
    ```
- 좀 더 간단하게 선택
  ```javascript
  // 2번
  const loginInput = document.querySelector("#login-form input");
  const loginButton = document.querySelector("#login-form button");
 
  function onLoginBtnClick() {

  const username = loginInput.value;
    if (username === "") {
        alert("Please write your name");
    } else if(username.length > 15) {
        alert("Your name is too long");
        }
    }
            
    loginButton.addEventListener("click", onLoginBtnClick);
    ```
    - `username.length > 15` : console에서 username.length 입력하면 입력한 글자 수 확인가능

<br>

```javascript
    const loginInput = document.querySelector("#login-form input");
    const loginButton = document.querySelector("#login-form button");

    function onLoginSubmit() {
        const username = loginInput.ariaValueMax;
        console.log(username);
    }

    loginForm.addEventListener("submit", onLoginSubmit);
    onLoginSubmit();

```

- 유저 이름을 제출한 후에 form 을 없애고 싶을 때
    
1. html 요소 자체를 삭제
2. css를 이용해서 숨김
    ```html
    <!DOCTYPE html>
    <html lang="ko">
        <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <link rel="stylesheet" type="text/css" href="username.css">
            <title>User Name</title>
        </head>
        <body>
            <form id="login-form">
            </form>
            <h1 id="greeting" class="hidden"></h1>
            <script src="username.js"></script>
        </body>
    </html>
    ```
    ```css
    .hidden {
        display: none;
    }
    ```
    console에 입력된 후 사라짐
    ```javascript
    const loginInput = document.querySelector("#login-form input");
    const loginButton = document.querySelector("#login-form button");
    const greeting = document.querySelector("#greeting")

    function onLoginSubmit(event) {
        event.preventDefault();
        loginForm.classList.add("hidden");
        const username = loginInput.value;
        console.log(username);
        greeting.innerText = "Hello " + username;
    }
    ```