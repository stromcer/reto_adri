import React from "react";
import { useState } from "react";

const Checkbox = ({initiallyChecked, label}) => {
    const [checked, setChecked] = useState(initiallyChecked);

    const handleclick = () => {
        return setChecked(prev => !prev)
    }

    return (
        <>  
            <input onClick={handleclick}  type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
            <label for="vehicle1"> {label} </label><br />
        </>
    )
}

export default Checkbox