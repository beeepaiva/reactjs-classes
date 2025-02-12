import './App.css'
import {Header} from './componentes/Header.jsx'
import { Botao } from './componentes/Botao.jsx';

function App() {

const curso = "tads";
const number = 1;
const arrXPTO = [1,2,3,4,5];
const objCurso = {nome: "BCC", detalhes: "Ciência da computação"}

  return (
  <div className='App'>
  <Header />
  <h1>{objCurso.nome}</h1>
  <h2>{objCurso.detalhes}</h2>
  <Botao textDisplay="Botao 1" isDisabled />
  <Botao textDisplay="Botao 2" color="blue"/>
  <Botao textDisplay="Botao 3" color="red"/>
  <h1>botao</h1>
  <Botao textDisplay="Botao 4" isDisabled/>
  </div>
  )
}

export default App
