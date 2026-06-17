// Завдання 1: Форматування поточної дати та часу
function formatDateTime() {
    const d = new Date();
    const timeStr = d.toLocaleTimeString('uk-UA', { hour12: false });

    const days = ['неділя', 'понеділок', 'вівторок', 'середа', 'четвер', 'п\'ятниця', 'субота'];
    const months = ['січня', 'лютого', 'березня', 'квітня', 'травня', 'червня', 'липня', 'серпня', 'вересня', 'жовтня', 'листопада', 'грудня'];

    const dayOfWeek = days[d.getDay()];
    const dayNum = String(d.getDate()).padStart(2, '0');
    const monthName = months[d.getMonth()];
    const yearNum = d.getFullYear();

    const resultString = `${timeStr}, ${dayOfWeek} , ${dayNum} ${monthName} ${yearNum} року`;

    console.log("Результат Завдання 1:");
    console.log(resultString);
    alert(resultString);
}


// Завдання 2: Гра "Вгадай число"
function playGuessingGame() {
    let playAgain = true;

    while (playAgain) {
        const hiddenNumber = Math.floor(Math.random() * 51);
        let attemptsCount = 0;
        let isWinner = false;

        console.log("--- НОВА ГРА ---");

        while (!isWinner) {
            const userInput = prompt("Вгадайте число від 0 до 50:");

            if (userInput === null) {
                console.log("Гру скасовано.");
                break;
            }

            const guess = Number(userInput);

            if (!Number.isInteger(guess) || guess < 0 || guess > 50) {
                alert("Помилка! Потрібно ввести ціле число від 0 до 50.");
                continue;
            }

            attemptsCount++;

            const now = new Date();
            const dateLog = `${String(now.getDate()).padStart(2, '0')}.${String(now.getMonth() + 1).padStart(2, '0')}.${now.getFullYear()}`;
            const timeLog = now.toLocaleTimeString('uk-UA', { hour12: false });

            const logPrefix = `${dateLog} ${timeLog} Спроба ${attemptsCount}: число ${guess} –`;

            if (guess === hiddenNumber) {
                isWinner = true;
                console.log(`${logPrefix} вірно`);
                alert(`За ${attemptsCount} спроб ви вгадали число ${hiddenNumber}`);
            } else {
                console.log(`${logPrefix} не вірно`);

                const diff = Math.abs(hiddenNumber - guess);
                let status = "";

                if (diff <= 3) status = "гаряче";
                else if (diff <= 10) status = "тепло";
                else status = "холодно";

                alert(`Мимо! Підказка: ${status}`);
            }
        }

        playAgain = confirm("Спробувати ще раз зіграти в гру?");
    }
}