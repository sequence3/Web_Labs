const express = require('express');
const path = require('path');
const app = express();

// Дозволяємо серверу віддавати статичні файли (CSS, JS)
app.use(express.static(__dirname));

// Роут для головної сторінки
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Роут для сторінки з грою
app.get('/game', (req, res) => {
    res.sendFile(path.join(__dirname, 'game.html'));
});

app.listen(3000, () => console.log('Сервер працює: http://localhost:3000'));