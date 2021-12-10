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