import "./App.css";
import Titulo from "./components/Titulo";

function App() {
  return (
    <div className="d-flex flex-column min-vh-100 bg-app ">
      <section className="container">
        <h1 className="display-5 text-center pt-5 pb-2 text-white">
          Ejercicio 3
        </h1>
        <hr className="text-white" />
      </section>
      <section className="text-center text-white">
        <Titulo />
      </section>
      <footer className="py-5 mt-auto bg-dark">
        <h5 className="text-center text-white">
          {" "}
          © Todos los derechos reservados
        </h5>
      </footer>
    </div>
  );
}

export default App;
