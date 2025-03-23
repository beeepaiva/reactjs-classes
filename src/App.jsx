import React, { useState } from 'react';
import './App.css';
/* Import dos nossos componentes */
import { Header } from './componentes/Header.jsx';
import {Footer} from './componentes/Footer.jsx';
import { CalculadoraIMC } from './componentes/CalculadoraIMC.jsx';
import { Calculadora } from './componentes/Calculadora.jsx';
import { ClimaTempo } from './componentes/ClimaTempo.jsx';

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
