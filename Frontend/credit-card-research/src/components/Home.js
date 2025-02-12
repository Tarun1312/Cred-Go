import React, { useState } from "react";
import "../styles/Home.css";

const Home = () => {
  const [values, setValues] = useState({
    restaurants: 0,
    groceries: 0,
    bills: 0,
    gas: 0,
    travel: 0,
    entertainment: 0,
    pharmacy: 0,
    other: 0,
  });

  const handleInputChange = (key, value) => {
    const numericValue = value.replace(/[^0-9]/g, ""); // Ensure only numeric input
    setValues({ ...values, [key]: parseInt(numericValue || "0", 10) });
  };

  const totalExpenses = Object.values(values).reduce((a, b) => a + b, 0);

  return (
    <div className="home-container">
      {/* Top Section */}
      <div className="card-section">
        <h1>Compare the best credit cards in Canada.</h1>
        <div className="card-grid">
          {[
            { img: "/icons/travel.png", label: "Travel cards" },
            { img: "/61f7cd9467553f0004c53e76 (1).png", label: "Cash back cards" },
            { img: "/icons/no-annual.png", label: "No annual fee cards" },
            { img: "/icons/balance-transfer.png", label: "Balance transfer cards" },
            { img: "/icons/instant-approval.png", label: "Instant approval cards" },
            { img: "/icons/newcomer.png", label: "Newcomer cards" },
            { img: "/icons/secured.png", label: "Secured cards" },
            { img: "/icons/no-fx.png", label: "No FX fee cards" },
          ].map((card, index) => (
            <div key={index} className="card">
              <img src={card.img} alt={card.label} />
              <p>{card.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Middle Section - Expense Calculator */}
      <div className="middle-section">
        <h2>Credit card comparison</h2>
        <p>
          Compare up to three credit cards side-by-side and customize the filters to
          discover which offers the most rewards and perks.
        </p>
        <div className="expense-grid">
          {/* Total Monthly Expenses */}
          <div className="expense-item total-expense">
            <label>Monthly expenses</label>
            <p>${totalExpenses.toLocaleString()}</p>
          </div>

          {/* Input Fields for Expenses */}
          {Object.keys(values).map((key) => (
            <div key={key} className="expense-item">
              <label>{key.charAt(0).toUpperCase() + key.slice(1)}</label>
              <input
                type="text"
                value={`$${values[key]}`}
                onChange={(e) => handleInputChange(key, e.target.value)}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Section - Credit Card Comparison */}
      <div className="bottom-section">
        <div className="comparison-placeholder">Name of credit card for comparison</div>
        <div className="comparison-placeholder">Name of credit card for comparison</div>
        <div className="comparison-placeholder">Name of credit card for comparison</div>
      </div>
    </div>
  );
};

export default Home;
