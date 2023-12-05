import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import { Row, Col } from "react-bootstrap";

const TextResizer = ({ text, maxFontSize, minFontSize }) => {
    const [fontSize, setFontSize] = useState(16); // Tamaño de fuente inicial

    const increaseFontSize = () => {
        if (fontSize < maxFontSize) {
            setFontSize(fontSize + 2);
        }
    };

    const decreaseFontSize = () => {
        if (fontSize > minFontSize) {
            setFontSize(fontSize - 2);
        }
    };

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
};

export default TextResizer;