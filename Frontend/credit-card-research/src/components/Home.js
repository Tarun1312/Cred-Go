// src/components/Home.js
import React from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css"; 

const Home = () => {
  return (
    <div className="home-container">
      {/* Top Section */}
      <div className="card-section">
        <h1>Compare the best credit cards in Canada.</h1>
        <div className="card-grid">
          <div className="card">
            <img src="/icons/travel.png" alt="Travel" />
            <Link to="/category/Travel">Travel Cards</Link>
          </div>
          <div className="card">
            <img src="/icons/cashback.png" alt="Cash Back" />
            <Link to="/category/CashBack">Cash Back Cards</Link>
          </div>
          <div className="card">
            <img src="/icons/no-annual.png" alt="No Annual Fee" />
            <Link to="/category/NoAnnualFee">No Annual Fee Cards</Link>
          </div>
          <div className="card">
            <img src="/icons/newcomer.png" alt="Newcomer" />
            <Link to="/category/Newcomer">Newcomer Cards</Link>
          </div>
          <div className="card">
            <img src="/icons/no-fx.png" alt="No FX Fee" />
            <Link to="/category/NoFXFee">No FX Fee Cards</Link>
          </div>
        </div>
      </div>

      {/* Middle Section */}
      <div className="middle-section">
        <h2>Credit Card Comparison</h2>
        <p>
          Compare up to three credit cards side-by-side and customize the filters
          to discover which offers the most rewards and perks.
        </p>
        <div className="expense-grid">
          <input type="text" placeholder="Monthly expenses" />
          <input type="text" placeholder="Restaurants" />
          <input type="text" placeholder="Groceries" />
          <input type="text" placeholder="Bills" />
          <input type="text" placeholder="Gas" />
          <input type="text" placeholder="Travel" />
          <input type="text" placeholder="Entertainment" />
          <input type="text" placeholder="Pharmacy" />
          <input type="text" placeholder="Other" />
        </div>
      </div>

      {/* Bottom Section */}
      <div className="bottom-section">
        <div className="comparison-placeholder">Name of credit card for comparison</div>
        <div className="comparison-placeholder">Name of credit card for comparison</div>
        <div className="comparison-placeholder">Name of credit card for comparison</div>
      </div>
    </div>
  );
};

export default Home;
