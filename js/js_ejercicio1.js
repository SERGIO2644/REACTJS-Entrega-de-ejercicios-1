function App() {
  const [color, setColor] = React.useState("fondo inicial");

  function generarColor() {
    const letras = "0123456789ABCDEF";
    let nuevoColor = "#";

    for (let i = 0; i < 6; i++) {
      nuevoColor += letras[Math.floor(Math.random() * 16)];
    }

    document.body.style.background = nuevoColor;
    setColor(nuevoColor);
  }

  return (
    <>
      <h1>Cambiador de Color de Fondo</h1>
      <p className="small-text">Pulsa el botón para cambiar el color de fondo de la página.</p>
      <button onClick={generarColor}>Cambiar color</button>
      <div className="result">Color actual: {color}</div>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
