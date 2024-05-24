import granja1 from "./assets/granja1.png";

import granja2 from "./assets/granja2.png";
import granja3 from "./assets/granja3.png";

function Tercero() {
  return (
    <div>
      <hr style={{ border: " 2px solid #E8DFCA", marginTop: "100px" }} />
      <h3>Tercero punto</h3>

      <div style={{ width: "100%" }}>
        <p>
          Doña Marta se enfrenta a un gran problema, los pollos de su granja son
          muy inquietos y han empezado a molestar a las vacas, doña Marta debe
          encontrar una solución rápida al problema porque las vacas podrían
          hacerles daño a los pollos, al comentarle el problema a don Abel, él
          le propone encercar el potrero dividiéndolo en dos sectores para que
          los pollos no se puedan acercar a las vacas.
        </p>
        <p>La forma y medidas disponibles del potrero son las siguientes:</p>
        <div
          style={{
            paddingInline: "10%",
            display: "flex",

            alignItems: "center",
          }}
        >
          <img
            src={granja1}
            alt="Carpintero"
            style={{ width: "80%", height: "70%" }}
          />
        </div>
        <p>
          Don Abel dispone de un rollo de alambre de cerca de 40 metros, pero
          debe usar 21 metros para un trabajo que ya tenía contratado, por lo
          que no están seguros con doña Marta si les alcanza el alambre
          apartando los 21 metros que necesita don Abel.
        </p>
      </div>

      <p>Don Abel y Doña Marta tienen dos opciones para cercar la granja:</p>
      <div style={{ display: "flex", gap: "30px" }}>
        <div>
          <p>Opción A</p>
          <img
            src={granja2}
            alt="Carpintero"
            style={{ width: "90%", height: "70%" }}
          />
        </div>
        <div>
          <p>Opción B</p>
          <img
            src={granja3}
            alt="Carpintero"
            style={{ width: "90%", height: "70%" }}
          />
        </div>
      </div>
      <p>
        ¿Cuál opción crees que es la mejor para doña Marta y don Abel? responde
        a continuación y justifica tu respuesta
      </p>
      <textarea
        name="respuesta2"
        id="respuesta2"
        style={{
          width: "100%",
          background: "#E8DFCA",
          border: "solid 2px #E8DFCA",
        }}
      ></textarea>
    </div>
  );
}

export default Tercero;
