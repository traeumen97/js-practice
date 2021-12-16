# geolocation
> 호출하면 브라우저에서 위치 좌표를 제공.(Wifi, 위치, GPS 등)

## navigator

- `navigator.geolocation.getCurrentPosition() `
  - 잘 진행되고 있을 때 실행 되는 함수
  - 에러가 발생했을 때 실행 될 함수

## Weather API

1. https://openweathermap.org/api
2. API 메뉴 → Current Weather Data → API doc → By geographic coordinates → API call
3. API call : api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key} url 복사
4. `{lat}`, `{lon}`, `{API key}`에 console에 출력된 latitude 값과 longitude 값으로 대체
5. openweathermap.org → 내정보 → my API key → 나의 API key를 {API key}에 대체
6. 입력한 url로 검색하면 내 위치에 따른 정보와 날씨를 보여줌

    ```javascript
    const API_KEY = "251540a7409d9e3507dda9e5862272d9";

    function onGeoOk(position) {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`; 
        // lat, lon, API값을 const 값으로 변경
        fetch(url);
    }
    function onGeoError() {
        alert("Can't find you. No weather for you.");
    }
    
    navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
    ```

7. 문서의 units=metric 값 복사
- https://api.openweathermap.org/data/2.5/weather?lat=37.2561023&lon=127.0229669&appid=251540a7409d9e3507dda9e5862272d9&`units=metric`
    
- url의 끝에 `units=metric` 값을 붙여주면 화씨온도가 섭씨온도로 변경됨

    ```javascript
    const API_KEY = "251540a7409d9e3507dda9e5862272d9";

    function onGeoOk(position) {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
        fetch(url).then(response => response.json())
                .then(data => {
                    const weather = document.querySelector("#weather span:first-child");
                    const city = document.querySelector("#weather span:last-child");
                    city.innerText = data.name;
                    weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
        });
    }
    function onGeoError() {
        alert("Can't find you. No weather for you.");
    }
    
    navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
    ```