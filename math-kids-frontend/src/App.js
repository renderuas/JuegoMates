import React, { useState } from 'react';
import './App.css';
import Lottie from 'react-lottie';
import SumaResta from './components/SumaResta';
import unicornio1 from './images/unicornio1.json';
import correcto from './images/correcto.json';

function App() {
    const [juegoSeleccionado, setJuegoSeleccionado] = useState(null);
    const [respuestaCorrecta, setRespuestaCorrecta] = useState(false); // Nuevo estado

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: respuestaCorrecta ? correcto : unicornio1, // Cambia según el estado
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };

    return (
        <div className="app">
            <header className="app-header">
                <h1>¡Juego de Matemáticas para Niños!</h1>
            </header>

            <section className="selection-section">
                <h2>Elige un juego</h2>
                <button 
                    className="game-button" 
                    onClick={() => setJuegoSeleccionado('sumaResta')}
                >
                    Sumas y Restas
                </button>
            </section>

            <section className="game-content">
                <Lottie 
                    options={defaultOptions}
                    height={400}
                    width={400}
                />
                {juegoSeleccionado === 'sumaResta' && <SumaResta setRespuestaCorrecta={setRespuestaCorrecta} />} 
            </section>

            <footer className="app-footer">
                © 2023 Juegos Matemáticos para Niños
            </footer>
        </div>
    );
}

export default App;
