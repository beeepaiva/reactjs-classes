import React from "react";

/**const retornoBotao = ({props}) => {
    if(!props.isDisabled) {
        return <button>{props.textDisplay}</button>
    }else{
        return <button disabled>{props.textDisplay}</button>
    }
}**/

export function Botao({textDisplay, isDisabled, ...props}){

    return(
        <button disabled={isDisabled} style={{'background-color': props.color}}> {textDisplay}</button>
    )
}