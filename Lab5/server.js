const express = require('express');
const app = express();

app.use(express.json());
app.use(express.static('.'));

app.post('/calculate', (req, res) => {
    const num = req.body.number;
    res.json({ result: num * num });
});

app.listen(3000, () => console.log('Сервер запущено: http://localhost:3000'));