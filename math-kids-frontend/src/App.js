import React, { useState } from 'react';
import Lottie from 'react-lottie';
import unicornioAnimation from './images/unicornio1.json'; // Importa la animación
import './App.css'; // Asumiendo que tienes un archivo de estilos llamado App.css
import SumaResta from './components/SumaResta'; // Importando el componente que creamos

function App() {
  // Este estado manejará el juego que el usuario ha seleccionado
  const [juegoSeleccionado, setJuegoSeleccionado] = useState(null);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: unicornioAnimation,
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
        {juegoSeleccionado === 'sumaResta' && (
          <div className="game-container">
            <Lottie 
              options={defaultOptions}
              height={300} // Puedes ajustar este valor
              width={300} // Puedes ajustar este valor
            />
            <SumaResta />
          </div>
        )}
        {/* Si añades más juegos, solo necesitas agregar condiciones similares aquí */}
      </section>

      <footer className="app-footer">
        © 2023 Juegos Matemáticos para Niños
      </footer>
      
    </div>
  );
}

export default App;


