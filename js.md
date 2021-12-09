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
