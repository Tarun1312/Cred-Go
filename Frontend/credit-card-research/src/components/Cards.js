import React, { useState } from "react";
import "../styles/Card.css";

const Card = ({ card, onRemove }) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div className={`card ${flipped ? "flipped" : ""}`} onClick={() => setFlipped(!flipped)}>
      {!flipped ? (
        <div className="card-front">
          <h3>{card.name}</h3>
          <p>{card.yearlyCost}</p>
        </div>
      ) : (
        <div className="card-back">
          <h3>{card.name}</h3>
          <p>Annual Fee: {card.annualFee}</p>
          <p>{card.rewards}</p>
          <p>{card.welcomeBonus}</p>
          <button onClick={(e) => { e.stopPropagation(); onRemove(); }}>Remove</button>
        </div>
      )}
    </div>
  );
};

export default Card;
