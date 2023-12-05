import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import card1 from "../../Assets/Investigacion/card1.png";
import card2 from "../../Assets/Investigacion/card2.png";
import card3 from "../../Assets/Investigacion/card3.png";
import card4 from "../../Assets/Investigacion/card4.png";
import card5 from "../../Assets/Investigacion/card5.png";
import TextResizer from "../TextResizer";
function Investigacion() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          Investigaciones <strong className="altText">Recientes </strong>
        </h1>
        <p style={{ color: "white" }}>
          <TextResizer
            text="Algunos de los trabajos realizados en 2022 relacionados al autismo."
            maxFontSize={30}
            minFontSize={12} />
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={card1}
              isBlog={false}
              title="LA GENÉTICA DEL CEREBRO Y LAS DIFICULTADES SENSORIALES ESTÁN EL FOCO."
              description=""
              ghLink="https://pubmed.ncbi.nlm.nih.gov/35341582/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={card2}
              isBlog={false}
              title="IDENTIFICACIÓN TEMPRANA DE LOS PRIMEROS SIGNOS"
              description=""
              ghLink="https://onlinelibrary.wiley.com/doi/10.1002/aur.2760"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={card3}
              isBlog={false}
              title="LA GENÉTICA ES UNA PIEZA CLAVE DEL ROMPECABEZAS, PERO EL AMBIENTE TAMBIEN INFLUYE."
              description=""
              ghLink="https://www.researchgate.net/publication/355353998_Mapping_the_genetic_and_environmental_aetiology_of_autistic_traits_in_Sweden_and_the_United_Kingdom"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={card4}
              isBlog={false}
              title="LOS GENES ASOCIADOS A LA DEPRESIÓN"
              description=""
              ghLink="https://www.researchgate.net/publication/355353998_Mapping_the_genetic_and_environmental_aetiology_of_autistic_traits_in_Sweden_and_the_United_Kingdom"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={card5}
              isBlog={false}
              title="LA INTERVENCION MEDIADA POR LOS PADRES Y MADRES REALMENTE FUNCIONA."
              description=""
              ghLink="https://www.frontiersin.org/articles/10.3389/fpsyt.2021.773604/full"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Investigacion;
