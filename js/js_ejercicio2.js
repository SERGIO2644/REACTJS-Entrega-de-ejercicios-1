function App() {
  const [clics, setClics] = React.useState(0);

  return (
    <>
      <h1>Contador de Clics</h1>
      <p className="small-text">Cada vez que pulses el botón, aumentará el contador.</p>
      <button onClick={() => setClics(clics + 1)}>Contar clics</button>
      <div className="result">Clics: {clics}</div>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
