// 1. Функція повертає залишок від ділення числа total на 60
function seconds(total) {
    return total % 60;
}

// 2. Функція підрахунку периметра багатокутника
function perimeter(side, count) {
    return side * count;
}

// 3. Виведення послідовності FizzBuzz до числа n
function fizzBuzz(n) {
    for (let i = 1; i <= n; i++) {
        let output = "";
        if (i % 3 === 0) output += "fizz";
        if (i % 5 === 0) output += "buzz";
        console.log(output || i);
    }
}

// 4. Обчислення середнього арифметичного трьох параметрів
function Calculate(a, b, c) {
    let avg = (a + b + c) / 3;
    console.log(avg);
    return avg;
}

// 5. Перевірка подільності числа n на x та y
const isDivisible = {
    withIf: (n, x, y) => {
        if (n % x === 0 && n % y === 0) return true;
        return false;
    },
    withTernary: (n, x, y) => (n % x === 0 && n % y === 0) ? true : false,
    directLogic: (n, x, y) => !(n % x || n % y)
};

// 6. Обробка одновимірного масиву (пошук min, max, суми, avg та непарних)
function processArray(n) {
    let arr = [];
    for (let i = 0; i < n; i++) arr.push(Math.round(Math.random() * 100));
    
    let min = arr[0], max = arr[0], sum = 0, odds = [];
    for (let val of arr) {
        if (val < min) min = val;
        if (val > max) max = val;
        sum += val;
        if (val % 2 !== 0) odds.push(val);
    }
    return { min, max, sum, avg: sum / n, odds };
}

// 7. Робота з матрицею 5х5 (модифікація діагоналі)
function modifyMatrix() {
    let matrix = Array.from({ length: 5 }, () => Array.from({ length: 5 }, () => Math.round(Math.random() * 20) - 10));
    for (let i = 0; i < 5; i++) {
        if (matrix[i][i] < 0) matrix[i][i] = 0;
        else if (matrix[i][i] > 0) matrix[i][i] = 1;
    }
    return matrix;
}

// 8. Арифметичні операції з перевіркою ділення на нуль
const arithmetic = {
    Add: (a, b) => a + b,
    Sub: (a, b) => a - b,
    Mul: (a, b) => a * b,
    Div: (a, b) => (b === 0) ? "Error: Division by zero" : a / b
};

// 9. Аналіз властивостей числа
function checkNumber(n) {
    let result = {
        isPositive: n >= 0,
        isPrime: n > 1,
        divisors: []
    };
    for (let i = 2; i * i <= n; i++) {
        if (n % i === 0) result.isPrime = false;
    }
    [2, 5, 3, 6, 9].forEach(d => { if (n % d === 0) result.divisors.push(d); });
    return result;
}

// 10. Інверсія масиву та піднесення чисел до квадрата
function reverseAndSquare(arr) {
    let result = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        let el = arr[i];
        result.push(typeof el === 'number' ? el * el : el);
    }
    return result;
}

// 11. Видалення дублікатів з масиву
function removeDuplicates(arr) {
    let result = [];
    let seen = {};
    for (let val of arr) {
        if (!seen[val]) {
            result.push(val);
            seen[val] = true;
        }
    }
    return result;
}
