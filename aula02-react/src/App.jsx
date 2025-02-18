import './App.css'
import {Header} from './componentes/Header.jsx'
import { Botao } from './componentes/Botao.jsx';

function App() {

const curso = "tads";
const number = 1;
const arrNumerico = [1,2,3,4,5];
const arrAulas = [{id: 1, nome:"aula 1"}, {id:2, nome: "aula 2"}]
const objCurso = {nome: "BCC", detalhes: "Ciência da computação"}

  return (
  <div className='App'>
  <Header />
  <ul>
  {arrNumerico.map((numero) => {return<li>{numero} <button>Clique</button></li>}) }
  </ul>
  <ul>
    {arrAulas.map((aula)=> {return <li>{aula.id} - {aula.nome}</li>})}
  </ul>
  {/** 
  <h1>{objCurso.nome}</h1>
  <h2>{objCurso.detalhes}</h2>
  <Botao textDisplay="Botao 1" isDisabled />
  <Botao textDisplay="Botao 2" color="blue"/>
  <Botao textDisplay="Botao 3" color="red"/>
  <h1>botao</h1>
  <Botao textDisplay="Botao 4" isDisabled/>*/}


  </div>
  )
}

export default App
