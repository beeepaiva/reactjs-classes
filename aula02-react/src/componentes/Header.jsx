import React, { useState } from "react";
import "./Header.css";
import { Botao } from "./Botao";

function handleOnClick(){
  alert("Função chamada!!");
}



function BotaoHandleClick({textDisplay, ...other}){
  const msg = textDisplay + ' - ' + other.msgAlerta;
  return (
    <button onClick={()=>{alert(textDisplay + ' - ' + textDisplay)} } >{textDisplay}</button>
  )
}

export function Header({chamada, ...props}) {

  const [inputHeader, setInputHeader] = useState('');

  function handleOnChange(e){
    setInputHeader(e.target.value);
    chamada(e.target.value);
    console.log(e.target.value);
  }

    return(
  <div>
    <header className="header">
      <h1 className="heading">Aula 02 - Componentes</h1>
      <nav className="nav">
        <input onChange={handleOnChange}></input>
        <button className="nav-button" onClick={()=>{console.log("Botao clicado")}}>Página Inicial</button>
        <button className="nav-button" onClick={handleOnClick}>Curso</button>
        <button className="nav-button" onMouseLeave={()=>{console.log("On Mouse Leave")}}>Professores</button>
        <BotaoHandleClick textDisplay="Botao 1" msgAlerta="Mensagem passada"/>
        <Botao color="pink" textDisplay="xpto"/>
      </nav>
    </header>
  </div>
);

}