function App() {
  const [longitud, setLongitud] = React.useState("");
  const [password, setPassword] = React.useState("Contraseña:");

  function generarPassword() {
    const cantidad = parseInt(longitud);
    const caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{};:,.<>?";

    if (isNaN(cantidad) || cantidad < 4) {
      setPassword("Error: la longitud debe ser mayor o igual a 4.");
      return;
    }

    let nuevaPassword = "";

    for (let i = 0; i < cantidad; i++) {
      const indice = Math.floor(Math.random() * caracteres.length);
      nuevaPassword += caracteres[indice];
    }

    setPassword(`Contraseña: ${nuevaPassword}`);
  }

  return (
    <>
      <h1>Generador de Contraseñas Aleatorias</h1>
      <p className="small-text">La longitud debe ser igual o superior a 4.</p>

      <label>Longitud de la contraseña</label>
      <input
        type="number"
        min="4"
        value={longitud}
        onChange={(e) => setLongitud(e.target.value)}
        placeholder="Ejemplo: 12"
      />

      <button onClick={generarPassword}>Generar contraseña</button>
      <div className="result">{password}</div>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
