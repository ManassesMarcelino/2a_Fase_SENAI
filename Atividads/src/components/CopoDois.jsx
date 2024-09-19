import React, { useState } from 'react'

function CopoDois() {
    const [numero, setNumero] = useState('')
    const [resultado, setResultado] = useState('')

    const verificador = () => {
        const num = parseInt(numero, 10) 

        if (isNaN(num)) {
            setResultado('Por favor, digite um número válido.')
            return;
        }

        let mensagem = ''

        if (num > 0) {
            mensagem += 'Número Positivo. '
            if (num % 2 === 0) {
                mensagem += 'Número Par.'
            } else {
                mensagem += 'Número Ímpar.'
            }
        } else if (num < 0) {
            mensagem = 'Número Negativo.'
        } else {
            mensagem = 'Número Nulo.'
        }

        setResultado(mensagem); 
    }

    return (
        <div>
            <h1>Copo Meio Cheio</h1>
            <input
                type="number"
                value={numero}
                onChange={(e) => setNumero(e.target.value)}
                placeholder='Digite um número'
            />
            <button onClick={verificador}>Verificar</button>
            <p>{resultado}</p>
        </div>
    );
}

export default CopoDois
