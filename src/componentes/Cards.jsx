import React, { useState } from 'react';
import './ClimaTempo.css'

export function Cards(props){
    
  return (
    <div className="cidade-card">
      <h3>{props.cidade}</h3>
      <p>Temperatura Máxima: {props.maxTemp}°C</p>
      <p>Temperatura Mínima: {props.minTemp}°C</p>
      <p>Clima: {props.description}</p>
      <button onClick={() => alert("A temperatura atual é de: " + props.tempAtual)}>Exibir Temperatura Atual</button>
    </div>
  )

}