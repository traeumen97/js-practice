# createElement
> 정해진 이미지가 아닌 여러개의 이미지를 랜덤으로 화면에 출력하기 위해 html이 아닌 javascript로 이미지를 추가해줌

- javascript에서 이미지를 만들고 이걸 html에 추가
  
  `const bgImage = document.createElement("img");`
  - Element 탭에서 보려고 하면 어디에도 없고 페이지에서 찾을 수 없지만 console에서는 볼 수 있음

<br>

- javascript에서 html element 생성  

    bgImage.src = `img/${chosenImage}`;
  - chosenImage를 추가해서 string 생성


- bgImage를 body 내부에 추가

    `document.body.appendChild(bgImage);`
    - 아직 document에 존재하지 않음. javascript에만 존재하기 때문에 body에 불러와야함
    - `appendChild` : body의 **가장 뒤에** element추가
    - `prependChild` : body의 **가장 위에** element추가

<span style="color:#ff6d6d">quote에서 작성한대로 이미지 파일이 0 1 2 3 이런식으로 생성되어있지 않으면 실행되지 않음</span>