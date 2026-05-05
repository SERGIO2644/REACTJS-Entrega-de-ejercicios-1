function App() {
  const [texto, setTexto] = React.useState("");
  const [lista, setLista] = React.useState([]);

  function agregarElemento() {
    const textoLimpio = texto.trim();

    if (textoLimpio === "") {
      alert("Escribe un texto antes de agregarlo.");
      return;
    }

    setLista([...lista, textoLimpio]);
    setTexto("");
  }

  function eliminarElemento(indice) {
    setLista(lista.filter((_, i) => i !== indice));
  }

  return (
    <>
      <h1>Lista Dinámica</h1>
      <p className="small-text">Agrega elementos a la lista y elimínalos cuando quieras.</p>

      <div className="row">
        <input
          type="text"
          value={texto}
          onChange={(e) => setTexto(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && agregarElemento()}
          placeholder="Escribe un elemento"
        />
        <button onClick={agregarElemento}>Agregar</button>
      </div>

      <ul>
        {lista.map((item, index) => (
          <li key={index}>
            <span>{item}</span>
            <button className="btn-danger" onClick={() => eliminarElemento(index)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
