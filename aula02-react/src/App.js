import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
/* Import dos nossos componentes */
import { Header } from './components/Header.jsx';
import {Footer} from './components/Footer.jsx';
import { CalculadoraIMC } from './components/CalculadoraIMC.jsx';
import { Calculadora } from './components/Calculadora.jsx';
import { ClimaTempo } from './components/ClimaTempo.jsx';

function App() {

const [exercicio, setExercicio] = useState('')
const [temaEscuro, setTemaEscuro] = useState(false)


function mudarTema(){
  setTemaEscuro(!temaEscuro);
}
function voltarInicio(){
  setExercicio(null)
}

  return (
    <div className={temaEscuro ? 'App' : 'AppLight'}>
      <Header class={temaEscuro ? 'headerDark' : 'headerLight'} tema={mudarTema} action={voltarInicio}/>

      <div className="buttonHall">
      <button onClick={()=>setExercicio('1')}>Exercício 1</button>
      <button onClick={()=>setExercicio('2')}>Exercício 2</button>
      <button onClick={()=>setExercicio('3')}>Exercício 3</button>
      </div>
      <div className='exercicio'>
        {exercicio==='1' ? <Calculadora/> : <></>}
        {exercicio==='2' ? <CalculadoraIMC/> : <></>}
        {exercicio==='3' ? <ClimaTempo/> : <></>}
      </div>
    <Footer class={temaEscuro ? 'footerDark' : 'footerLight'}/>
    </div>

  );
}

export default App;
