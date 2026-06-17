$(document).ready(function () {
    let currentNumber = 1;
    let timer;
    let timeLeft = 60;
    let gameCount = 0;
    let stats = [];

    // 5 варіантів розміру шрифту за ТЗ
    const sizes = ['16px', '22px', '28px', '34px', '40px'];

    // Генерація довільного кольору
    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    function initGame() {
        clearInterval(timer);
        currentNumber = 1;
        timeLeft = 60;
        $('#timer').text(timeLeft);
        $('#game-board').empty();

        // Масив від 1 до 20 і його перемішування
        let numbers = Array.from({ length: 20 }, (_, i) => i + 1);
        numbers.sort(() => Math.random() - 0.5);

        // Створення клітинок на полі
        numbers.forEach(num => {
            let cell = $('<div></div>')
                .addClass('cell')
                .text(num)
                .css({
                    'color': getRandomColor(),
                    'font-size': sizes[Math.floor(Math.random() * sizes.length)]
                });
            $('#game-board').append(cell);
        });

        // Запуск таймера відліку часу
        timer = setInterval(function () {
            timeLeft--;
            $('#timer').text(timeLeft);
            if (timeLeft <= 0) {
                clearInterval(timer);
                alert("Час вийшов! Ви програли.");
                initGame();
            }
        }, 1000);
    }

    // Обробка кліку по цифрі
    $('#game-board').on('click', '.cell', function () {
        if ($(this).hasClass('highlight')) return;

        let num = parseInt($(this).text());
        if (num === currentNumber) {
            $(this).addClass('highlight'); // Підсвічуємо правильну цифру
            currentNumber++;

            // Успішне завершення гри
            if (currentNumber > 20) {
                clearInterval(timer);
                let timeSpent = 60 - timeLeft;
                alert("Вітаємо! Ви успішно пройшли гру!");
                saveStats(timeSpent);
                initGame(); // Гра починається спочатку
            }
        } else {
            alert("Не вірна цифра"); // Повідомлення про помилку
        }
    });

    // Кнопка перезапуску
    $('#restart-btn').click(function () {
        initGame();
    });

    // Збереження і вивід статистики
    function saveStats(time) {
        gameCount++;
        stats.push({ game: gameCount, time: time });

        // Шукаємо найкращий час
        let bestTime = Math.min(...stats.map(s => s.time));

        $('#stats-body').empty();
        stats.forEach(s => {
            let row = $('<tr></tr>').append(
                $('<td></td>').text('Гра ' + s.game),
                $('<td></td>').text(s.time + ' с.')
            );
            if (s.time === bestTime) {
                row.addClass('best-score'); // Підсвічуємо кращий результат
            }
            $('#stats-body').append(row);
        });
    }

    // Запускаємо першу партію при завантаженні
    initGame();
});