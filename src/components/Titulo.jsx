import { useState } from "react";
import { Button } from "react-bootstrap";

const Titulo = ({ nuevoTitulo }) => {
  const [inicial, setInicial] = useState("");
  const cambiarEstado = () => {
    setInicial("(from changed state)!");
  };

  return (
    <>
      <h1> {nuevoTitulo}</h1>
      <h2> Hello My Friend {inicial} </h2>
      <Button
        variant="primary"
        // onClick={() => setInicial("from changed state")}
        onClick={cambiarEstado}
      >
        Cambiar estado
      </Button>
    </>
  );
};

export default Titulo;
