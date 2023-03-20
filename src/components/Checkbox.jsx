import React from "react";
import { useState } from "react";

const Checkbox = ({initiallyChecked, label, handleClick}) => {
    const [checked, setChecked] = useState(initiallyChecked);

    

    return (
        <>  
            <input onClick={handleClick}  type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
            <label onChange={handleClick}> {label} </label><br />
        </>
    )
}

export default Checkbox