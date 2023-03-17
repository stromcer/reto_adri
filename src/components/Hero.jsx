import React from "react";


const Hero = ({tittle, subTittle}) => {

    return(
    <div class="heroContainer p-5 mb-4 rounded-3">
      <div class="container-fluid py-5 ">
        <h1 class="display-5 fw-bold">{tittle}</h1>
        <p class="col-md-8 fs-4">{subTittle}</p>
      </div>
    </div>
    )
}


export default Hero;