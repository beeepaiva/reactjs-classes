import './App.css'
import {Header} from './componentes/Header.jsx'
import { Botao } from './componentes/Botao.jsx';
import { useState } from 'react';
import { ListaItens } from './componentes/ListaItens.jsx';

function App() {

const curso = "tads";
const number = 1;
const arrNumerico = [1,2,3,4,5];
const arrAulas = [{id: 1, nome:"aula 1"}, {id:2, nome: "aula 2"}];
const objCurso = {nome: "BCC", detalhes: "Ciência da computação"};

function handleClickSoma(){
  setValor(valor+1);
}


const [valor, setValor] = useState(0);
const [textoBusca, setTextoBusca] = useState("");
const [valorFilho, setValorFilho] = useState('');

const [temaEscuro, setTemaEscuro] = useState(false);

function recebeValor(texto){
  if(texto===''){
    setValorFilho("Vazio");
  }else{
    setValorFilho(texto);
  }
  
}

function mudarTema(){
  setTemaEscuro(!temaEscuro);
}


  return (
  <div className= {temaEscuro ? 'App' : 'AppLight'}>
  <Header chamada={recebeValor}/>
  <p>{valorFilho}</p>
  <br/><br/>
    <p>{valor}</p>
    <button onClick={handleClickSoma}> Incrementar +1</button>
    <button onClick={()=> setValor(valor-1)}> Decrementar -1</button>
    <br/>
    <input onChange={(e)=>setTextoBusca(e.target.value)}/>
    <p>{textoBusca}</p>
    <br/><br/>

    <button onClick={mudarTema}> {temaEscuro ? "Mudar para tema claro" : "Mudar para tema escuro"}</button>
  </div>
  )
}

export default App
