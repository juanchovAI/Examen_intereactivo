import App from "./App.jsx";
import Nombre from "./nombre.jsx";

import Segundo from "./Segundo.jsx";
import Tercero from "./Tercero.jsx";
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
        <button onClick={savePageAsPDF}>Guardar como PDF</button>
      </div>
    </>
  );
}

export default Evaluacion;
