import { useState } from "react";
import "./App.css";

function App() {
  let grilla_default = [
    [false, false, false, false, false, false],
    [false, false, false, false, false, false],
    [false, false, false, false, false, false],
    [false, false, false, false, false, false],
    [false, false, false, false, false, false],
    [false, false, false, false, false, false],
    [false, false, false, false, false, false],
    [false, false, false, false, false, false],
    [false, false, false, false, false, false],
    [false, false, false, false, false, false],
  ];

  const [grilla, setGrilla] = useState(grilla_default);
  const [contestando, setContestando] = useState(false);
  const [numero, setNumero] = useState(
    (Math.random() * (99.99 - 2.1 + 1) + 2.1).toFixed(3)
  );

  const cambiar_grilla = (elemento) => {
    elemento.preventDefault();
    setContestando(true);
    const ids = elemento.target.id;
    const position = ids.split("");
    let grilla_copia = [...grilla];
    grilla_copia[parseInt(position[0])][parseInt(position[1])] =
      !grilla_copia[parseInt(position[0])][parseInt(position[1])];
    setGrilla(grilla_copia);
  };

  function getRandomIntInclusive(min, max) {
    if (!contestando) return numero;
    return (Math.random() * (max - min + 1) + min).toFixed(3);
  }

  // if (!contestando) {
  //   numero = getRandomIntInclusive(1.2, 99.9);
  // }

  return (
    <>
      <div>
        <h3 style={{ color: "#1A4D2E" }}>Primer punto</h3>
        <p style={{ color: "#4F6F52" }}>
          Usando la tabla de posiciones representa el número {numero}
        </p>
      </div>
      <div style={{ paddingInline: "30%" }}>
        <div style={{ display: "flex" }}>
          <div
            className="button"
            id="00"
            onClick={(event) => {
              cambiar_grilla(event);
            }}
            style={{ backgroundColor: grilla[0][0] ? "red" : "pink" }}
          ></div>
          <div
            className="button"
            id="01"
            onClick={(event) => {
              cambiar_grilla(event);
            }}
            style={{ backgroundColor: grilla[0][1] ? "red" : "pink" }}
          ></div>
          <div
            style={{
              width: "100px",
              height: "20px",
              backgroundColor: "#4F6F52",
              marginLeft: "5px",
              marginTop: "5px",
            }}
          ></div>
          <div
            className="button"
            id="02"
            onClick={(event) => {
              cambiar_grilla(event);
            }}
            style={{ backgroundColor: grilla[0][2] ? "red" : "pink" }}
          ></div>
          <div
            className="button"
            id="03"
            onClick={(event) => {
              cambiar_grilla(event);
            }}
            style={{ backgroundColor: grilla[0][3] ? "red" : "pink" }}
          ></div>
          <div
            className="button"
            id="04"
            onClick={(event) => {
              cambiar_grilla(event);
            }}
            style={{ backgroundColor: grilla[0][4] ? "red" : "pink" }}
          ></div>
          <div
            className="button"
            id="05"
            onClick={(event) => {
              cambiar_grilla(event);
            }}
            style={{ backgroundColor: grilla[0][5] ? "red" : "pink" }}
          ></div>
        </div>
        <div style={{ display: "flex" }}>
          <div
            className="button"
            id="10"
            onClick={(event) => {
              cambiar_grilla(event);
            }}
            style={{ backgroundColor: grilla[1][0] ? "#c658c6" : "#d9d9d9" }}
          ></div>
          <div
            className="button"
            id="11"
            onClick={(event) => {
              cambiar_grilla(event);
            }}
            style={{ backgroundColor: grilla[1][1] ? "#59d2c7" : "#d9d9d9" }}
          ></div>
          <div
            style={{
              width: "100px",
              height: "20px",
              backgroundColor: "#4F6F52",
              marginLeft: "5px",
              marginTop: "5px",
            }}
          ></div>
          <div
            className="button"
            id="12"
            onClick={(event) => {
              cambiar_grilla(event);
            }}
            style={{ backgroundColor: grilla[1][2] ? "yellow" : "#d9d9d9" }}
          ></div>
          <div
            className="button"
            id="13"
            onClick={(event) => {
              cambiar_grilla(event);
            }}
            style={{ backgroundColor: grilla[1][3] ? "orange" : "#d9d9d9" }}
          ></div>
          <div
            className="button"
            id="14"
            onClick={(event) => {
              cambiar_grilla(event);
            }}
            style={{ backgroundColor: grilla[1][4] ? "#4dd549" : "#d9d9d9" }}
          ></div>
          <div
            className="button"
            id="15"
            onClick={(event) => {
              cambiar_grilla(event);
            }}
            style={{ backgroundColor: grilla[1][5] ? "#c17777" : "#d9d9d9" }}
          ></div>
        </div>
        <div style={{ display: "flex" }}>
          <div
            className="button"
            id="20"
            onClick={(event) => {
              cambiar_grilla(event);
            }}
            style={{ backgroundColor: grilla[2][0] ? "#c658c6" : "#d9d9d9" }}
          ></div>
          <div
            className="button"
            id="21"
            onClick={(event) => {
              cambiar_grilla(event);
            }}
            style={{ backgroundColor: grilla[2][1] ? "#59d2c7" : "#d9d9d9" }}
          ></div>
          <div
            style={{
              width: "100px",
              height: "20px",
              backgroundColor: "#4F6F52",
              marginLeft: "5px",
              marginTop: "5px",
            }}
          ></div>
          <div
            className="button"
            id="22"
            onClick={(event) => {
              cambiar_grilla(event);
            }}
            style={{ backgroundColor: grilla[2][2] ? "yellow" : "#d9d9d9" }}
          ></div>
          <div
            className="button"
            id="23"
            onClick={(event) => {
              cambiar_grilla(event);
            }}
            style={{ backgroundColor: grilla[2][3] ? "orange" : "#d9d9d9" }}
          ></div>
          <div
            className="button"
            id="24"
            onClick={(event) => {
              cambiar_grilla(event);
            }}
            style={{ backgroundColor: grilla[2][4] ? "#4dd549" : "#d9d9d9" }}
          ></div>
          <div
            className="button"
            id="25"
            onClick={(event) => {
              cambiar_grilla(event);
            }}
            style={{ backgroundColor: grilla[2][5] ? "#c17777" : "#d9d9d9" }}
          ></div>
        </div>
        <div style={{ display: "flex" }}>
          <div
            className="button"
            id="30"
            onClick={(event) => {
              cambiar_grilla(event);
            }}
            style={{ backgroundColor: grilla[3][0] ? "#c658c6" : "#d9d9d9" }}
          ></div>
          <div
            className="button"
            id="31"
            onClick={(event) => {
              cambiar_grilla(event);
            }}
            style={{ backgroundColor: grilla[3][1] ? "#59d2c7" : "#d9d9d9" }}
          ></div>
          <div
            style={{
              width: "100px",
              height: "20px",
              backgroundColor: "#4F6F52",
              marginLeft: "5px",
              marginTop: "5px",
            }}
          ></div>
          <div
            className="button"
            id="32"
            onClick={(event) => {
              cambiar_grilla(event);
            }}
            style={{ backgroundColor: grilla[3][2] ? "yellow" : "#d9d9d9" }}
          ></div>
          <div
            className="button"
            id="33"
            onClick={(event) => {
              cambiar_grilla(event);
            }}
            style={{ backgroundColor: grilla[3][3] ? "orange" : "#d9d9d9" }}
          ></div>
          <div
            className="button"
            id="34"
            onClick={(event) => {
              cambiar_grilla(event);
            }}
            style={{ backgroundColor: grilla[3][4] ? "#4dd549" : "#d9d9d9" }}
          ></div>
          <div
            className="button"
            id="35"
            onClick={(event) => {
              cambiar_grilla(event);
            }}
            style={{ backgroundColor: grilla[3][5] ? "#c17777" : "#d9d9d9" }}
          ></div>
        </div>
        <div style={{ display: "flex" }}>
          <div
            className="button"
            id="40"
            onClick={(event) => {
              cambiar_grilla(event);
            }}
            style={{ backgroundColor: grilla[4][0] ? "#c658c6" : "#d9d9d9" }}
          ></div>
          <div
            className="button"
            id="41"
            onClick={(event) => {
              cambiar_grilla(event);
            }}
            style={{ backgroundColor: grilla[4][1] ? "#59d2c7" : "#d9d9d9" }}
          ></div>
          <div
            style={{
              width: "100px",
              height: "20px",
              backgroundColor: "#4F6F52",
              marginLeft: "5px",
              marginTop: "5px",
            }}
          ></div>
          <div
            className="button"
            id="42"
            onClick={(event) => {
              cambiar_grilla(event);
            }}
            style={{ backgroundColor: grilla[4][2] ? "yellow" : "#d9d9d9" }}
          ></div>
          <div
            className="button"
            id="43"
            onClick={(event) => {
              cambiar_grilla(event);
            }}
            style={{ backgroundColor: grilla[4][3] ? "orange" : "#d9d9d9" }}
          ></div>
          <div
            className="button"
            id="44"
            onClick={(event) => {
              cambiar_grilla(event);
            }}
            style={{ backgroundColor: grilla[4][4] ? "#4dd549" : "#d9d9d9" }}
          ></div>
          <div
            className="button"
            id="45"
            onClick={(event) => {
              cambiar_grilla(event);
            }}
            style={{ backgroundColor: grilla[4][5] ? "#c17777" : "#d9d9d9" }}
          ></div>
        </div>
        <div style={{ display: "flex" }}>
          <div
            className="button"
            id="50"
            onClick={(event) => {
              cambiar_grilla(event);
            }}
            style={{ backgroundColor: grilla[5][0] ? "#c658c6" : "#d9d9d9" }}
          ></div>
          <div
            className="button"
            id="51"
            onClick={(event) => {
              cambiar_grilla(event);
            }}
            style={{ backgroundColor: grilla[5][1] ? "#59d2c7" : "#d9d9d9" }}
          ></div>
          <div
            style={{
              width: "100px",
              height: "20px",
              backgroundColor: "#4F6F52",
              marginLeft: "5px",
              marginTop: "5px",
            }}
          ></div>
          <div
            className="button"
            id="52"
            onClick={(event) => {
              cambiar_grilla(event);
            }}
            style={{ backgroundColor: grilla[5][2] ? "yellow" : "#d9d9d9" }}
          ></div>
          <div
            className="button"
            id="53"
            onClick={(event) => {
              cambiar_grilla(event);
            }}
            style={{ backgroundColor: grilla[5][3] ? "orange" : "#d9d9d9" }}
          ></div>
          <div
            className="button"
            id="54"
            onClick={(event) => {
              cambiar_grilla(event);
            }}
            style={{ backgroundColor: grilla[5][4] ? "#4dd549" : "#d9d9d9" }}
          ></div>
          <div
            className="button"
            id="55"
            onClick={(event) => {
              cambiar_grilla(event);
            }}
            style={{ backgroundColor: grilla[5][5] ? "#c17777" : "#d9d9d9" }}
          ></div>
        </div>
        <div style={{ display: "flex" }}>
          <div
            className="button"
            id="60"
            onClick={(event) => {
              cambiar_grilla(event);
            }}
            style={{ backgroundColor: grilla[6][0] ? "#c658c6" : "#d9d9d9" }}
          ></div>
          <div
            className="button"
            id="61"
            onClick={(event) => {
              cambiar_grilla(event);
            }}
            style={{ backgroundColor: grilla[6][1] ? "#59d2c7" : "#d9d9d9" }}
          ></div>
          <div
            style={{
              width: "100px",
              height: "20px",
              backgroundColor: "#4F6F52",
              marginLeft: "5px",
              marginTop: "5px",
            }}
          ></div>
          <div
            className="button"
            id="62"
            onClick={(event) => {
              cambiar_grilla(event);
            }}
            style={{ backgroundColor: grilla[6][2] ? "yellow" : "#d9d9d9" }}
          ></div>
          <div
            className="button"
            id="63"
            onClick={(event) => {
              cambiar_grilla(event);
            }}
            style={{ backgroundColor: grilla[6][3] ? "orange" : "#d9d9d9" }}
          ></div>
          <div
            className="button"
            id="64"
            onClick={(event) => {
              cambiar_grilla(event);
            }}
            style={{ backgroundColor: grilla[6][4] ? "#4dd549" : "#d9d9d9" }}
          ></div>
          <div
            className="button"
            id="65"
            onClick={(event) => {
              cambiar_grilla(event);
            }}
            style={{ backgroundColor: grilla[6][5] ? "#c17777" : "#d9d9d9" }}
          ></div>
        </div>
        <div style={{ display: "flex" }}>
          <div
            className="button"
            id="70"
            onClick={(event) => {
              cambiar_grilla(event);
            }}
            style={{ backgroundColor: grilla[7][0] ? "#c658c6" : "#d9d9d9" }}
          ></div>
          <div
            className="button"
            id="71"
            onClick={(event) => {
              cambiar_grilla(event);
            }}
            style={{ backgroundColor: grilla[7][1] ? "#59d2c7" : "#d9d9d9" }}
          ></div>
          <div
            style={{
              width: "100px",
              height: "20px",
              backgroundColor: "#4F6F52",
              marginLeft: "5px",
              marginTop: "5px",
            }}
          ></div>
          <div
            className="button"
            id="72"
            onClick={(event) => {
              cambiar_grilla(event);
            }}
            style={{ backgroundColor: grilla[7][2] ? "yellow" : "#d9d9d9" }}
          ></div>
          <div
            className="button"
            id="73"
            onClick={(event) => {
              cambiar_grilla(event);
            }}
            style={{ backgroundColor: grilla[7][3] ? "orange" : "#d9d9d9" }}
          ></div>
          <div
            className="button"
            id="74"
            onClick={(event) => {
              cambiar_grilla(event);
            }}
            style={{ backgroundColor: grilla[7][4] ? "#4dd549" : "#d9d9d9" }}
          ></div>
          <div
            className="button"
            id="75"
            onClick={(event) => {
              cambiar_grilla(event);
            }}
            style={{ backgroundColor: grilla[7][5] ? "#c17777" : "#d9d9d9" }}
          ></div>
        </div>
        <div style={{ display: "flex" }}>
          <div
            className="button"
            id="80"
            onClick={(event) => {
              cambiar_grilla(event);
            }}
            style={{ backgroundColor: grilla[8][0] ? "#c658c6" : "#d9d9d9" }}
          ></div>
          <div
            className="button"
            id="81"
            onClick={(event) => {
              cambiar_grilla(event);
            }}
            style={{ backgroundColor: grilla[8][1] ? "#59d2c7" : "#d9d9d9" }}
          ></div>
          <div
            style={{
              width: "100px",
              height: "20px",
              backgroundColor: "#4F6F52",
              marginLeft: "5px",
              marginTop: "5px",
            }}
          ></div>
          <div
            className="button"
            id="82"
            onClick={(event) => {
              cambiar_grilla(event);
            }}
            style={{ backgroundColor: grilla[8][2] ? "yellow" : "#d9d9d9" }}
          ></div>
          <div
            className="button"
            id="83"
            onClick={(event) => {
              cambiar_grilla(event);
            }}
            style={{ backgroundColor: grilla[8][3] ? "orange" : "#d9d9d9" }}
          ></div>
          <div
            className="button"
            id="84"
            onClick={(event) => {
              cambiar_grilla(event);
            }}
            style={{ backgroundColor: grilla[8][4] ? "#4dd549" : "#d9d9d9" }}
          ></div>
          <div
            className="button"
            id="85"
            onClick={(event) => {
              cambiar_grilla(event);
            }}
            style={{ backgroundColor: grilla[8][5] ? "#c17777" : "#d9d9d9" }}
          ></div>
        </div>
        <div style={{ display: "flex" }}>
          <div
            className="button"
            id="90"
            onClick={(event) => {
              cambiar_grilla(event);
            }}
            style={{ backgroundColor: grilla[9][0] ? "#c658c6" : "#d9d9d9" }}
          ></div>
          <div
            className="button"
            id="91"
            onClick={(event) => {
              cambiar_grilla(event);
            }}
            style={{ backgroundColor: grilla[9][1] ? "#59d2c7" : "#d9d9d9" }}
          ></div>
          <div
            style={{
              width: "100px",
              height: "20px",
              backgroundColor: "#4F6F52",
              marginLeft: "5px",
              marginTop: "5px",
            }}
          ></div>
          <div
            className="button"
            id="92"
            onClick={(event) => {
              cambiar_grilla(event);
            }}
            style={{ backgroundColor: grilla[9][2] ? "yellow" : "#d9d9d9" }}
          ></div>
          <div
            className="button"
            id="93"
            onClick={(event) => {
              cambiar_grilla(event);
            }}
            style={{ backgroundColor: grilla[9][3] ? "orange" : "#d9d9d9" }}
          ></div>
          <div
            className="button"
            id="94"
            onClick={(event) => {
              cambiar_grilla(event);
            }}
            style={{ backgroundColor: grilla[9][4] ? "#4dd549" : "#d9d9d9" }}
          ></div>
          <div
            className="button"
            id="95"
            onClick={(event) => {
              cambiar_grilla(event);
            }}
            style={{ backgroundColor: grilla[9][5] ? "#c17777" : "#d9d9d9" }}
          ></div>
        </div>
      </div>
    </>
  );
}

export default App;
