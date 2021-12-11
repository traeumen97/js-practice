## Javascript on the Browser

1. HTML에 js파일을 import 하지 않았을 경우 js에 document는 존재할 수 없다.
2. HTML이 js를 load하기 때문에 document가 존재한다.
3. 그 다음에 browser가 document에 접근 할 수 있게 해준다.



---

### Style 변경
- html의 style도 javascript에서 변경할 수 있다.
  ```html
  <div>
      <h1 class="title">Grab me!</h1>
  </div>
  ```
  ```javascript
  const h1 = document.querySelector("div.hello:first-child h1");

  console.dir(title);

  h1.style.color = "blue";
  ```

<br>

---

<br>

### Events
- click을 하면 그게 event임
  - h1위로 마우스가 올라가도 event
  - 입력을 끝내거나 내 이름을 적거나 enter를 누르는 것도 event
  - wifi접속이 해제될 때도 event
- Javascript는 모든 event들을 listen 할 수 있음

### Click Events

- `eventListener` : javascript에 무슨 event를 listen 하고 싶은지 알려줘야함
- `handleTitleClick` function : 
  ```javascript
  const h1 = document.querySelect("div.hello:first-child h1");

  function handleTitleClick() {
      console.log("title was clicked!");
  }
  
  h1.addEventListener("click", handleTitleClick);
  ```
  - click event를 listen하고, 이 click event가 발생하면, handleTitleClick이라는 function을 동작시키길 원함
  - function이 동작하지는 않음
  - function을 javascript에 넘겨주고 유저가 h1을 click할 경우에 javascript가 실행버튼을 대신 눌러주기를 바람

  ```javascript
  const h1 = document.querySelector("div.hello:first-child h1");

  function handleTitleClick() {
      h1.style.color = "bllue";
  }

  h1.addEventListener("click", handleTitleClick);
  ```
  - 어떤 event를 listen하고 싶은지를 명확히 해야됨
  - 유저가 이 element에 해당 event를 했을때 어떤 함수를 실행 할지도 정해야함
    - element → h1
    - event → click
    - 함수 실행 → handleTitleClick
    - javascript에 function을 넘겨주고 javascript가 대신 실행해줌

<br>

### Listen 하고 싶은 Event 찾는 방법

> Web API 문서

1. 구글에 찾고 싶은 element의 이름 `ex) h1 html element mdn` 검색
2. Mozilla Developer Network인 MDN에 검색
3. 구글 링크에 Web APIs라는 문장이 포함된 페이지 찾기
   - Javascript 관점의 HTML Heading Element란 의미
4. HTML Element의 HTML Element 상자 클릭
5. Event 섹션 있음

> `dir`로 console에서 확인
```javascript
console.dir(title);
```
1. `console.dir` 로 element를 console에 출력
2. console 창에서 확인
3. `on`으로 시작하는것들이 사용 가능한 event
4. `on` 뒤의 event 사용

```javascript
const h1 = document.querySelector("div.hello:first-child h1");

console.dir(title);

function handleTitleClick() {
    h1.style.color = "blue";
}

function handleMouseEnter() {
    h1.innerText = "Mouse is here!";
}

function handleMouseLeave() {
    h1.innerText = "Mouse is gone!";
}

h1.addEventListener("click", handleTitleClick);
h1.addEventListener("mouseenter", handleMouseEnter);
h1.addEventListener("mouseleave", handleMouseLeave);
```

<br>

---

<br>

### Event 를 사용하는 2가지 방법

- addEventListener

    ```javascript
    // 1.
    h1.addEventListener("click", handleTitleClick);
    h1.addEventListener("mouseenter", handleMouseEnter);
    h1.addEventListener("mouseleave", handleMouseLeave);
    ```
    ```javascript
    // 2.
    h1.onclick = handleTitleClick;
    h1.onmouseenter = handleMouseEnter;
    h1.onmouseleave = handleMouseLeave;
    ```
  - 1번 방법을 더 선호하는 이유는

    `.removeEventListener`를 통해서 event listener를 제거할 수 있기 때문

<br>

---

<br>

### Window

- `resize copy offline online`
  ```javascript
  const h1 = document.querySelector("div.hello:first-child h1");

  console.dir(title);

  function handleWindowResize() {
    document.body.style.backgroundColor = "tomato";
  }

  function handleWindowCopy() {
    alert("copier!");
  }

  function handleWindowOffline() {
  alert("SOS no WIFI");
  }

  function handleWindowOnline() {
    alert("ALL GOOD");
  }
  
  window.addEventListener("resize", handleWindowResize);
  window.addEventListener("copy", handleWindowCopy);
  window.addEventListener("offline", handleWindowOffline);
  window.addEventListener("online", handleWindowOnline);
  ```

- `handleTitleClick function`
  ```javascript
  const h1 = document.querySelector("div.hello:first-child h1");

  function handleTitleClick() {
    const currentColor = h1.style.color;
    let newColor;
    if (currentColor === "blue") {
        newColor = "tomato";
    } else {
        newColor = "blue";
    }
    h1.style.color = newColor;
  }

  h1.addEventListener("click", handleTitleClick);
  ```

### HTML · Javascript · CSS
- HTML
    ```html
    <h1>Click me!</h1>
    ```
- Javascript
    ```javascript
    const h1 = document.querySelector("div.hello:first-child h1");

    function handleTitleClick() {
        if (h1.className === clickedClass) {
            h1.className = ""; // 빈 값으로 지정
        } else {
            h1.className = clickedClass;
        }
    }
    ```
- CSS
    ```css
    body {
        background-color: beige;
    }
    h1 {
        color: cornflowerblue;
    }
    .clicked {
        color: tomato;
    }
    ```
- Javascript로 HTML을 변경하고 CSS로 style 변경

<br>

### 깔끔한 코드 작성

1. `const clickedClass = "clicked";` : const를 생성해서 string을 변수에 저장
   - string("clicked") 를 두번 사용 → 오류의 위험성이 있음
   - 이 방법을 사용하면 변수를 작성하는데 실수를 한다면 console에서 '변수가 정의되어있지 않다'고 알려줌

      <span style="color:#ff6d6d">**절대 HTML의 기존 클래스명을 변경하면 안됨**</span>
      ```javascript
        const h1 = document.querySelector("div.hello:first-child h1");

        function handleTitleClick() {
            const clickedClass = "clicked"; // 1. string을 변수에 저장
            if (h1.className === clickedClass) {
                h1.className = "";
            } else {
                h1.className = clickedClass;
            }
        }
        ```

2. classList를 사용하여 class명 변경(기존 className 유지) : 
   1. `contains` function
        - 명시한 class가 HTML element의class에 포함되어 있는지 말해줌
        - classList : element의 class 내용을 조작하는 것을 허용
        - classList가 clicked를 포함하고 있는지만을 확인하는 것
        ```javascript
        const h1 = document.querySelector("div.hello:first-child h1");

        function handleTitleClick() {
            const clickedClass = "clicked"; // 1. string을 변수에 저장
            if (h1.classList.contains(clickedClass)) { // 2. classList
                h1.classList.remove(clickedClass);
            } else {
                h1.classList.add(clickedClass);
            }
        }
        ```
        - clickedClass가 h1의 classList에 포함되어 있다면        
            `h1.classList.remove(clickedClass);`
        - clickedClass가 h1의 classList에 포함되어 있지 않다면        
            `h1.classList.add(clickedClass);`
    2. `toggle` function
        - class명이 존재하는지 확인
        - class명이 존재한다면 toggle은 class명을 제거
        - class명이 존재하지 않다면 toggle은 class명을 추가
        ```javascript
        const h1 = document.querySelector("div.hello:first-child h1");

        function handleTitleClick() {
            h1.classList.toggle("clicked");
        }
        // toggle은 h1의 classList에 clicked class가 이미 있는지 확인해서
        // 있다면 toggle이 clicked를 제거
        // 없다면 toggle이 clicked를 추가 
        ```
        - string을 반복하는 순간이 const를 생성할 순간
        