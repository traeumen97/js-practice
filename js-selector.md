## Javascript on the Browser
> Html과 상호작용

1. document에서 항목들을 가지고 오는 것
2. document 항목들을 변경하는 것

- HTML의 Element들을 Javascript를 통해 변경하고 읽을 수 있음
- console에서 javascript의 관점에서 html을 볼 수 있다.
- html에서 작성했더라도 javascript에서 변경할 수 있다.
    ```javascript
    document.title //html의 title
    document.title ="new title" //html의 title이 new title로 변경됨

    document.body //html의 body
    ```

<br>

### HTML에서 항목들을 가지고 와서, Javascript를 통해 항목들을 변경

<br>

- Javascript로 정보를 가지고 올 수 있는 방법
  - document 객체와 element를 가져오는 수 많은 함수들을 이용
  ```html 
  <h2 class="hello" id="title">Grab me!</h1>
  ```
  ```javascript
  document.getElementById("title") // html의 h1을 불러옴
  ```
  ```javascript
  const title = document.getElementById("title");

  console.dir(title);
  //console에서 html의 text를 읽을 수 있다.
  ```
  ```javascript
  const title = document.getElementById("title");

  title.innerText = "Got you" 
  // console에서 id="title"의 innerText가 Got you로 변경됨

  console.log(title.id); //title 출력
  console.log(title.className); //hello 출력
  ```

- <span style="color:#ff6d6d">TypeError: Cannot set property 'innerText' of ___ null</span> : 코드 내에 어떤 값이 `null`이라는것

    아무것도 없는 것(null)의 innerText를 접근하려고 하는 것

  <br>

  ---

  <br>

### Searching for Element (Select)

- `getElementsByClassName`: Html에 ClassName이 여러개 있을경우
  
  ```javascript
  //array
  const hellos = document.getElementsByClassName("hello");

  console.log(hellos);
  ```
  - console에 "hello"의 ClassName을 가진 Element가 array로 나타남
  - array이기 때문에 `hello.---`으로 어떤것도 불러올 수 없음

<br>

- `getElementByTagName`
  ```javascript
  //array
  const title = document.getElementByTagName("h1");

  console.log(title);
  ```
  - h1의 태그를 가진 element를 불러옴
  - 하나의 h1만을 가지고 올 수는 없다.

<br>

- `querySelector` : element를 css방식으로 검색할 수 있음
  ```html
  <div>
      <h1>Grab me!</h1>
  </div>
  ```
  ```javascript
  const title = document.querySelector(".hello h1");

  console.log(title); //결과: <h1>Grab me!</h1>
  ```
  - hello라는 class 내부에 있는 h1을 가지고 올 수 있다.
  - 단 하나의 element만을 return 한다.
  - 해당하는 element가 여러개 있을 경우 첫번째 element만 가져온다.
  
  <br>

  ```javascript
  const title = document.querySelectorAll(".hello h1")

  console.log(title);
  ```
  - selector 안의 조건에 부합하는 모든 element를 불러올 수 있다.
  
  <br>

  ```javascript
  const title = document.querySelectorAll(".hello h1:first-child")
  
  const title = document.querySelector("#hello")
  //getElementById("hello")와 같은 역할

  console.log(title);
  ```
  - CSS Selector를 사용하여 하나의 element만을 return할 수 있다.
  - id 값 selector으로도 사용할 수 있다.

<br>

---

<br>

### Events

