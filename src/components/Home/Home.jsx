import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import home1 from "../../Assets/Home/home1.png";
import Home2 from "./Home2";
import Home3 from "./Home3";

import ModalImage from "react-modal-image";

function Home() {
  return (
    <section>

      <Container fluid className="home-section" id="home">
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Cada persona con
                <strong className="main-name"> TEA </strong>
                es una
                <strong className="main-name"> chispa única </strong>
                en nuestro mundo.
                <span className="wave" role="img" aria-labelledby="wave">
                  ✨
                </span>
              </h1>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <ModalImage
                small={home1}
                large={home1}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
      <Home3 />
    </section>
  );
}

export default Home;
