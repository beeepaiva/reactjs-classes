import React from "react";
import "./Header.css";
import { Botao } from "./Botao";

function handleOnClick(){
  alert("Função chamada!!");
}

function handleOnChange(e){
  console.log(e.target.value);
}

function BotaoHandleClick({textDisplay, ...props}){
  const msg = textDisplay + ' - ' + props.msgAlerta;
  return (
    <button onClick={()=>{alert(textDisplay + ' - ' + textDisplay)} } >{textDisplay}</button>
  )
}

export function Header() {
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