import React, {useState} from "react";
import Checkbox from "./Checkbox";


const Options = () => {

    const [labelOneChecked, setLabelOneChecked] = useState(False)
    const [labelTwoChecked, setLabelTwoChecked] = useState(False)
    const [labelThreeChecked, setLabelThreeChecked] = useState(False)



    return(
        <>
            <h3>Selecciona tus opciones :</h3>
            <Checkbox label="Incluir mayusculas" initiallyChecked={labelOneChecked}/>
            <Checkbox label="Incluir numeros" initiallyChecked={labelTwoChecked}/>
            <Checkbox label="Incluir simbolos" initiallyChecked={labelThreeChecked}/>

            <h4> Esta es tu contraseña :</h4>
            <p> Contraseña</p>

    
        </>
    )
}

export default Options;