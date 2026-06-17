// ==========================================
// Завдання 1: Багатомовне визначення дня тижня
// ==========================================

// Єдиний об'єкт, який містить всі дані для обох мов 
const appData = {
    ua: {
        askLang: 'Виберіть мову "ua" або "en"?',
        askDay: 'Введіть номер дня неділі від 1 до 7?',
        errLang: 'Помилка: введіть коректну мову (ua або en).',
        errDay: 'Помилка: номер має бути від 1 до 7.',
        days: ['Понеділок', 'Вівторок', 'Середа', 'Четвер', "П'ятниця", 'Субота', 'Неділя']
    },
    en: {
        askLang: 'Choose language "ua" or "en"?',
        askDay: 'Enter the day number of the week (from 1 to 7)?',
        errLang: 'Error: enter a valid language (ua or en).',
        errDay: 'Error: number must be between 1 and 7.',
        days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
    }
};

function task1() {
    let lang = "";
    // Цикл для вибору мови
    while (true) {
        let input = prompt(appData.ua.askLang);
        if (input === null) return;

        lang = input.toLowerCase().trim();
        if (lang === "ua" || lang === "en") break;

        alert(appData.ua.errLang); 
    }

    let dayNum = 0;
    while (true) {
        let input = prompt(appData[lang].askDay); 
        if (input === null) return;

        dayNum = parseInt(input);
        if (dayNum >= 1 && dayNum <= 7) break;

        alert(appData[lang].errDay); 
    }

    // Вивід результату у модульному вікні [cite: 85]
    alert(`Результат: ${appData[lang].days[dayNum - 1]}`);
}


// ==========================================
// Завдання 2: Електромережа міста (ООП)
// ==========================================

// Базовий клас 
class GridComponent {
    constructor(id) {
        this.id = id;
    }
    calculatePower(isDaytime) { return 0; }
}

// Електростанції: генерують 1-100 МВт цілодобово
class ThermalStation extends GridComponent {
    constructor(id, powerMW) {
        super(id);
        this.powerMW = powerMW;
    }
    calculatePower(isDaytime) { return this.powerMW; }
}

// Сонячні панелі: генерують 1-5 МВт тільки вдень
class SolarFarm extends GridComponent {
    constructor(id, maxPowerMW) {
        super(id);
        this.maxPowerMW = maxPowerMW;
    }
    calculatePower(isDaytime) { return isDaytime ? this.maxPowerMW : 0; }
}

// Житловий сектор: 1-400 квартир 
class ResidentialArea extends GridComponent {
    constructor(id, apartmentsCount) {
        super(id);
        this.apartmentsCount = apartmentsCount;
    }
    calculatePower(isDaytime) {
        // Вдень: 4 кВт, Вночі: 1 кВт. 
        const kwPerApt = isDaytime ? 4 : 1;
        const totalMW = (this.apartmentsCount * kwPerApt) / 1000;
        return -totalMW; 
    }
}

// Лінія електропередач 
class TransmissionLine {
    constructor(name, limitMW, costPerMW) {
        this.name = name;
        this.limitMW = limitMW;
        this.costPerMW = costPerMW; 
    }
}

// Система управління
class CityGrid {
    constructor() {
        this.nodes = [];
        this.lines = [];
    }
    addNode(node) { this.nodes.push(node); }
    addTransmissionLine(line) { this.lines.push(line); }

    evaluate(isDaytime) {
        let totalPower = 0;
        this.nodes.forEach(node => {
            totalPower += node.calculatePower(isDaytime);
        });

        let moneyFlow = 0;
        let powerToBalance = Math.abs(totalPower);
        let report = `Час: ${isDaytime ? 'ДЕНЬ' : 'НІЧ'}\n`;
        report += `Внутрішній баланс: ${totalPower > 0 ? '+' : ''}${totalPower.toFixed(2)} МВт\n`;

        if (totalPower > 0) {
            let sortedLines = [...this.lines].sort((a, b) => b.costPerMW - a.costPerMW);
            sortedLines.forEach(line => {
                if (powerToBalance <= 0) return;
                let exportAmount = Math.min(powerToBalance, line.limitMW);
                powerToBalance -= exportAmount;
                moneyFlow += exportAmount * line.costPerMW;
                report += `-> Продано ${exportAmount.toFixed(2)} МВт через ${line.name} (Прибуток: ${exportAmount * line.costPerMW})\n`;
            });
        } else if (totalPower < 0) {
            let sortedLines = [...this.lines].sort((a, b) => a.costPerMW - b.costPerMW);
            sortedLines.forEach(line => {
                if (powerToBalance <= 0) return;
                let importAmount = Math.min(powerToBalance, line.limitMW);
                powerToBalance -= importAmount;
                moneyFlow -= importAmount * line.costPerMW;
                report += `<- Куплено ${importAmount.toFixed(2)} МВт через ${line.name} (Витрати: ${importAmount * line.costPerMW})\n`;
            });
        }

        report += `Фінансовий результат: ${moneyFlow > 0 ? '+' : ''}${moneyFlow.toFixed(2)} грн.\n`;
        if (powerToBalance > 0) {
            report += `УВАГА! Не вистачає пропускної здатності ліній на ${powerToBalance.toFixed(2)} МВт!\n`;
        }
        return report + "-----------------------------------\n";
    }
}

// Запуск симуляції
function task2() {
    const kyivGrid = new CityGrid();

    kyivGrid.addNode(new ThermalStation("ТЕС-1", 50)); 
    kyivGrid.addNode(new SolarFarm("СЕС-1", 5)); 
    kyivGrid.addNode(new ResidentialArea("ЖК Троєщина", 400)); 
    kyivGrid.addNode(new ResidentialArea("ЖК Оболонь", 350));

    kyivGrid.addTransmissionLine(new TransmissionLine("Лінія Львів", 20, 1500));
    kyivGrid.addTransmissionLine(new TransmissionLine("Лінія Одеса", 40, 1200));

    const dayReport = kyivGrid.evaluate(true);
    const nightReport = kyivGrid.evaluate(false);

    document.getElementById('output').innerText = dayReport + nightReport;
}