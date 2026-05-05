function App() {
  const [segundos, setSegundos] = React.useState(0);
  const [activo, setActivo] = React.useState(false);

  React.useEffect(() => {
    if (!activo) return;

    const intervalo = setInterval(() => {
      setSegundos((valorActual) => valorActual + 1);
    }, 1000);

    return () => clearInterval(intervalo);
  }, [activo]);

  function formatearTiempo(totalSegundos) {
    const horas = Math.floor(totalSegundos / 3600);
    const minutos = Math.floor((totalSegundos % 3600) / 60);
    const seg = totalSegundos % 60;

    return `${String(horas).padStart(2, "0")}:${String(minutos).padStart(2, "0")}:${String(seg).padStart(2, "0")}`;
  }

  function reiniciar() {
    setActivo(false);
    setSegundos(0);
  }

  return (
    <>
      <h1>Temporizador con Inicio, Pausa y Reinicio</h1>
      <p className="small-text">Controla el temporizador usando estado y useEffect.</p>

      <div className="result">{formatearTiempo(segundos)}</div>

      <button onClick={() => setActivo(true)}>Iniciar</button>
      <button onClick={() => setActivo(false)}>Pausar</button>
      <button onClick={reiniciar}>Reiniciar</button>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
