import React, { useState } from 'react';
import { Cards } from './Cards.jsx';
import './ClimaTempo.css'

export function ClimaTempo() {

  const [cidade, setCidade] = useState([
    { cidade: 'São Paulo', maxTemp: 30, minTemp: 20, description: 'Ensolarado', tempAtual: 24},
    { cidade: 'Rio de Janeiro', maxTemp: 32, minTemp: 22, description: 'Parcialmente nublado', tempAtual: 20 },
    { cidade: 'Curitiba', maxTemp: 25, minTemp: 15, description: 'Chuvoso', tempAtual: 15 },
    { cidade: 'Fortaleza', maxTemp: 33, minTemp: 24, description: 'Ensolarado', tempAtual: 32 },
  ]);

  const [novaCidade, setNovaCidade] = useState({
    cidade: '',
    maxTemp: '',
    minTemp: '',
    description: '',
    tempAtual: ''
  });

  // Obter a data atual
  const today = new Date().toLocaleDateString();

  return (
    <div className='climaTempo'>
      
    </div>
  );
}