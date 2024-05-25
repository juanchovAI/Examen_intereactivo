import { useState } from "react";
import carpintero from "./assets/carpintero.jpeg"

function Cuarto() {

    const [valor_borde, set_valor_borde] = useState("5px")

  return (
    <>
    <h2>Qe linda vista</h2>

    <img
            src={carpintero}
            alt="Carpintero"
            style={{ width: "500px", height: "450px" }}
          />

      <div style={{background:"rgb(0, 194, 255)",width: "360px",height: "270px",border: valor_borde + " solid black",display: "flex"}}>
        <div style={{width: "175px",height: "250px"}}>
          <div style={{border: valor_borde + " solid black", width: "175px",height: "125px"}}></div>
          <div style={{border: valor_borde + " solid black", width: "175px",height: "125px"}}></div>
        </div>
        <div style={{width: "175px",height: "250px"}}>
          <div style={{border: valor_borde + " solid black", width: "175px",height: "125px"}}></div>
          <div style={{border: valor_borde + " solid black", width: "175px",height: "125px"}}></div>
        </div>
      </div>
    </>
  );
}

export default Cuarto;
