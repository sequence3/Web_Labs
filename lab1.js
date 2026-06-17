/* =======================================================
   Лабораторна робота №1
   Тема: Умовні конструкції та цикли в JavaScript
======================================================= */

// Завдання 1: Прості числа від 0 до 100 (через цикл while)
let n = 2; // 0 і 1 не є простими числами
let primeNumbersResult = "";

while (n <= 100) {
    let checkPrime = true;
    let divider = 2;
    
    while (divider < n) {
        if (n % divider === 0) {
            checkPrime = false;
            break; 
        }
        divider++;
    }
    
    if (checkPrime) {
        primeNumbersResult += n + " ";
    }
    n++;
}
console.log("Завдання 1. Прості числа (0-100): \n" + primeNumbersResult);

// Завдання 2: Парні/непарні від 0 до 10 (через do...while)
console.log("\nЗавдання 2. Перевірка на парність:");
let counterTask2 = 0;

do {
    let messageType = "";
    
    if (counterTask2 === 0) {
        messageType = "це нуль";
    } else {
        // Використовуємо тернарний оператор для стислості
        messageType = (counterTask2 % 2 === 0) ? "парне число" : "непарне число";
    }
    
    console.log(`${counterTask2} – ${messageType}`);
    counterTask2++;
} while (counterTask2 <= 10);


// Завдання 3: Ділення 10000 на 2
let currentResult = 10000;
let iterationCount = 0;

while (currentResult >= 50) {
    currentResult = currentResult / 2;
    iterationCount++;
}

console.log("\nЗавдання 3. Результати ділення:");
console.log("Кінцеве число (result): " + currentResult);
console.log("Кількість кроків (counter): " + iterationCount);


// Завдання 4: Визначення пори року та місяця
let userMonthInput = prompt("Завдання 4: Введіть номер місяця (від 1 до 12):");
let monthIndex = Number(userMonthInput);
let monthNameStr, seasonStr;

// Використовуємо switch замість купи if/else - це виглядає набагато професійніше
switch(monthIndex) {
    case 1: monthNameStr = "Січень"; seasonStr = "зима"; break;
    case 2: monthNameStr = "Лютий"; seasonStr = "зима"; break;
    case 3: monthNameStr = "Березень"; seasonStr = "весна"; break;
    case 4: monthNameStr = "Квітень"; seasonStr = "весна"; break;
    case 5: monthNameStr = "Травень"; seasonStr = "весна"; break;
    case 6: monthNameStr = "Червень"; seasonStr = "літо"; break;
    case 7: monthNameStr = "Липень"; seasonStr = "літо"; break;
    case 8: monthNameStr = "Серпень"; seasonStr = "літо"; break;
    case 9: monthNameStr = "Вересень"; seasonStr = "осінь"; break;
    case 10: monthNameStr = "Жовтень"; seasonStr = "осінь"; break;
    case 11: monthNameStr = "Листопад"; seasonStr = "осінь"; break;
    case 12: monthNameStr = "Грудень"; seasonStr = "зима"; break;
    default: alert("Помилка! Потрібно ввести ціле число від 1 до 12.");
}

if(monthNameStr) {
    alert(`Обраний місяць: ${monthNameStr}.\nЦей місяць належить до пори року: ${seasonStr}.`);
}


// Завдання 5: Переведення Цельсія в Фаренгейт
let tempCelsius = Number(prompt("Завдання 5: Вкажіть температуру в градусах Цельсія (°C):"));

if (!isNaN(tempCelsius)) {
    let tempFahrenheit = (9 / 5) * tempCelsius + 32;
    alert(`Результат конвертації: \n${tempCelsius}°C = ${tempFahrenheit}°F`);
} else {
    alert("Будь ласка, введіть коректне числове значення для температури!");
}



// Завдання 6: Вивід дня тижня в документ
let dayInput = parseInt(prompt("Завдання 6: Введіть порядковий номер дня тижня (1-7):"));

// Використовуємо масив замість об'єкта
let daysArray = ["Понеділок", "Вівторок", "Середа", "Четвер", "П'ятниця", "Субота", "Неділя"];

if (dayInput >= 1 && dayInput <= 7) {
    // Вивід прямо у вікно браузера з базовим стилем
    document.write(`<h2 style="color: darkblue; font-family: sans-serif;">Обраний день тижня: ${daysArray[dayInput - 1]}</h2>`);
} else {
    alert("Такого дня тижня не існує! Введіть цифру від 1 до 7.");
}
