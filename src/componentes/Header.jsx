import React from "react";
import '../App.css';

export function Header({tema, action, ...props}){

return(
    <div>
        <header className={props.class}>
        <h3 style={{marginLeft:'50px'}}>SENAC - MOBILE PROVA 1</h3>
        <div style={{alignContent: 'end', justifyContent: "space-between", margin: "10px"}}>
        <button onClick={()=>action()} style={{ margin:'10px'}} >Limpar Exercício</button>
        <button onClick={()=>tema()} style={{ margin:'10px', marginRight:"30px"}}>Trocar tema</button>
        </div>
        </header>
    </div>
)

}