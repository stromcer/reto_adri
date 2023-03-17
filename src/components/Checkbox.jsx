import React from "react";
import { useState } from "react";

const Checkbox = ({initiallyChecked}) => {
    const [checked, setChecked]= useState();

    const handleclick = () => {
        return ()
    }

    return (
        <><input onClick={handleclick}  type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
            <label for="vehicle1"> I have a bike</label><br />
            <input onClick={handleclick}  type="checkbox" id="vehicle2" name="vehicle2" value="Car" />
            <label for="vehicle2"> I have a car</label><br />
            <input onClick={handleclick} type="checkbox" id="vehicle3" name="vehicle3" value="Boat" />
            <label for="vehicle3"> I have a boat</label><br></br> </>

    )
}

export default Checkbox