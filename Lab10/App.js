import React from 'react';
import './App.css';

class HobbyClass extends React.Component {
    render() {
        return (
            <div style={{ padding: '20px', borderBottom: '1px solid #ccc' }}>
                <h2>Караоке та музика 🎤</h2>
                <p>У вільний час я обожнюю вмикати караоке на YouTube і просто співати. Це мій особистий спосіб перезавантажитись — такий процес неймовірно заряджає енергією і дає сили впевнено йти далі по дню.</p>
            </div>
        );
    }
}

const HobbyFunction = () => {
    return (
        <div style={{ padding: '20px' }}>
            <h2>Фотографія та зйомка 📸</h2>
            <p>Моя інша велика пристрасть — це фото та відео. За найменшої нагоди я дістаю камеру чи телефон, щоб зафіксувати момент. Мені подобається ловити цікаві деталі та зберігати спогади в кадрі.</p>
        </div>
    );
};

function App() {
    return (
        <div className="App" style={{ textAlign: 'center', marginTop: '40px', maxWidth: '600px', margin: '40px auto' }}>
            <h1>Мої захоплення на React.js</h1>
            <HobbyClass />
            <HobbyFunction />
        </div>
    );
}

export default App;