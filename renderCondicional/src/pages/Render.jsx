import { useState } from "react"
import PainelAdm from "../components/PainelAdm"
import ProdutosParaMaiores from "../components/ProdutosParaMaiores"
import UsuarioLogar from "../components/UsuarioLogar"
import Login from "../components/Login"
import './Render.css'

function Render() {
    const [adm, setAdm] = useState(true)
    const [idade, setIdade] = useState(0)
    const [usuario, setUsuario] = useState(false)
    return (
        <div>
            <h1>Renderizações Condicionais</h1>
            <div className="render-container">
                <button onClick={() => {setAdm(true)}}>Adm</button>
                <button onClick={() => {setAdm(false)}}>Usuário</button>
                {adm && <PainelAdm/>}
            </div>
              
             <div className="render-container">
                <h2>Qual sua idade??</h2>
                <button onClick={()=>{setIdade(idade-1)}}>-</button>
                {idade}
                <button onClick={()=>{setIdade(idade+1)}}>+</button>
                {idade>=18 && <ProdutosParaMaiores/>}
             </div>
               
            <div className="render-container">
              <button onClick={() => {setUsuario(true)}}>Logar</button>
              <button onClick={() => {setUsuario(false)}}>DesLogar</button>
              { usuario ? <UsuarioLogar/> : <Login/>}
            </div>
        
            
        </div>
    )
}

export default Render