import React, { useEffect, useState } from "react";
import Card from "./Cards";
import "../styles/CardList.css";

const CardList = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    // Fetch credit card data from the backend
    fetch("/api/cards")
      .then((response) => response.json())
      .then((data) => setCards(data))
      .catch((error) => console.error("Error fetching card data:", error));
  }, []);

  return (
    <div className="card-list">
      <h2>Credit card comparison</h2>
      <p>Click on a card to see its details.</p>
      <div className="card-grid">
        {cards.map((card) => (
          <Card key={card.id} card={card} />
        ))}
      </div>
    </div>
  );
};

export default CardList;
