/* =======================================================
   Лабораторна робота №2
   Тема: Події та об'єктна модель документа (DOM)
======================================================= */

// Завдання 1.1: Вивід width картинки через elem.onclick
const pictures = document.querySelectorAll('img'); // Знаходимо всі картинки

for (let pic of pictures) {
    pic.onclick = function() {
        // Виводимо ширину при кліку
        console.log("Ширина цієї картинки: " + this.width + "px"); 
    };
}

// Завдання 1.2: Запис href в title при наведенні 
const myLinks = document.querySelectorAll('a');

function updateTitleOnHover() {
    let linkHref = this.getAttribute('href');
    this.setAttribute('title', linkHref);
    console.log("Title оновлено на: " + linkHref);
    
    // Виконуємо вимогу з презентації: використовуємо removeEventListener
    // Після першого наведення подія видаляється, щоб не перевантажувати браузер
    this.removeEventListener('mouseover', updateTitleOnHover);
}

myLinks.forEach(link => {
    link.addEventListener('mouseover', updateTitleOnHover);
});

// Завдання 1.3 та 1.4: Робота з input (об'єднано для оптимізації)
const formInputs = document.querySelectorAll('input');
const demoBlock = document.getElementById('demo');

formInputs.forEach(inputField => {
    let clickCounter = 0; // Використовуємо лічильник замість прапорців
    
    inputField.addEventListener('click', function() {
        // Логіка для Завдання 1.3 (вивід в абзац)
        if (demoBlock) {
            demoBlock.innerText = this.value;
        }
        
        // Логіка для Завдання 1.4 
        clickCounter++;
        if (clickCounter === 1) {
            console.log("ПЕРШИЙ клік по input. Значення: " + this.value);
        } else {
            alert("ПОВТОРНИЙ клік по input. Значення: " + this.value);
        }
    });
});


// Завдання 1.5: Квадрат числа, записаного словом
// Словник перетворень тексту на цифри
const wordToNumber = {
    "один": 1, "два": 2, "три": 3, 
    "чотири": 4, "п'ять": 5, "шість": 6,
    "сім": 7, "вісім": 8, "дев'ять": 9, "десять": 10
};

const numberParagraphs = document.querySelectorAll('p');

for (let i = 0; i < numberParagraphs.length; i++) {
    numberParagraphs[i].addEventListener('click', function() {
        // Очищаємо текст від пробілів і переводимо в нижній регістр
        let word = this.innerText.trim().toLowerCase(); 
        
        if (wordToNumber.hasOwnProperty(word)) {
            let numberValue = wordToNumber[word];
            this.innerText = numberValue * numberValue; // Замінюємо текст на квадрат числа
        }
    });
}

// Завдання 2: Чергування кольорів блоків <div>
const colorDivs = document.querySelectorAll('div');

// Функція фарбування в червоний
function paintRed() {
    this.style.backgroundColor = 'red';
    // Відписуємось від червоного, підписуємось на зелений
    this.removeEventListener('click', paintRed);
    this.addEventListener('click', paintGreen);
}

// Функція фарбування в зелений
function paintGreen() {
    this.style.backgroundColor = 'green';
    // Відписуємось від зеленого, підписуємось на червоний
    this.removeEventListener('click', paintGreen);
    this.addEventListener('click', paintRed);
}

// Ініціалізуємо початковий стан (всі div чекають на клік, щоб стати червоними)
colorDivs.forEach(div => {
    div.addEventListener('click', paintRed);
});
