function App() {
  const [busqueda, setBusqueda] = React.useState("");
  const animales = ["Perro", "Gato", "Pez", "Conejo", "Caballo", "Tortuga", "Canario"];

  const animalesFiltrados = animales.filter((animal) =>
    animal.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <>
      <h1>Filtro de Búsqueda en Tiempo Real</h1>
      <p className="small-text">Mientras escribes, la lista se actualiza automáticamente.</p>

      <input
        type="text"
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
        placeholder="Buscar animal..."
      />

      <ul>
        {animalesFiltrados.map((animal) => (
          <li key={animal}>{animal}</li>
        ))}
      </ul>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
