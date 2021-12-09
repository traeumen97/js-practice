const calculator = {
    plus: function (a, b) {
        return a + b;
    },
    minus: function (a, b) {
        return a - b;
    },
    multiple: function (a, b) {
        return a * b;
    },
    divide: function (a, b) {
        return a / b;
    },
    power: function (a, b) {
        return a ** b;
    },
};

const plusResult = calculator.plus(2, 3);
const minusResult = calculator.minus(plusResult, 10);
const multipleResult = calculator.multiple(10, minusResult);
const divideResult = calculator.divide(multipleResult, plusResult);
const powerResult = calculator.power(divideResult, minusResult);

console.log(plusResult); // console 에 출력하고 싶을 떄