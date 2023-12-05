import React from 'react'
import TextResizer from "../TextResizer";
import { Container, Row, Col } from "react-bootstrap";
import caso1 from "../../Assets/Casos/Caso1.png"
import caso2 from "../../Assets/Casos/Caso2.png"
import caso3 from "../../Assets/Casos/Caso3.png"
import ModalImage from "react-modal-image";

const NoCarrusel = () => {
    return (
        <>
            <Container>
                <Row className="justify-content-center text-center">
                    <Col md={8} className="home-about-description">
                        <h3>Albert Einstein</h3>
                        <br />
                        <ModalImage
                            small={caso1}
                            large={caso1}
                            alt="Albert Einstein"
                            className="img-fluid"
                            style={{ maxHeight: "450px" }}
                        />
                        <TextResizer
                            text="Consiguió alzarse como uno de los grandes científicos de la historia. 
                            Y es que a pesar de su síndrome de Asperger (transtorno dentro del TEA), a él le debemos la formulación de 
                            “La teoría de la relatividad”, ganando el Premio Nobel de Física en 1921."
                            maxFontSize={30}
                            minFontSize={12} />
                    </Col>

                    <Col md={8} className="home-about-description">
                        <h3>Susan Boyle</h3>
                        <br />
                        <ModalImage
                            small={caso2}
                            large={caso2}
                            alt="Susan Boyle"
                            className="img-fluid"
                            style={{ maxHeight: "450px" }}
                        />
                        <TextResizer
                            text="Susan Magdalane Boyle ​​​ es una cantante que se dio a conocer en 2009, 
                            cuando apareció como concursante en la tercera temporada del programa de televisión 
                            británico Britain's Got Talent.​ Boyle saltó casi inmediatamente a la fama mundial cuando 
                            cantó «I Dreamed a Dream» del musical Los miserables.​"
                            maxFontSize={30}
                            minFontSize={12} />

                    </Col>

                    <Col md={8} className="home-about-description">
                        <h3>Stephen Wiltshire</h3>
                        <br />
                        <ModalImage
                            small={caso3}
                            large={caso3}
                            alt="Stephen Wiltshire"
                            className="img-fluid"
                            style={{ maxHeight: "450px" }}
                        />
                        <TextResizer
                            text="El artista británico Stephen Wiltshire es mundialmente conocido 
                por su capacidad de reproducir un paisaje después de haberlo visto solo una vez, 
                de memoria.Wiltshire fue diagnosticado a los tres años con un trastorno del 
                espectro autista (TEA). "
                            maxFontSize={30}
                            minFontSize={12} />
                    </Col>
                </Row>


            </Container>
        </>
    )
}

export default NoCarrusel