# Javascript
- `let` / `const` / `var`의 차이
  - `var` : 옛날 버전의 자바스크립트에서 많이 쓰임. 원한다면 어디서든 업데이트 할 수 있지만<br>언어를 통한 보호를 받지 못해서 실수로 업데이트 하더라도 알려주지 않음.
  - `const` : constant(상수)로 variable을 만들었다면 절대 값을 업데이트 할 수 없다.

    ```javascript
    const myName = "seokyung";

    myName = "kimseokyung"; //업데이트 할 수 없음    
    ```

  - `let` : let으로 variable을 만들었다면 업데이트 할 수 있다.

    ```javascript
    let myName = "seokyung";

    myName = "kimseokyung"; //업데이트 가능
    ```
<br>

---

<br>

- boolean
  - `true` | `false`
  
    `"true"` | `"false"`로 쓰지 않도록 주의해야함
  - 사용하는 경우 : 사용자가 로그인을 했는가? 비디오가 재생되고 있는가?
- defined / undefined  
  - defined
    
    `null` : '존재하지 않음' / '정의되지 않음' / '아무것도 없음'을 의미하는 데이터타입 
    
    → 변수에 아무것도 없음. 절대 자연적으로 발생하지 않음.

        variable 안에 어떤 것이 없다는 것을 확실히 하기 위해 사용
  - undefined
    ``` javascript
    let somthing; //variable을 만들고는 있는데 여기에 값을 주지 않음
    console.log(something); //something이라는 variable을 만들고 있지만 값을 주지 않음
    ```

<br>

---

<br>

## 데이터를 정리하는 방법
> 어떻게 하면 가능한 최선의 방법으로 정리할 수 있을까에 관한 것

<br>

### Array

- array 시작과 끝에 [ ]로 작성, 쉼표로 구분
- array를 사용하지 않을 경우
  ```javascript
  const mon = "mon";
  const tue = "tue";
  const wed = "wed";
  const thu = "thu";
  const fri = "fri";
  const sat = "sat";
  const sun = "sun";
  ```
- array를 사용 할 경우
  ```javascript
  const daysOfWeek = ["mon", "tue", "wed", "thu", "fri", "sat"];
  const nonsense = [1, 2, "hello", false, true, null, undefined, "seokyung"];

  console.log(daysOfWeek, nonsense);

  // Get Item from Array
  console.log(daysOfWeek[5]); // dayOfWeek의 다섯번째 element를 알려주세요

    
  // Add one more day to the array
  daysOfWeek.push("sun");

  console.log(daysOfWeek);
  ```
- 컴퓨터는 1부터 세지 않고 0부터 센다.

  따라서 `dayOfWeek[5]`는 `sat`의 결과를 가짐.
- array의 기능
  1. array 안에서 항목을 받아오는 것
  2. array에 하나 더 추가하는 것 
  
<br>

---

<br>

### Object

- 게임을 만들고 있다고 상상할 때
  ```javascript
  const playerName = "seokyung";
  const playerPoints = 121212;
  const playerHandsome = false;
  const playerFat = "little bit";

  player.name
  player.points
  player.handsome // 이렇게 작성하는것이 훨씬 좋음
  ```
  `playerName`, `playerPoints`, `playerHandsome`, `playerFat`
  
  이 property들이 한 개의 개체(entity), 즉 player에 대해서 설명하고 있다는 것을 알고있다.

- 이 array는 1212, false, "little bit" 이 무슨 의미인지 알려주고 있지 않다.
  
  // 주석으로 player[0] == name, player[1] == points 이렇게 작성할 수 있지만 좋지 않다.
  ```javascript
  const player = ["seokyung", 121212, false, "little bit"];
  ```
- object 안에서는 = (equal) 을 사용하지 않고, :(colon)을 사용한다.
- 한 개의 property를 작성한 후 ,(comma) 를 사용해서 추가로 작성한다.

  ```javascript
  // object 활용
  const player = {
    name: "seokyung",
    points: 10,
    fat: true,
  };
  console.log(player);
  console.log(player.name);
  console.log(player["name"]);
  ```
- object update
  ```javascript
  console.log(player);
  player.fat = false;
  console.log(player);
  // play.fat의 값이 false로 업데이트 됨
  
  player = false;
  // 이 경우에 에러 발생

  playet.lastName = "potato";
  // 원하는 어떤 property든 추가 할 수 있음

  player.points = player.points + 15;
  // 10 + 15 → 25로 업데이트 됨
  ```
  - const 값은 수정할 수 없지만 위의 결과는 object 안의 값을 수정하는 것이기 때문에 가능하다.
  - const 전체를 하나의 값으로서 업데이트 하려고 할 때 에러가 발생한다.

  <br>

  ---

  <br>

### Function

- 겹치는 내용의 코드를 계속해서 복사 붙여넣기 하지 않기 위해 사용
- function을 사용하지 않았을 때
  ```javascript
  console.log("Hello my name is Seokyung");
  console.log("Hello my name is Nico");
  console.log("Hello my name is Flynn");
  console.log("Hello my name is Flynn");
  console.log("Hello my name is Dal");
  ```
- function을 사용할 때
  ```javascript
  function sayHello() {
    console.log("Hello!");
  }
  // {}안에 작성하는 것이 sayHello를 실행할 때마다 실행

  sayHello();
  sayHello();
  sayHello();
  sayHello();
  //중괄호 안에 있는 코드가 실행을 누를 때마다 실행됨
  ```
- 인수(argument)를 보냄
  - function을 실행하는 동안 어떤 정보를 function에게 보낼 수 있는 방법
  ```javascript
  function sayHello() {
    console.log("Hello! My name is ");
  }

  sayHello("nico"); // Hello! My name is nico
  console.log(); // 괄호 안에 아무것도 작성하지 않았기 때문에 아무것도 실행되지 않음
  console.log("nico!");
  ```
- function으로 입력하고 출력
  ```javascript
  function sayHello(nameOfPerson, age) {
    console.log(nameOfPerson);
    console.log("Hello my name is " + nameOfPerson + " and I'm " + age "years old");
  }

  sayHello("nico", 10);
  sayHello("dal", 23);
  sayHello("lynn", 21);

  // 출력 값: nico dal lynn
  // 출력 값: Hello my name is nico and I'm 10 years old ・・・ dal 23, lynn 21 
  ```
- +계산기 만들기
  ```javascript
  function plus(a, b) { // 아무 이름이나 상관없음
    console.log(a, b);
    console.log(a + b);
  }

  plus(); //출력 값: undefined
  plus(); //출력 값: NaN (Not a Number)
  plus(8, 60); //출력 값: 68
  ```
- /계산기 만들기
  ```javascript
  function divide(a, b) {
    console.log(a / b);
  }

  divide(4, 2); //출력 값: 2
  ```
- object안에 function 입력
  ```javascript
  const player = {
    name: "nico",
    sayHello: function(otherPersonsName) {
      console.log("Hello! " + otherPersonsName + " nice to meet you");
    },
  }

  console.log(player.name); //출력 값: nico
  player.sayHello(lynn); //출력 값: Hello! lynn nice to meet you
  ```

  <br>

  ---

  <br>

### Return

- 어떤 작업을 처리하고 그 결과를 return하기 위해 function을 사용
  ```javascript
  const age = 96; // 2. 96이라는 argument가 1번의 age 자리로 대체

  function calculateKrAge(ageOfForeinger){ // 3. 1번의 자리로 대체된 2번의 96이 ageOfForeinger로 대체
      return ageOfForeinger + 2; // 4. 3번에서 대체된 96이 ageOfForeinger로 대체 → 96 + 2
  }

  const krAge = calculateKrAge(age); // 1. calculateKrAge 실행 // 5. calculateKrAge(age)가 98로 대체

  console.log(krAge); // console.log 했을 때 98로 출력
  ```
  - console에 출력하려고 function을 쓰지 않음
  - 한 번 return 하면 function은 작동을 멈추고 결과 값을 return하고 끝남