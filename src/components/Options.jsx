import React, {useState} from "react";
import Checkbox from "./Checkbox";


import useStore from "./Context";




const Options = () => {
const store = useStore()
const {handleNewPassword, handleFirst, handleSecond, handleThird } = store.actions 
const {labelOneChecked,labelTwoChecked,labelThreeChecked,currentPassword } = store.store


    return(
        <>
            <h3>Selecciona tus opciones :</h3>
            <Checkbox label="Incluir mayusculas" initiallyChecked={labelOneChecked} handleClick={handleFirst} />
            <Checkbox label="Incluir numeros" initiallyChecked={labelTwoChecked} handleClick={handleSecond}/>
            <Checkbox label="Incluir simbolos" initiallyChecked={labelThreeChecked} handleClick={handleThird}/>
            <button onClick={handleNewPassword}> Generar nueva contraseña</button>

            <h4> Esta es tu contraseña :</h4>
            {currentPassword 
            ? currentPassword
            : "Ninguna contraseña generada" }

    
        </>
    )
}

export default Options;