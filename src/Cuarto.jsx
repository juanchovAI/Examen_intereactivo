import { useState } from "react";
import carpintero from "./assets/carpintero.jpeg";

function Cuarto() {
  const [valor_borde, set_valor_borde] = useState("5px");
  const [anchoVentana, setAnchoVentana] = useState("175px");
  const [altoVentana, setAltooVentana] = useState("125px");

  const [anchoVentana_sel, setAnchoVentana_sel] = useState(0);
  const [altoVentana_sel, setAltooVentana_sel] = useState(0);

  const [intentos, set_intento] = useState(0);
  const cambiar_ancho = (event) => {
    setAnchoVentana_sel(event.target.value);
  };
  const cambiar_alto = (event) => {
    setAltooVentana_sel(event.target.value);
  };

  const enviar_medidas = () => {
    console.log(anchoVentana_sel * 100 + "px");
    setAnchoVentana(anchoVentana_sel * 100 + "px");
    setAltooVentana(altoVentana_sel * 100 + "px");
    set_intento((prev) => prev + 1);
  };
  return (
    <>
      <h2>Que linda vista</h2>

      <div
        style={{
          display: "flex",
          gap: "50px",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <img
          src={carpintero}
          alt="Carpintero"
          style={{ width: "400px", height: "400px" }}
        />
        <div>
          <p>
            Julián ha sido contratado para hacer el marco de una ventana de 3.5
            metros de ancho y 2.5 metros de alto. Julián cuenta con bastidores
            de 0.1 metros de ancho para formar el marco que tiene la forma de
            una cruz, como se muestra en la imagen inferior.
          </p>
          <p>
            Julián no sabe de qué tamaño debe mandar a hacer los cuatro vidrios
            para las ventanas que estarán en el marco. Lo seguro es que los
            cuatro tendrán las mismas medidas.
          </p>
          <p>
            ¿Cuáles son las medidas de los vidrios para que Julián pueda hacer
            el marco solicitado usando los bastidores que ya tiene?
          </p>
        </div>
      </div>
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "50px" }}
      >
        <div
          style={{
            background: "rgb(0, 194, 255)",
            width: "360px",
            height: "270px",
            border: valor_borde + " solid black",
            display: "flex",
          }}
          className="ventana"
        >
          <div style={{ width: "175px", height: "250px" }}>
            <div
              style={{
                border: valor_borde + " solid black",
                width: anchoVentana,
                height: altoVentana,
              }}
            ></div>
            <div
              style={{
                border: valor_borde + " solid black",
                width: anchoVentana,
                height: altoVentana,
              }}
            ></div>
          </div>
          <div style={{ width: "175px", height: "250px" }}>
            <div
              style={{
                border: valor_borde + " solid black",
                width: anchoVentana,
                height: altoVentana,
              }}
            ></div>
            <div
              style={{
                border: valor_borde + " solid black",
                width: anchoVentana,
                height: altoVentana,
              }}
            ></div>
          </div>
        </div>
      </div>
      <div
        style={{
          background: "rgb(223, 223, 223)",
          padding: "50px",
          display: "flex",
          marginTop: "50px",
          gap: "10%",
        }}
      >
        <div
          style={{ display: "flex", justifyContent: "center", width: "100%" }}
        >
          <div>
            <div>
              <p>Ancho:</p>
              <input
                type="text"
                value={anchoVentana_sel}
                onInput={(event) => {
                  cambiar_ancho(event);
                }}
                disabled={!(intentos <= 3)}
              />
            </div>
            <div>
              <p>Alto:</p>
              <input
                type="text"
                value={altoVentana_sel}
                onInput={(event) => {
                  cambiar_alto(event);
                }}
                disabled={!(intentos <= 3)}
              />
            </div>
            <div>
              <button
                type="button"
                onClick={enviar_medidas}
                style={{
                  marginTop: "25px",
                  padding: "10px",
                  color: "rgb(26, 77, 46)",
                  background: "rgb(245, 239, 230)",
                  fontSize: "16px",
                  borderRadius: "10px",
                  cursor: "pointer",
                  display: intentos <= 3 ? "block" : "none",
                }}
              >
                Enviar medidas
              </button>
            </div>
          </div>
        </div>

        <div>
          <p>
            Usa estas dos casillas para ingresar tus respuestas, nota que hay
            una para el ancho y otra para el alto que tendrá cada uno de los
            cuatro vidrios. Puedes ingresar los valores que son resultado de tus
            cálculos. Los vidrios aumentarán o disminuirán de tamaño de acuerdo
            a los valores ingresados y podrás comprobar si has acertado. Solo
            tendrás 3 oportunidades.
          </p>
        </div>
      </div>
    </>
  );
}

export default Cuarto;
