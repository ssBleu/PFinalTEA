import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import TextResizer from "../TextResizer";

function Home3() {

    const retosText = (
        <>
            <p>
                Los síntomas que afectan las habilidades sociales de personas con TEA son:
            </p>
            <ul style={{ listStyle: "none" }}>
                <li>Retrasos en el desarrollo del <span className="altText">habla</span>.</li>
                <li>Incapacidad para leer <span className="altText">señales no verbales</span>.</li>
                <li>No comprender los <span className="altText">sentimientos</span> de los demás.</li>
                <li>Dificultad para <span className="altText">entender</span> chistes, sarcasmo o burlas.</li>
                <li>Ser incapaz de <span className="altText">mantener una conversación</span>.</li>
                <li>Repetir palabras y frases una y otra vez <span className="altText">(ecolalia)</span> sin funcionalidad o sentido.</li>
                <li>Da respuestas no relacionadas a preguntas, o estar <span className="altText">fuera del contexto</span> de la conversación.</li>
            </ul>
            <p>
                Al observar estos síntomas, es comprensible que un niño con autismo pueda tener dificultades para interactuar con los demás.
                Sin embargo, estos síntomas pueden variar sobre todo porque el TEA es un espectro (no se presenta de la misma manera en todas las personas).
            </p>
        </>
    );

    return (
        <Container fluid className="home-about-section" id="about">
            <Container>
                <Row style={{ justifyContent: "center" }}>
                    <Col md={10} className="home-about-description">
                        <h1 style={{ fontSize: "2.6em" }}>
                            ¿Qué <span className="altText">retos </span> tienen las personas con TEA?
                        </h1>

                        <TextResizer
                            text={retosText}
                            maxFontSize={30}
                            minFontSize={12} />

                    </Col>
                </Row>

            </Container>
        </Container>
    );
}
export default Home3;
