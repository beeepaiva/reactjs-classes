import React from "react";
import "./Header.css";
import { Botao } from "./Botao";

export function Header() {
    return(
  <div>
    <header className="header">
      <h1 className="heading">Aula 02 - Componentes</h1>
      <nav className="nav">
        <button className="nav-button">Página Inicial</button>
        <button className="nav-button">Curso</button>
        <button className="nav-button">Professores</button>
        <Botao color="pink" textDisplay="xpto"/>
      </nav>
    </header>
  </div>
);

}