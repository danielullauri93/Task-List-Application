import "./App.css";
import task from "./imagenes/task.png";
import ListaDeTareas from "./componentes/ListaDeTareas";

function App() {
  return (
    <div className="aplicacion-tareas">
      <div className="logo-contenedor">
        <img src={task} className="logo" />
      </div>
      <div className="tareas-lista-principal">
        <h1>Mis Tareas</h1>
        <ListaDeTareas />
      </div>
    </div>
  );
}

export default App;