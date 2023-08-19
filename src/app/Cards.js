import React, {useEffect, useState} from 'react';
import "../App.css";
import CardsCarousel from "./CardsCarousel";
import CardsNotCarousel from "./CardsNotCarousel";

const Cards = ({ numberDisplayInOneLine, isSlider }) => {
    const [numberState, setNumber] = useState([]);

    useEffect(() => {
        if (numberDisplayInOneLine) {
            const numbers = [];
            for (let i = 0; i < numberDisplayInOneLine; i++) {
                numbers.push(i);
            }
            setNumber(numbers);
        }
    }, [numberDisplayInOneLine]);

    return (
        <div className={'style-cards'}>
            {isSlider ? (
                <CardsCarousel numberState={numberState} />
            ) : (
                <CardsNotCarousel numberState={numberState} />
            )}
        </div>
    );
};

export default Cards;