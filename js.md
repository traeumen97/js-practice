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