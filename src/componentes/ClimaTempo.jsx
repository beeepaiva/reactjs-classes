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

  const [btnNovaCidade, setBtnNovaCidade] = useState(false)

  function handleInputChange(e){
    setNovaCidade({...novaCidade, [e.target.name]: e.target.value})
  }

  function addCidade(){
    if (novaCidade.cidade && novaCidade.maxTemp && novaCidade.minTemp && novaCidade.description && novaCidade.tempAtual) {
      setCidade([...cidade,novaCidade]);
      /*
      Ou, se houver a necessidade de trabalhar com esse dado, pode ser:
      
      setCidade([
        ...cidade,
        {
          cidade: novaCidade.cidade,
          maxTemp: parseInt(novaCidade.maxTemp),
          minTemp: parseInt(novaCidade.minTemp),
          description: novaCidade.description,
          tempAtual: parseInt(novaCidade.tempAtual)
        }
      ]);
      */
      setNovaCidade({
        cidade: '',
        maxTemp: '',
        minTemp: '',
        description: '',
        tempAtual: ''
      });
    } else {
      alert('Por favor, preencha todos os campos!');
    }
  };

  function cancelar(){
    setNovaCidade({
      cidade: '',
      maxTemp: '',
      minTemp: '',
      description: '',
      tempAtual: ''
    });
    setBtnNovaCidade(false);
  }

  // Obter a data atual
  const today = new Date().toLocaleDateString();

  return (
    <div className='climaTempo'>
      <h2>Clima das Cidades hoje: {today}</h2>
      <div className="cidades">
        {cidade.map((cidadeData, index) => (
          <Cards
            key={index}
            cidade={cidadeData.cidade}
            maxTemp={cidadeData.maxTemp}
            minTemp={cidadeData.minTemp}
            description={cidadeData.description}
            tempAtual={cidadeData.tempAtual}
          />
        ))}
      </div>
      <div>

        {btnNovaCidade ? 
        <>
          <div className="adicaoCidades">
            <input type="text" name="cidade" placeholder="Nome da cidade" value={novaCidade.cidade} onChange={handleInputChange}/>
            <input type="number" name="maxTemp" placeholder="Temperatura máxima" value={novaCidade.maxTemp} onChange={handleInputChange}/>
            <input type="number" name="minTemp" placeholder="Temperatura mínima" value={novaCidade.minTemp} onChange={handleInputChange}/>
            <input type="text" name="description" placeholder="Descrição" value={novaCidade.description} onChange={handleInputChange}/>
            <input type="number" name="tempAtual" placeholder="Temperatura atual" value={novaCidade.tempAtual} onChange={handleInputChange}/>
          </div>
          <div className="botoesAdicaoCidades">
            <button onClick={addCidade}>Adicionar</button>
            <button onClick={cancelar}>Cancelar</button>
          </div></> : 
          <div className="botoesAdicaoCidades">
            <button onClick={()=> setBtnNovaCidade(true)}>Adicionar nova cidade</button>
          </div>
        }
      </div>
    </div>
  );
}