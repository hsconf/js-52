import './App.css';
import React, { useState } from 'react';
import Card from "./Components/Cards/card.tsx"
import CardDeck from './lib/card/CardDeck';
import CardModel from './lib/card/Card';

const App: React.FC = () => {
    const [hand, setHand] = useState<CardModel[]>([]);

    const dealCards = () => {
        const deck = new CardDeck();
        setHand(deck.getCards(5));
    };

    return (
        <div className="App">
            <button onClick={dealCards}>Раздать карты</button>
            {hand.length > 0 && (
                <div className="playingCards faceImages">
                    {hand.map((card, index) => (
                        <Card key={index} rank={card.rank} suit={card.suit} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default App;
