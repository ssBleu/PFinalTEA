import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/Home/Home2.png";
import ModalImage from "react-modal-image";
import TextResizer from "../TextResizer";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={4} className="myAvtar d-flex justify-content-center">
            <ModalImage
              small={myImg}
              large={myImg}
              alt="home pic"
              className="img-fluid"
              style={{ maxHeight: "450px" }}
            />

          </Col>
          <Col md={8} className="home-about-description">
            <h1>
              ¿Qué es el<span className="altText"> TEA </span>?
            </h1>
            <p className="home-about-body">
              <TextResizer
                text="Los trastornos del espectro autista (TEA) son discapacidades del desarrollo
              causadas por diferencias en el cerebro. Las personas con TEA con frecuencia
              tienen problemas con la comunicación y la interacción sociales, y conductas
              o intereses restrictivos o repetitivos."
                maxFontSize={30}
                minFontSize={12} />

              <br />
              <br />
            </p>
          </Col>

        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
