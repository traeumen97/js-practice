# Intervals / Timeout

## setIntervals
> Interval은 **매번** 일어나야 하는 무언가를 말함 → '매 2초'마다 무슨 일이 일어나게 하고 싶을 때


- 두개의 argument를 받음
    
1. 실행하고자 하는 function 작성
2. 호출되는 function 간격을 몇 ms(milliseconds)로 할지 작성
    ```javascript
    const clock = document.querySelector("h2#clock");

    function sayHello() {
        console.log("hello");
    }

    setInterval(sayHello, 5000); // 5초마다 호출
    ```
## setTimeout

- setInterval과 비슷하게 생김

1. 호출하려고 하는 function을 작성
    ```javascript
    setTimeout(sayHello, 5000);
    ```

## Date Object

- 매 1초마다 getClock 실행
    ```javascript
    
    const clock = document.querySelector("h2#clock");

    function getClock() {
        const date = new Date();
        console.log(`${date.getHours()}:${date.getMinutes()}:${date.getSeconds}`);
    }

    getClock()
    setInterval(getClock, 1000);
    ```
    - 0초가 00초로 보이지 않음

## padStart / padEnd

- `padStart`: 앞쪽에 문자를 추가(string에 쓸 수 있는 function)
  
  `"1".padStart(2,"0")` : string의 길이가 2가 아니라면 앞쪽에 0을 추가

- `padEnd`: 뒤쪽에 문자를 추가(string에 쓸 수 있는 function)
- 
  `"1".padEnd(2,"0")` : string의 길이가 2가 아니라면 뒤쪽에 0을 추가

  ```javascript
  const clock = document.querySelector("h2#clock");

    function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = `${hours}:${minutes}:${seconds}`;
    }

    getClock();
    setInterval(getClock, 1000);
  ```