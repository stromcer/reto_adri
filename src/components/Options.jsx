import React, {useState} from "react";
import Checkbox from "./Checkbox";
import {defaultList , mayusList ,numberList ,signList} from "./Listas.js"





const Options = () => {

    const [labelOneChecked, setLabelOneChecked] = useState(false)
    const [labelTwoChecked, setLabelTwoChecked] = useState(false)
    const [labelThreeChecked, setLabelThreeChecked] = useState(false)
    const [currentPassword, setCurrentPassword] = useState("")

    const handleNewPassword = () => {
        let newPassword = ""
        let listaUsada = getCharacter()
        for(let i=0; i<=12 ; i++ ){
            newPassword += listaUsada[Math.floor(Math.random()*(listaUsada.length-1))]
        }
        setCurrentPassword(newPassword)

    }

    const getCharacter = () => {
        let array = [...defaultList];
        array = labelOneChecked ? array.concat(mayusList) : array ;
        array = labelTwoChecked ? array.concat(numberList) : array ;
        array = labelThreeChecked ? array.concat(signList) : array ;
        return array
    }

    const handleFirst = () => {
        setLabelOneChecked(prev => !prev)
    } 

    const handleSecond = () => {
        console.log("HOLA")
        setLabelTwoChecked(prev => !prev)
    } 

    const handleThird = () => {
        setLabelThreeChecked(prev => !prev)
    } 





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