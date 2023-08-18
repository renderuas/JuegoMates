import React, { useState } from 'react';

function SumaResta(props) {
    const [numero1, setNumero1] = useState(generarNumeroAleatorio());
    const [numero2, setNumero2] = useState(generarNumeroAleatorio());
    const [respuesta, setRespuesta] = useState('');
    const [resultado, setResultado] = useState(null);

    function generarNumeroAleatorio() {
        return Math.floor(Math.random() * 10); // generará números del 0 al 9
    }

    function verificarRespuesta() {
        const esCorrecto = (numero1 + numero2) === parseInt(respuesta);
        
        if (esCorrecto) {
            setResultado('¡Correcto!');
            props.setRespuestaCorrecta(true); // Aquí notificamos a App.js si la respuesta es correcta
        } else {
            setResultado('Inténtalo de nuevo.');
            props.setRespuestaCorrecta(false); // Aquí notificamos a App.js si la respuesta es incorrecta
        }

        setNumero1(generarNumeroAleatorio());
        setNumero2(generarNumeroAleatorio());
        setRespuesta('');
    }

    return (
        <div>
            <h2>¿Cuánto es {numero1} + {numero2}?</h2>
            <input
                type="number"
                value={respuesta}
                onChange={(e) => setRespuesta(e.target.value)}
            />
            <button onClick={verificarRespuesta}>Verificar</button>
            {resultado && <p>{resultado}</p>}
        </div>
    );
}

export default SumaResta;
