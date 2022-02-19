### Conditionals

- true | false 인지 알려줌
- keyword: `if`

    `if` 숫자가 20보다 크면?

    `if` 날씨 정보를 알 수 있다면?
- `prompt`: 사용자에게 창을 띄울 수 있도록 해줌
  - 2개의 argument를 받음
    1. message(문자) = string
    2. default
  - css 적용이 안됨 (그래서 요즘 잘 안씀)
  ```javascript
  const age = prompt("How old are you?"); // 여기서 멈춘 상태로 대기

  console.log(typeof age);
  ```
- `typeof` value: variable의 type
- `parseInt`: string을 number로 변환 <span style="color:#ff6d6d">(NaN일 경우에는 불가능)</span>
  ```javascript
  const age = prompt("How old are you?");

  console.log(typeof "15"); //결과 값: string
  console.log(typeof parseInt("15")); //결과 값: number  
  ```
  - 숫자가 아닌 값을 입력하면 NaN의 결과 값을 받음
  
<br>

- condition: 어떤 것을 확인할 수 있게 해줌
  ```javascript
  if(condition) {
    //condition === true
  } else {
    //condition === false
  }
  ```
- `isNaN`: is Not a Number
  ```javascript
  const age = parseInt(prompt("How old are you?"));

  if (isNaN(age)) {
    console.log("Please write a number.");
  } else {
    console.log("Thank you.");
  }
  ```
- `else if`: 값이 `false`일 경우, 조건이 하나 이상일 때
  ```javascript
  const age = parseInt(prompt("How old are you?"));

  if (isNaN(age)) {
    console.log("Please write a number");
  } else if(age < 18) {
    console.log("You are too young.");
  } else {
    console.log("You can drink."); //모든 조건이 false일 경우 마지막에 실행 됨
  }
  ```
- `&&` And Operator: 두 가지 조건이 `true`일 경우
  ```javascript
  const age = parseInt(prompt("How old are you?"));
  
  if (isNaN(age)) {
    console.log("Please write a number");
  } else if(age < 18) {
    console.log("You are too young.");
  } else if(age >= 18 && age <= 50) {
    console.log("You can drink.");
  } else if(age > 50 && age <= 80) {
    console.log("You should exercise!");
  } else { //else는 선택사항. 없어도 됨
    console.log("You can't drink.");
  }
  ```
- `||` Or Operator: 한 가지라도 `true`일 경우
  ```javascript
  const age = parseInt(prompt("How old are you?"));
  
  if (isNaN(age) || age < 0) {
    console.log("Please write a real positive number");
  } else if(age < 18) {
    console.log("You are too young.");
  } else if(age >= 18 && age <= 50) {
    console.log("You can drink.");
  } else if(age > 50 && age <= 80) {
    console.log("You should exercise!");
  } else if(age > 80) {
    console.log("You can do whatever you want");
  }
  ```
- ### && And / || Or 연산자 비교 : 둘 다 연속적으로 사용 가능

  `||` Or 연산자
  - `true || true === true`
  - `false || true === true`
  - `true || false === true`
  - `false || false === false`
  
  <br>
  
  `&&` And 연산자
  - `true && true === true`
  - `false && true === false`
  - `true && false === false`
  - `false && false === false`