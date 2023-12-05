import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Card from "../Card";
import ImgInter from "../ImageInteract";
import TextResizer from "../TextResizer";

function Interaccion() {
    return (
        <Container fluid className="about-section">
            <Row style={{ justifyContent: "center" }}>
                <Col md={8} className="about-description">
                    <h1><strong className="altText">Juegos interactivos</strong></h1>
                    <br />
                    <TextResizer
                        text="A continuación, se muestran juegos interactivos desarrollados para
                        personas que se encuentran en el espectro autista (TEA)."
                        maxFontSize={30}
                        minFontSize={12} />
                    <br /> <br /> <br /> <br /><br /><br /><br /><br />
                    <h2>Juego de <strong className="altText">Memoria</strong></h2>
                    <br />
                    <TextResizer
                        text="El juego de la memoria se basa en gran medida en la memoria visual
                        y para algunos niños con autismo esta es una gran fortaleza.  Sin embargo, a medida que se relacionan entre sí pueden ser particularmente desafiantes
                        por lo que otros niños tendrán dificultades y sin mencionar la ubicación de un elemento cuando no se puede
                        ver directamente."
                        maxFontSize={30}
                        minFontSize={12} />
                    <br /> <br /> <br /> <br /><br /><br /><br /><br />
                    <Card></Card>

                    <br /> <br /> <br /> <br /><br /><br /><br /><br />

                    <h2>Juego de <strong className="altText">Interacción Social</strong></h2>
                    <br />
                    <TextResizer
                        text="Los niños con TEA presentan dificultades para desarrollar el juego simbólico debido a su falta de
                        habilidades sociales, comunicación de imitación. Las siguientes actividades nos van ayudar a desarrollar
                        el juego simbólico y la identificación de habilidades sociales en niños TEA"
                        maxFontSize={30}
                        minFontSize={12} />
                    <br /> <br /> <br /> <br /><br /><br /><br /><br />
                    <ImgInter></ImgInter>
                </Col>
            </Row>
        </Container>
    );
}

export default Interaccion;
