import React, { useState } from 'react'

function Copo() {
    const [numero, setNumero] = useState('')
    const [resultado, setResultado] = useState('')

    function verificador() {
        const num = parseFloat(numero)

        if (num > 0) {
            setResultado("Número positivo")
        } else if (num < 0) {
            setResultado("Número negativo")
        } else {
            setResultado("Número nulo")
        }
    }

    return (
        <div>
            <h1>Verificador de Números</h1>
            <input
                type="number"
                value={numero}
                onChange={(e) => setNumero(e.target.value)}
                placeholder="Digite um número"
            />
            <button onClick={verificador}>Verificar</button>
            <p>{resultado}</p>
        </div>
    );
}

export default Copo
