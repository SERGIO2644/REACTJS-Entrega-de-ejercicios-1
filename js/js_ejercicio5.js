function App() {
  const [numero1, setNumero1] = React.useState("");
  const [numero2, setNumero2] = React.useState("");
  const [resultado, setResultado] = React.useState("Resultado:");

  function calcular(operacion) {
    const n1 = parseFloat(numero1);
    const n2 = parseFloat(numero2);

    if (isNaN(n1) || isNaN(n2)) {
      setResultado("Resultado: introduce los dos números.");
      return;
    }

    if (operacion === "sumar") setResultado(`Resultado: ${n1 + n2}`);
    if (operacion === "restar") setResultado(`Resultado: ${n1 - n2}`);
    if (operacion === "multiplicar") setResultado(`Resultado: ${n1 * n2}`);

    if (operacion === "dividir") {
      if (n2 === 0) {
        setResultado("Resultado: no se puede dividir entre cero.");
      } else {
        setResultado(`Resultado: ${n1 / n2}`);
      }
    }
  }

  return (
    <>
      <h1>Calculadora Sencilla</h1>
      <p className="small-text">Introduce dos números y elige una operación.</p>

      <label>Primer número</label>
      <input type="number" value={numero1} onChange={(e) => setNumero1(e.target.value)} />

      <label>Segundo número</label>
      <input type="number" value={numero2} onChange={(e) => setNumero2(e.target.value)} />

      <div>
        <button onClick={() => calcular("sumar")}>Sumar</button>
        <button onClick={() => calcular("restar")}>Restar</button>
        <button onClick={() => calcular("multiplicar")}>Multiplicar</button>
        <button onClick={() => calcular("dividir")}>Dividir</button>
      </div>

      <div className="result">{resultado}</div>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
