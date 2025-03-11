import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Cards";
import "../styles/CardComparison.css";

const CardComparison = () => {
  const [cards, setCards] = useState([]); // All cards from backend
  const [selectedCards, setSelectedCards] = useState([]); // Cards for comparison
  const [searchTerm, setSearchTerm] = useState("");

  // Fetch all cards from the backend
  useEffect(() => {
    axios
      .get("http://localhost:8081/api/cards") // Replace with your backend URL
      .then((response) => {
        setCards(response.data);
      })
      .catch((error) => {
        console.error("Error fetching cards:", error);
      });
  }, []);

  // Add card to the comparison list
  const addCard = (card) => {
    if (selectedCards.length < 3 && !selectedCards.find((c) => c.id === card.id)) {
      setSelectedCards([...selectedCards, card]);
    }
  };

  // Remove card from the comparison list
  const removeCard = (id) => {
    setSelectedCards(selectedCards.filter((card) => card.id !== id));
  };

  // Filter cards based on the search term
  const filteredCards = cards.filter((card) =>
    card.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="comparison-container">
      <h1>Credit Card Comparison</h1>
      <p>Compare up to three credit cards side-by-side and explore their details.</p>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search for a card"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-bar"
      />

      {/* Selected Cards */}
      <div className="comparison-grid">
        {selectedCards.map((card) => (
          <Card key={card.id} card={card} onRemove={() => removeCard(card.id)} />
        ))}
        {selectedCards.length < 3 && (
          <div className="placeholder">
            <p>Add a card for comparison</p>
          </div>
        )}
      </div>

      {/* Search Results */}
      <div className="search-results">
        {filteredCards.map((card) => (
          <div key={card.id} className="search-result" onClick={() => addCard(card)}>
            <p>{card.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardComparison;
