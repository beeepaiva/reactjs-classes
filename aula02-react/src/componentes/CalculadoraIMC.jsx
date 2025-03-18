import React, { useState } from 'react';

export function CalculadoraIMC(){

  const [peso, setPeso] = useState(0); 
  const [altura, setAltura] = useState(0); 
  const [imc, setImc] = useState(0.0);
  const [tipo, setTipo] = useState('');


  

  return (
    <div className='calculadoraIMC'>
      
    </div>
  );
};
