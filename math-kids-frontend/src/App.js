import React, { useState } from 'react';
import './App.css'; // Asumiendo que tienes un archivo de estilos llamado App.css
import SumaResta from './components/SumaResta'; // Importando el componente que creamos

function App() {
  // Este estado manejará el juego que el usuario ha seleccionado
  const [juegoSeleccionado, setJuegoSeleccionado] = useState(null);

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
        {juegoSeleccionado === 'sumaResta' && <SumaResta />}
        {/* Si añades más juegos, solo necesitas agregar condiciones similares aquí */}
      </section>

      <footer className="app-footer">
        © 2023 Juegos Matemáticos para Niños
      </footer>
      
    </div>
  );
}

export default App;


