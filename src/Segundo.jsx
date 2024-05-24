import carpintero from "./assets/carpintero.jpeg";

import tv from "./assets/tv.jpeg";

function Segundo() {
  return (
    <div>
      <hr style={{ border: " 2px solid #E8DFCA", marginTop: "100px" }} />
      <h3>Segundo punto</h3>

      <div
        style={{
          paddingInline: "10%",
          display: "flex",
          gap: "25px",
          alignItems: "center",
        }}
      >
        <img
          src={tv}
          alt="Carpintero"
          style={{ width: "50%", height: "80%" }}
        />
        <div style={{ width: "50%" }}>
          <p>
            Juan Pablo Reyes trabaja como editor para el canal RCN, entre sus
            funciones se encuentra la edición de la serie-novela “La rosa de
            Guadalupe”, Juan Pablo debe recortar los capítulos para incluir las
            pautas comerciales, por contrato le productora exige que cada
            capítulo dure por lo menos 0.35 horas.
          </p>
          <p>
            Ana María, la jefe de Juan, le solicita hacer espacio para una pauta
            comercial total de 2.4 horas en los próximos cinco capítulos, Juan
            tiene una tabla de registro con la duración exacta de cada capítulo,
            pero no está seguro de si puede recortar lo suficiente para incluir
            la pauta respetando el tiempo mínimo que impone el contrato.
          </p>
          <p>Teniendo en cuenta la siguiente tabla:</p>
          <table style={{ width: "100%" }}>
            <thead style={{ color: "#1A4D2E", fontWeight: "bold" }}>
              <tr>
                <td>Capítulo</td>
                <td>Duración</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>“¡Mamá, perdí el año!” </td>
                <td>1.1 horas</td>
              </tr>
              <tr>
                <td>“Mi nieto es un emo” </td>
                <td>1.4 horas</td>
              </tr>
              <tr>
                <td>“Ruby, la venganza” </td>
                <td>0.5 horas</td>
              </tr>
            </tbody>
          </table>
          <p>
            ¿Puede Juan pablo atender a la solicitud de Ana María y respetar el
            tiempo por capítulo establecido en el contrato? de ser así ¿Cuánto
            le debe recortar a cada capítulo entonces Juan Pablo? De no ser así
            ¿Cuánto sería la duración mínima que deberían proponerle a la
            productora, para poder hacerle campo a las 2.4 horas de pauta que
            pide Ana María?
          </p>
        </div>
      </div>

      <p>Responde las preguntas y justifica tu respuesta:</p>
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

export default Segundo;
