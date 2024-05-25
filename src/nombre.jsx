function Nombre() {
  return (
    <div>
      <h1>{"¿Cuánto aprendiste sobre \n operaciones con números decimales?"}</h1>
      <div style={{ display: "flex" }}>
        <h2>Nombre:</h2>
        <input
          type="text"
          style={{
            background: "#F5EFE6",
            border: "none",
            height: "30px",
            borderBottom: "solid 3px #4F6F52",
            width: "500px",
            padding: "5px 20px 0px 20px",
            marginTop: "15px",
            fontSize: "20px",
            color: "#4F6F52",
          }}
        />
      </div>
      <hr style={{ border: " 2px solid #E8DFCA", marginTop: "50px" }} />
    </div>
  );
}

export default Nombre;
