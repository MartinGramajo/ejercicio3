import { useState } from "react";
import { Button } from "react-bootstrap";

const Titulo = ({ nuevoTitulo }) => {
  const [inicial, setInicial] = useState("");
  const cambiarEstado = () => {
    setInicial("(from changed state)!");
  };

  return (
    <article>
      <h1> {nuevoTitulo}</h1>
      <h2> Hello My Friend {inicial} </h2>
      <div className="my-4">
        <Button className="me-4 " variant="primary" onClick={cambiarEstado}>
          Cambiar estado
        </Button>

        <Button variant="danger" onClick={() => setInicial("")}>
          Quitar estado
        </Button>
      </div>
    </article>
  );
};

export default Titulo;
