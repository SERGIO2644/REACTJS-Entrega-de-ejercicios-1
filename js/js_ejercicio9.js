function App() {
  const [texto, setTexto] = React.useState("");
  const [tareas, setTareas] = React.useState(() => {
    return JSON.parse(localStorage.getItem("tareasReact")) || [];
  });

  React.useEffect(() => {
    localStorage.setItem("tareasReact", JSON.stringify(tareas));
  }, [tareas]);

  function agregarTarea() {
    const textoLimpio = texto.trim();

    if (textoLimpio === "") {
      alert("Escribe una tarea antes de agregarla.");
      return;
    }

    setTareas([...tareas, { texto: textoLimpio, completada: false }]);
    setTexto("");
  }

  function cambiarEstado(indice) {
    const nuevasTareas = tareas.map((tarea, i) => {
      if (i === indice) {
        return { ...tarea, completada: !tarea.completada };
      }
      return tarea;
    });

    setTareas(nuevasTareas);
  }

  function limpiarCompletadas() {
    setTareas(tareas.filter((tarea) => !tarea.completada));
  }

  return (
    <>
      <h1>Lista de Tareas con LocalStorage</h1>
      <p className="small-text">Las tareas se guardan aunque recargues la página.</p>

      <div className="row">
        <input
          type="text"
          value={texto}
          onChange={(e) => setTexto(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && agregarTarea()}
          placeholder="Escribe una tarea"
        />
        <button onClick={agregarTarea}>Agregar tarea</button>
      </div>

      <ul>
        {tareas.map((tarea, index) => (
          <li key={index}>
            <label className="checkbox-row">
              <input
                type="checkbox"
                checked={tarea.completada}
                onChange={() => cambiarEstado(index)}
              />
              <span className={tarea.completada ? "completed" : ""}>{tarea.texto}</span>
            </label>
          </li>
        ))}
      </ul>

      <button className="btn-danger" onClick={limpiarCompletadas}>Limpiar tareas completadas</button>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
