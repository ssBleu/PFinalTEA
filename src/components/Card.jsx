import React, { useState, useEffect } from 'react';
import poke1 from '../Assets/PokeImgs/Poke1.jpg';
import poke2 from '../Assets/PokeImgs/Poke2.jpg';
import poke3 from '../Assets/PokeImgs/Poke3.jpg';
import poke4 from '../Assets/PokeImgs/Poke4.jpg';
import poke5 from '../Assets/PokeImgs/Poke5.jpg';
import poke6 from '../Assets/PokeImgs/Poke6.jpg';
import poke7 from '../Assets/PokeImgs/Poke7.jpg';
import poke8 from '../Assets/PokeImgs/Poke8.jpg';
import question from '../Assets/PokeImgs/QuestionCard.png';
import SoundSucces from '../Assets/sounds/success.mp3';
import Button from "react-bootstrap/Button";


const shuffleArray = (array) => {
    const newArray = array.slice();
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
};

const generateCards = () => {
    const cardValues = [poke1, poke2, poke3, poke4, poke5, poke6, poke7, poke8];
    const cards = [...cardValues, ...cardValues]; // Creando pares
    return shuffleArray(cards);
};

const MemoryGame = () => { //
    const [audio] = useState(new Audio(SoundSucces));

    const [cards, setCards] = useState(generateCards());
    const [flippedIndices, setFlippedIndices] = useState([]);
    const [matchedPairs, setMatchedPairs] = useState([]);

    const handleCardClick = (index) => {
        if (flippedIndices.length === 2 || flippedIndices.includes(index) || matchedPairs.includes(cards[index])) {
            return; // Para que no se pueda cliquear los ya flipeados
        }

        setFlippedIndices((prevFlippedIndices) => [...prevFlippedIndices, index]);

        if (flippedIndices.length === 1) {
            // un pequeño delay
            setTimeout(() => checkForMatch(index), 1000);
        }
    };

    const checkForMatch = (index) => {
        const firstCard = cards[flippedIndices[0]];
        const secondCard = cards[index];

        if (firstCard === secondCard) {
            setMatchedPairs((prevMatchedPairs) => [...prevMatchedPairs, firstCard]);
            audio.play();
        }

        setFlippedIndices([]);
    };

    const resetGame = () => {
        setCards(generateCards());
        setFlippedIndices([]);
        setMatchedPairs([]);
    };

    useEffect(() => {
        if (matchedPairs.length === cards.length / 2) {
            audio.play();
            alert('¡Has ganado!');
        }
    }, [matchedPairs, cards]);

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '50px' }}>
            <p><strong>¡Encuentra los pares de imágenes!</strong></p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 100px)', gap: '10px' }}>
                {cards.map((card, index) => (
                    <div
                        key={index}
                        style={{
                            width: '100px',
                            height: '100px',
                            border: '1px solid #000',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            cursor: 'pointer',
                            backgroundColor: flippedIndices.includes(index) || matchedPairs.includes(card) ? '#ddd' : '#fff',
                        }}
                        onClick={() => handleCardClick(index)}
                    >
                        <img
                            src={flippedIndices.includes(index) || matchedPairs.includes(card) ? card : question}
                            alt={`Card ${index}`}
                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                    </div>
                ))}
            </div>
            <br />
            <div>
                <Button onClick={resetGame}>Reiniciar Juego</Button>
            </div>
        </div >
    );
};

export default MemoryGame;
