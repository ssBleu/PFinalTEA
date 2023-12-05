import Carousel from 'react-bootstrap/Carousel';
import caso1 from "../../Assets/Casos/Caso1.png"
import caso2 from "../../Assets/Casos/Caso2.png"
import caso3 from "../../Assets/Casos/Caso3.png"
import ModalImage from "react-modal-image";

function Carrusel() {
    return (
        <Carousel>
            <Carousel.Item>
                <ModalImage
                    small={caso1}
                    large={caso1}
                    alt="Albert Einstein"
                    className="img-fluid"
                    style={{ maxHeight: "450px" }}
                    width={400}
                    height={350}
                />
                <Carousel.Caption>
                    <h3 style={{ color: "greenyellow", fontSize: "25px" }}><strong>Albert Einstein</strong></h3>
                    <p style={{ color: "white", background: "black", fontSize: "18px" }} >
                        <strong>Uno de los grandes científicos de la historia. Le debemos la formulación de
                            “La teoría de la relatividad</strong>
                    </p>
                </Carousel.Caption>
                <br /><br /><br /><br /><br /><br /><br /><br />
            </Carousel.Item>

            <Carousel.Item>
                <ModalImage
                    small={caso2}
                    large={caso2}
                    alt="Susan Boyle"
                    className="img-fluid"
                    style={{ maxHeight: "450px" }}
                    width={400}
                    height={350}
                />

                <Carousel.Caption>
                    <h3 style={{ color: "greenyellow", fontSize: "25px" }}><strong>Susan Boyle</strong></h3>
                    <p style={{ color: "white", background: "black", fontSize: "18px" }} >
                        <strong>Susan es una cantante y compositora británica que saltó a la fama después de
                            participar en el programa Britain's Got Talent. Está diagnosticada de Asperger.</strong>
                    </p>
                </Carousel.Caption>
                <br /><br /><br /><br /><br /><br /><br /><br />
            </Carousel.Item>
            <Carousel.Item>
                <ModalImage
                    small={caso3}
                    large={caso3}
                    alt="Stephen Wiltshire"
                    className="img-fluid"
                    style={{ maxHeight: "450px" }}
                    width={400}
                    height={350}
                />

                <Carousel.Caption>
                    <h3 style={{ color: "greenyellow", fontSize: "25px" }}><strong>Stephen Wiltshire</strong></h3>
                    <p style={{ color: "white", background: "black", fontSize: "18px" }} >
                        <strong>El artista británico Stephen Wiltshire es mundialmente conocido
                            por su capacidad de reproducir un paisaje después de haberlo visto solo una vez</strong>
                    </p>
                </Carousel.Caption>
                <br /><br /><br /><br /><br /><br /><br /><br />
            </Carousel.Item>
        </Carousel >
    );
}

export default Carrusel;