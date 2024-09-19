import { useState } from 'react'
import './App.css'
import Contato from './pages/Contato'
import Home from './pages/Home'
import Pagi1 from './pages/Pagi1'
import Render from './pages/Render'

function App() {
  const [pagina, setPagina] = useState(<Contato/>)

  // function mostrarHome(){
  //   setPagina (<Home/>)
  // }
  return(
    <>
     <nav>
      {/*<button onClick={mostrarHome} >Home</button>
      Linha abaixo resume todo o esqueminha de cima*/}

      <button onClick={() => {setPagina(<Contato/> )}} >Contato</button>
      <button onClick={() => {setPagina(<Home/>)}}>Home</button>
      <button onClick={() => {setPagina(<Pagi1/>)}}>Pagi1</button>
      <button onClick={()=> {setPagina(<Render/>)}}>Render</button>
     </nav>
     {pagina}

    </>
  )
}

export default App
