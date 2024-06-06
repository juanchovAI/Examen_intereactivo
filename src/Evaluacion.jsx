import App from "./App.jsx";
import Nombre from "./nombre.jsx";

import Segundo from "./Segundo.jsx";
import Tercero from "./Tercero.jsx";
import Cuarto from "./Cuarto.jsx";

import html2pdf from "html2pdf.js";

function Evaluacion() {
  const savePageAsPDF = () => {
    const element = document.getElementById("content");

    const options = {
      margin: 1,
      filename: "pagina-web.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
    };

    html2pdf().from(element).set(options).save();
  };

  return (
    <>
      <div id="content">
        <Nombre />
        <App />
        <Segundo />
        <Tercero />
        <Cuarto />
        <button
          className="button"
          style={{
            margin: "100px 10px",
            background: "#1A4D2E",
            color: "#F5EFE6",
          }}
          onClick={savePageAsPDF}
        >
          Guardar
        </button>
      </div>
    </>
  );
}

export default Evaluacion;
