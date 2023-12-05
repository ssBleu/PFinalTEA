import React, { useState } from "react";
import { Button, Container, Row } from "react-bootstrap";
import TextResizer from "../TextResizer";
import Carrusel from "./Carrusel";
import NoCarrusel from "./NoCarrusel";
function Testimonio() {

  const [showContentA, setShowContentA] = useState(true);

  const toggleContent = () => {
    setShowContentA(!showContentA);
  };
  return (
    <div>
      <Container fluid className="resume-section">
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <h1><span className="altText"><b>Casos</b></span></h1>
        </Row>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <TextResizer
            text="El autismo afecta a las capacidades comunicativas, sociales, sin embargo,
            potencia habilidades concretas en cada persona."
            maxFontSize={30}
            minFontSize={12} />

        </Row>
        {showContentA ? (
          <Carrusel />
        ) : (
          <NoCarrusel />
        )}

        <br />
        <Button onClick={toggleContent}>CAMBIAR MODO DE INTERACCIÓN</Button>
        <br /> <br /><br />
      </Container>
    </div >
  );
}

export default Testimonio;
