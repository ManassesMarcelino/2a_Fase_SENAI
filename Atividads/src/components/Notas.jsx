import React, { useState } from 'react'

function Notas() {
  const [nota1, setNota1] = useState('')
  const [nota2, setNota2] = useState('')
  const [media, setMedia] = useState(null)
  const [conceito, setConceito] = useState('')

  const calcularMedia = () => {
    const n1 = parseFloat(nota1);
    const n2 = parseFloat(nota2);

    if (isNaN(n1) || isNaN(n2)) {
      alert("Por favor, insira notas válidas.")
      return
    }

    const mediaCalculada = (n1 + n2) / 2;
    setMedia(mediaCalculada);
    setConceito(obterConceito(mediaCalculada))
  }

  const obterConceito = (media) => {
    if (media > 9.0 && media <= 10.0) return 'A'
    if (media > 7.5 && media <= 9.0) return 'B'
    if (media > 6.0 && media <= 7.5) return 'C'
    if (media > 4.0 && media <= 6.0) return 'D'
    return 'E'
  }

  return (
    <div className="App">
      <h1>Calculadora de Notas e Conceitos</h1>
      <div>
        <label>
          Nota 1:
          <input
            type="number"
            step="0.1"
            value={nota1}
            onChange={(e) => setNota1(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Nota 2
          <input
            type="number"
            step="0.1"
            value={nota2}
            onChange={(e) => setNota2(e.target.value)}
          />
        </label>
      </div>
      <button onClick={calcularMedia}>Calcular</button>
      {media !== null && (
        <div>
          <h2>Relatório</h2>
          <p>Nota 1: {nota1}</p>
          <p>Nota 2: {nota2}</p>
          <p>Média: {media.toFixed(2)}</p>
          <p>Conceito: {conceito}</p>
        </div>
      )}
    </div>
  )
}

export default Notas