function App() {
  const [texto, setTexto] = React.useState("");

  const caracteresSinEspacios = texto.replace(/\s/g, "").length;
  const palabras = texto.trim() === "" ? 0 : texto.trim().split(/\s+/).length;

  return (
    <>
      <h1>Contador de Palabras y Caracteres</h1>
      <p className="small-text">Los caracteres no incluyen espacios ni saltos de línea.</p>

      <textarea
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
        placeholder="Escribe aquí tu texto..."
      ></textarea>

      <div className="result">
        <p>Caracteres sin espacios: {caracteresSinEspacios}</p>
        <p>Palabras: {palabras}</p>
      </div>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
