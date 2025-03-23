import React, { useState } from 'react';

export function CalculadoraIMC(){

  const [peso, setPeso] = useState(0); 
  const [altura, setAltura] = useState(0); 
  const [imc, setImc] = useState(0.0);
  const [tipo, setTipo] = useState('');


  const calcular = () => {
    let altura2 = parseFloat(altura) * parseFloat(altura)
    const valorIMC = parseFloat(peso) / altura2;
    
    if (valorIMC < 18.5) {
      setTipo('Abaixo do peso');
    } else if (valorIMC >= 18.5 && valorIMC <= 24.9) {
      setTipo('Peso normal');
    } else if (valorIMC >= 25 && valorIMC <= 29.9) {
      setTipo('Sobrepeso');
    } else {
      setTipo('Obesidade');
    }
    setImc(valorIMC.toFixed(2));
  };

  return (
    <div className='calculadoraIMC'>
      <h1>Calculadora de IMC</h1>
      <table>
        <tbody>
          <tr>
              <td style={{textAlign: 'center'}}>Peso (kg)</td>
              <td style={{textAlign: 'center'}}>Altura (m)</td>
          </tr>
          <tr> 
            <td>
              <input style={{textAlign: 'center'}}
                    type="number"
                    placeholder="Peso (kg)"
                    value={peso}
                    onChange={(e) => setPeso(e.target.value)}/>
            </td>
            <td>
              <input style={{textAlign: 'center'}}
                  type="number"
                  placeholder="Altura (m)"
                  value={altura}
                  onChange={(e) => setAltura(e.target.value)}
              />
              </td>
            </tr>
        </tbody>
      </table>
      <button onClick={calcular} style={{marginTop: '15px', marginBottom: '15px'}}>Calcular IMC</button>
        {imc > 0 ?
            <div>
            <p style={{textAlign: 'center'}}>Categoria: {tipo}</p>
            <h2>Resultado do IMC: {imc}</h2>
            </div>
            :
            <h5>Calcule agora! :)</h5>
        }
    </div>
  );
};
