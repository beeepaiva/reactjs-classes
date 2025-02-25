import React, { useState } from 'react';

export function ListaItens(){
 const [itens, setItens] = useState([]);
 const [novoItem, setNovoItem] = useState('');

function inserirItem() {
    setItens([...itens, novoItem]);
}

 return(
    <div>
        <input value={novoItem} onChange={(e)=> setNovoItem(e.target.value)}/>
        <ul>
            {
                itens.map((item) => (
                    <li >{item}</li>
                ))
            }
        </ul>
        <button onClick={inserirItem}> Inserir item </button>
    </div>

 )
 

}