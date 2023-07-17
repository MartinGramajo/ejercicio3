import { useState } from "react";
import { Button } from "react-bootstrap";

const Titulo = ({ nuevoTitulo }) => {
  // state
  const [inicial, setInicial] = useState("Hello My Friend!");

  // function
  const cambiarEstado = () => {
    setInicial("from changed state");
  };

  return (
    <>
      <h1> {nuevoTitulo}</h1>
      <h2> {inicial} </h2>
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
