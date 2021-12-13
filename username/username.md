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

### - 유저 이름을 제출한 후에 저장 후 form 을 없애고 싶을 때
    
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
                <input required maxlength="15" type="text" placeholder="What is your name?">
                <button>Log In</button>
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
    const loginForm = document.querySelector("#login-form");
    const loginInput = document.querySelector("#login-form input");
    const greeting = document.querySelector("#greeting");
    const HIDDEN_CLASSNAME = "hidden";
    
    function onLoginSubmit(event) {
        event.preventDefault(); // 2
        loginForm.classList.add(HIDDEN_CLASSNAME); // 3
        const username = loginInput.value; // 5
        greeting.innerText = "Hello " + username; // 6 / 7
        // greeting.innerText = `Hello ${username}`;
        greeting.classList.remove(HIDDEN_CLASSNAME); // 4 / 8
    }

    loginForm.addEventListener("submit", onLoginSubmit); // 1

   ```

  - 지금 html에서 h1은 `hidden`이라는 클래스를 가지고있어서 존재하지만 숨겨져있음

    1. form이 submit을 기다리고있음
    2. 기본 동작을 멈추고 우리가 원하는대로 할 수 있음
    3. form에 hidden이라는 class를 추가
    4. loginform과 greeting이 같은 class를 가지고 있음
    5. loginInput값을 변수에(username) 저장
    6. 비어있는 h1인 greeing을 가져다가  hello username이라는 텍스트를 넣어줌
    7. string안에 변수값을 넣고 `"Hello " + username`
    8. h1에서 hidden이라는 class를 삭제해줌
    9. 이제 hidden이라는 클래스 명을 갖고있는건 form 뿐임

### value를 저장하기
> 기억하기 : 예를들어 유튜브에서 우리가 볼륨을 조절하고 새로고침하면 유튜브가 그 볼륨값을 기억

💡 user가 누구인지 기억하고싶음
- API : local storage → 우리가 브라우저에 뭔가를 저장할 수 있게 해주고 그걸 나중에 가져다 쓸 수 있음
  - 개발자도구에서 local storage에 뭐가 들었는지 확인할 수 있음
  - 개발자도구 → `>>` 클릭 → application → local storage
- `localStorage.setItem` / `localStorage.removeItem`
  ```javascript
    const loginForm = document.querySelector("#login-form");
    const loginInput = document.querySelector("#login-form input");
    const greeting = document.querySelector("#greeting");
    const HIDDEN_CLASSNAME = "hidden";
    
    function onLoginSubmit(event) {
        event.preventDefault();
        loginForm.classList.add(HIDDEN_CLASSNAME);
        const username = loginInput.value;
        localStorage.setItem("username", username); // 1. 저장될 아이템의 이름이고 값은 username 변수
        greeting.innerText = "Hello " + username;
        // greeting.innerText = `Hello ${username}`;
        greeting.classList.remove(HIDDEN_CLASSNAME);
    }

    loginForm.addEventListener("submit", onLoginSubmit);

   ```
   1. local storage에 사용자가 입력한 `username`이라는 값을 저장

<br>

 💡 user 정보가 있을 때 form 숨기기
- local storage에 유저정보가 있으면 form을 보여주면 안됨 → h1 요소를 보여줘야함
-  local storage에 유저정보 유무를 확인 → 없다면 form을ㄹ 보여주고 하던대로 하면 됨
    ```javascript
    const loginForm = document.querySelector("#login-form");
    const loginInput = document.querySelector("#login-form input");
    const greeting = document.querySelector("#greeting");

    const HIDDEN_CLASSNAME = "hidden";
    const USERNAME_KEY = "username";
    
    function onLoginSubmit(event) {
        event.preventDefault();
        loginForm.classList.add(HIDDEN_CLASSNAME);
        const username = loginInput.value;
        localStorage.setItem("USERNAME_KEY", username); // 1. 저장될 아이템의 이름이고 값은 username 변수
        greeting.innerText = "Hello " + username;
        // greeting.innerText = `Hello ${username}`;
            greeting.classList.remove(HIDDEN_CLASSNAME);
    }

    loginForm.addEventListener("submit", onLoginSubmit);

    const savedUsername = localStorage.getItem("USERNAME_KEY");

    if(savedUername === null) { // 3
        //show the form
        loginForm.classlList.remove(HIDDEN_CLASSNAME); // 2
        loginForm.addEventListner("submit", onLoginSubmit); // 4
    } else {
        //show the greetings
        greeting.innerText = `Hello ${savedUsername}`; // 6
        greeting.classList.remove(HIDDEN_CLASSNAME); // 5
    }

    ```
    1. html의 form에도 `class="hidden"` 추가해서 document에 안보인채로 시작
    2. `loginForm.classlList.remove(HIDDEN_CLASSNAME);` : hidden 클래스 제거
    3. 유저정보가 local storage에 없다면 local storage는 null 값을 반환
    4. savedUsername 값이 null이라면 form의 hidden class 명을 지워줌 → form이랑 h1모두 hidden이라는 클래스를 가지고 시작하기 때문
    5. 새로고침 했을때 유저정보가 저장되어있어야 하기 때문에 greeting의 hidden 클래스명을 제거해줘야함
    6. `greeting.innerText`로 유저명을 document에 보여주기
        - 먼저 greeting 안에 텍스트를 추가하고 hidden클래스를 제거

    <br>
    
- 이 코드를 두번 반복하고 있기 때문에 function을 추가해주는게 좋음

        greeting.innerText = `Hello ${savedUsername}`;

        greeting.classList.remove(HIDDEN_CLASSNAME);

- function 추가

    ```javascript
    const loginForm = document.querySelector("#login-form");
    const loginInput = document.querySelector("#login-form input");
    const greeting = document.querySelector("#greeting");

    const HIDDEN_CLASSNAME = "hidden";
    const USERNAME_KEY = "username";
    
    function onLoginSubmit(event) {
        event.preventDefault();
        loginForm.classList.add(HIDDEN_CLASSNAME);
        const username = loginInput.value;
        localStorage.setItem("USERNAME_KEY", username); // 1. 저장될 아이템의 이름이고 값은 username 변수
        greeting.innerText = "Hello " + username;
        
        paintGreetings(username);
    }

    function paintGreetings(username) {
        greeting.innerText = `Hello ${username}`;
        greeting.classList.remove(HIDDEN_CLASSNAME);
    }

    loginForm.addEventListener("submit", onLoginSubmit);

    const savedUsername = localStorage.getItem("USERNAME_KEY");

    if(savedUername === null) { // 3
        //show the form
        loginForm.classlList.remove(HIDDEN_CLASSNAME); // 2
        loginForm.addEventListner("submit", onLoginSubmit); // 4
    } else {
        //show the greetings
        paintGreetings(savedUsername);
    }

    ```

