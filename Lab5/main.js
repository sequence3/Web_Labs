document.getElementById('calcBtn').addEventListener('click', async () => {
    const num = document.getElementById('numInput').value;

    const response = await fetch('/calculate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ number: num })
    });

    const data = await response.json();
    document.getElementById('result').innerText = " вадрат числа: " + data.result;
});