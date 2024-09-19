import React from 'react'
import { useState } from 'react'

function Garcom() {
  const [salario, setSalario] = useState('')
  const [emprestimo, setEmprestimo] = useState('')
  const [parcelas, setParcela] = useState('')
  const [resultado, setReusltado] = useState('')

  function analise(){
    let valorMaximoPrestação = salario * 0.3
    let valorParcelas = emprestimo / parcelas

    if (parcelas < valorMaximoPrestação){
      setReusltado('Emprestimo aprovado')

      let infoAnalise = {
        situacao: "Emprestimo aprovado"
        maxParcelas: valorMaximoPrestação
        maxParcelas: valorParcelas


      }
    }
  }


  return (

    <div>
      
    </div>
  )
}

export default Garcom