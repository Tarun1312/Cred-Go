import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "../styles/CreditCardList.css"; // Ensure this file exists

const CreditCardList = () => {
  const { category } = useParams();
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true); // Add loading state
  const [error, setError] = useState(null); // Add error state

  useEffect(() => {
    setLoading(true);
    setError(null);
    console.log(`Fetching cards for category: ${category}`);

    axios
      .get(`http://localhost:8080/api/cards/category/${category}`)
      .then((response) => {
        console.log("API Response:", response.data); // ✅ Check if data is received
        setCards(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching cards:", error);
        setError("Failed to load credit cards.");
        setLoading(false);
      });
  }, [category]);

  return (
    <div className="credit-card-list">
      <h1>{category} Credit Cards</h1>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {cards.length > 0 ? (
        <div className="card-grid">
          {cards.map((card) => (
            <div key={card.id} className="card-container">
              <div className="card-content">
                {/* Left Section - Main Info */}
                <div className="card-info">
                  <h2 className="card-title">{card.name}</h2>
                  <div className="rating">
                    ⭐⭐⭐⭐☆ <span>4.0 Ratehub rated</span>
                  </div>
                  <span className="best-tag">Best for {category} Points</span>
                  <div className="highlight">
                    <span>First Year Reward</span>
                    <h3>${card.yearlyCost}/yr</h3>
                    <p>Based on spending $2,200/mo after ${card.annualFee} annual fee</p>
                  </div>
                  <div className="reward-details">
                    <h4>Earn Rewards</h4>
                    <p>{card.rewards}</p>
                    <h4>Welcome Bonus</h4>
                    <p>{card.welcomeBonus}</p>
                  </div>
                </div>

                {/* Right Section - Image and Button */}
                <div className="card-actions">
                  <img 
                    src={card.imageUrl} 
                    alt={card.name} 
                    onError={(e) => { 
                      e.target.src = "/images/placeholder.png"; // ✅ Fallback image
                    }} 
                  />
                  <button className="btn-primary">Go to Site</button>
                  <button className="btn-secondary">Check Eligibility</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        !loading && <p>No credit cards available for {category}.</p>
      )}
    </div>
  );
};

export default CreditCardList;
