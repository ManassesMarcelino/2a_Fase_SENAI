import React, { useState } from 'react'


function Desconto(){
  const [valorCompra, setValorCompra] = useState('')
  const [precoVenda, setPrecoVenda] = useState(null)

  const calcularPrecoVenda = (valor) => {
    let lucro
    if (valor < 20.00) {
      lucro = 0.45
    } else {
      lucro = 0.30
    }
    return valor * (1 + lucro)
  }

  const handleCalcular = () => {
    const valor = parseFloat(valorCompra)
    if (isNaN(valor)) {
      alert("Por favor, insira um valor válido.")
      return
    }
    const resultado = calcularPrecoVenda(valor)
    setPrecoVenda(resultado.toFixed(2))
  }

  return (
    <div className="App">
      <h1>Calcular o lucro da Venda de Venda</h1>
     <div>
        <label>
          Valor de Compra: 
          <input
            type="number"
            step="0.01"
            value={valorCompra}
            onChange={(e) => setValorCompra(e.target.value)}
          />
        </label>
        <button onClick={handleCalcular}>Calcular o de Venda</button>
      </div>
      {precoVenda !== null && (
        <div>
          <h2>Valor de Venda: R$ {precoVenda}</h2>
        </div>
      )}
    </div>
  )
}

export default Desconto