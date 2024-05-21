import React from "react";

interface Props {
    rank: string,
    suit: string,
    suitType: string
}

const Card: React.FC<Props> = ({rank, suit, suitType}) => {
    return (
        <span className={`card rank-${rank} ${suit}`}>
            <span className="rank">{rank}</span>
            <span className="suit">{suitType}</span>
        </span>
    );
};

export default Card;