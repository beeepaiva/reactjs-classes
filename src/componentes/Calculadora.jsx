import React, { useState } from 'react';
import '../App.css'

export function Calculadora(){

    const [input1, setInput1] = useState(null)
    const [input2, setInput2] = useState(null)
    const [resultado, setResultado] = useState(null)

    const adicao = () => {
        setResultado(parseFloat(input1) + parseFloat(input2))
    }
    const subtracao = () => {
        setResultado(parseFloat(input1) - parseFloat(input2))
    }
    const multi = () => {
        setResultado(parseFloat(input1) * parseFloat(input2))
    }
    const divisao = () => {
        if(parseFloat(input2) === 0){
            alert("Impossível realizar divisão por 0!")
            setResultado(null)
        }else{
            setResultado(Number(parseFloat(input1) / parseFloat(input2)))
        }
    }
    const raiz = () => {
        setResultado(Math.sqrt(parseFloat(input1)))
    }
    const expo = () => {
        setResultado(parseFloat(input1) ** parseFloat(input2))
    }


  return (
    <div className='calculadora'>
      <h2>Calculadora</h2>
      <p>Caso queria calcular Raiz Quadrada, digite somente o valor 1!</p>
      <p>Caso queria calcular Exponenciação, digite somente o valor 1 sendo o número e o valor 2 sendo o expoente!</p>
      <table>
        <tbody>
        <tr>
            <td>Valor 1:</td>
            <td>Valor 2:</td>
        </tr>
            <tr> 
                <td><input
                        type="number"
                        placeholder="Valor 1"
                        value={input1}
                        onChange={(e) => setInput1(e.target.value)}/>
            </td>
            <td>
            <input
                type="number"
                placeholder="Valor 2"
                value={input2}
                onChange={(e) => setInput2(e.target.value)}
            />
            </td>
            </tr>
            </tbody>
      </table>
      <div className="operacoes">
      <button onClick={adicao}>Adição</button>
      <button onClick={subtracao}>Subtração</button>
      <button onClick={multi}>Multiplicação</button>
      <button onClick={divisao}>Divisão</button>
      <button onClick={raiz}>Raiz Quadrada</button>
      <button onClick={expo}>Exponenciação</button>
      </div>
      <div className="operacoes">
        <button onClick={()=>{setInput1(0); setInput2(0); setResultado(null)}}>Zerar</button>
      </div>
      <p>O resultado é: {resultado}</p>

       
    </div>
  );
};
