# Math
## random()
> 0부터 1 사이의 랜덤한 숫자를 제공

- `Math.random() * 10`: 0부터 10 사이의 숫자들을 얻을 수 있음
  - 원하는 숫자들 사이의 값을 얻을 수 있지만 정수(integer)가 아닌 소수(float)값을 얻음

## round()
> 소수값을 반올림해서 출력

- 1.1 ~ 1.4 → 1
- 1.5 ~ 1.9 → 2

## ceil()
> 소수값을 올림해서 출력

- 1.0 → 1
- 1.1 → 2
- 1.8 → 2

## floor()
> 소수값을 내림해서 출력

- 1.1 → 1
- 1.9 → 1

`Math.floor(Math.random() * 10)` : 0 부터 10 사이의 값을 정수로 출력

---

<br>

- 10개의 명언들을 랜덤으로 출력

    `console.log(quotes[Math.floor(Math.random() * 10)]);`
    - 0 부터 10 전부 숫자가 됨
  
- **Array 길이만큼의 숫자**를 곱해줌(항상 몇개의 숫자가 있는지 기억할 수 없음)

    `console.log(quotes[Math.floor(Math.random() * quotes.length)]);`