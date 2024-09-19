import { useState } from "react"


function Media(){
    const [resultado, setResultado] = useState()
    function calcularMedia(){
        let nota1 = Number(prompt("Digite o 1° numero: "))
        let nota2 = Number(prompt("Digite o 2° numero: "))
        let media = (nota1 + nota2)/2
        setResultado(media)
    }

return (
        
    <div className="Media">
    <h2>Exercício para calcular média de 2 números</h2>
    <button onClick={calcularMedia}>Calcular</button>

    <div>
    Media:{resultado}

    </div>
    </div>
    )
}

export default Media