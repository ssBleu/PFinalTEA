import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import { Row, Col } from "react-bootstrap";

const TextResizer = ({ text, maxFontSize, minFontSize }) => {
    //useState para gestionar el estado del tamaño de la fuente (inicial 16)
    const [fontSize, setFontSize] = useState(16); // Tamaño de fuente inicial

    //aumenta el tamaño de fuente en 2 unidades si no ha alcanzado el tamaño máximo definido por maxFontSize.
    const increaseFontSize = () => {
        if (fontSize < maxFontSize) {
            setFontSize(fontSize + 2);
        }
    };

    //disminuye el tamaño de fuente en 2 unidades si no ha alcanzado el tamaño mínimo definido por minFontSize.
    const decreaseFontSize = () => {
        if (fontSize > minFontSize) {
            setFontSize(fontSize - 2);
        }
    };

    //renderizado
    return (
        <Row style={{ justifyContent: "center", position: "relative" }}>
            <Col md={8} className="home-about-description">
                <p style={{ fontSize, margin: "0 10px" }}>{text}</p>
                <br /><br /><br />
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <Button onClick={decreaseFontSize} style={{ fontSize: "30px" }} > <b>-</b></Button>
                    <Button onClick={increaseFontSize} style={{ fontSize: "30px" }} > <b>+</b></Button>
                </div >
            </Col>
        </Row>

    );
    //El texto se muestra en un elemento p con un tamaño de fuente dinámico (fontSize) y márgenes.
    //Se crean dos botones con el símbolo "+" y "-" al hacer clic en estos botones se llaman a las func increaseFontSize y decreaseFontSize.
};

export default TextResizer;
