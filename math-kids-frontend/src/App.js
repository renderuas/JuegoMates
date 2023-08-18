import React, { useState } from 'react';
import Lottie from 'react-lottie';
import './App.css';
import SumaResta from './components/SumaResta';
import unicornio from './images/unicornio1.json';
import correcto from './images/correcto.json';
import mal from './images/bad.json';


function App() {
  const [juegoSeleccionado, setJuegoSeleccionado] = useState(null);
  const [respuestaCorrecta, setRespuestaCorrecta] = useState(null); // null: sin respuesta, true: respuesta correcta, false: respuesta incorrecta

  const animaciones = {
    unicornio: unicornio,
    correcto: correcto,
    mal: mal
  };

  let animacionActual = animaciones.unicornio;
  if (respuestaCorrecta === true) {
    animacionActual = animaciones.correcto;
  } else if (respuestaCorrecta === false) {
    animacionActual = animaciones.mal;
  }

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animacionActual,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
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
        {/* Puedes agregar más botones para otros juegos aquí */}
      </section>

      <section className="game-content">
        <Lottie options={defaultOptions} height={400} width={400} />
        {juegoSeleccionado === 'sumaResta' && <SumaResta setRespuestaCorrecta={setRespuestaCorrecta} />}
      </section>

      <footer className="app-footer">
        © 2023 Juegos Matemáticos para Niños
      </footer>
    </div>
  );
}

export default App;
