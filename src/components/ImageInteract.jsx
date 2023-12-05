import React, { useState, useEffect } from 'react';

import Img1 from '../Assets/InteractiveImgs/Interactivo1.png';
import Img2 from '../Assets/InteractiveImgs/Interactivo2.png';
import Img3 from '../Assets/InteractiveImgs/Interactivo3.png';

import SoundSucces from '../Assets/sounds/success.mp3'

import Button from "react-bootstrap/Button";

const InteractiveImage = () => {

    const [audio] = useState(new Audio(SoundSucces));

    const [interactedAreas, setInteractedAreas] = useState(new Set());
    const [imageIndex, setImageIndex] = useState(0);
    const [successNotifications, setSuccessNotifications] = useState([]);
    const [isInteractionSuccessful, setInteractionSuccessful] = useState(false);

    const images = [
        { src: Img1, areas: [{ id: 1, coords: '90,230,165,300' }, { id: 2, coords: '165,322,265,400' }, { id: 3, coords: '480,200,540,252' }, { id: 4, coords: '660,211,720,262' }] },
        { src: Img2, areas: [{ id: 1, coords: '360,210,420,272' }, { id: 2, coords: '455,135,550,220' }] },
        { src: Img3, areas: [{ id: 1, coords: '450,120,548,180' }, { id: 2, coords: '630,140,700,185' }] },
    ];

    useEffect(() => {
        if (successNotifications.length === images[imageIndex].areas.length) {
            if (imageIndex < images.length - 1) {
                setImageIndex((prevIndex) => prevIndex + 1);
                setSuccessNotifications([]);
                setInteractedAreas(new Set()); // Reinicia el conjunto de áreas interactuadas para la nueva imagen
            } else {
                setInteractionSuccessful(true);
            }
            audio.play();
        }
    }, [successNotifications, imageIndex, audio, images]);

    const handleInteraction = (areaId) => {
        if (interactedAreas.has(areaId)) {
            return;
        }
        setSuccessNotifications((prevNotifications) => [...prevNotifications, `¡Encontraste la interacción ${areaId}!`]);
        setInteractedAreas((prevInteractedAreas) => new Set(prevInteractedAreas).add(areaId));
    };

    const handleReset = () => {
        setImageIndex(0);
        setSuccessNotifications([]);
        setInteractionSuccessful(false);
        setInteractedAreas(new Set());
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            {!isInteractionSuccessful ? (
                <div style={{ textAlign: 'center' }}>
                    <p><strong>¡Haz clic en donde veas personas saludando!</strong></p>
                    <div style={{ position: 'relative' }}>
                        <img
                            src={images[imageIndex].src}
                            alt={`Imagen interactiva ${imageIndex + 1}`}
                            useMap={`#interactiveMap${imageIndex}`}
                            style={{ cursor: 'pointer', maxWidth: '100%', height: 'auto' }}
                            draggable={false}
                        />
                        <map name={`interactiveMap${imageIndex}`}>
                            {images[imageIndex].areas.map((area) => (
                                <area
                                    key={area.id}
                                    shape="rect"
                                    coords={area.coords}
                                    alt={`Área interactiva ${area.id}`}
                                    onClick={() => handleInteraction(area.id)}
                                    style={{ cursor: 'pointer' }}
                                />
                            ))}
                        </map>
                        <div style={{ position: 'absolute', top: '0', left: '100%', marginLeft: '20px', textAlign: 'left' }}>
                            <h3>Mensajes:</h3>
                            <ul style={{ listStyleType: 'none', padding: '0' }}>
                                {successNotifications.map((notification, index) => (
                                    <li key={index}>{notification}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <br />
                    <Button onClick={handleReset}>Reiniciar Juego</Button>
                </div>
            ) : (
                <div>
                    <p><strong>¡Excelente! Identificaste interacciones sociales de manera exitosa.</strong></p>
                    <br />
                    <Button onClick={handleReset}>Reiniciar Juego</Button>
                </div>
            )}
            <br />
            <br />
        </div>
    );
};

export default InteractiveImage;