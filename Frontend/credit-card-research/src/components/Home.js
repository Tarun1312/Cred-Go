// src/components/Home.js
import React from "react";
import "../styles/Home.css"; 

const Home = () => {
  return (
    <div className="home-container">
      {/* Top Section */}
      <div className="card-section">
  <h1>Compare the best credit cards in Canada.</h1>
  <div className="card-grid">
    <div className="card">
    <img src="/61f7cd9467553f0004c53e76 (1).png" alt="Travel cards" />
      <p>Travel cards</p>
    </div>
    <div className="card">
    <img src="/icons/no-annual.png" alt="Cash Back" />
      <p>Cash back cards</p>
    </div>
    <div className="card">
      <img src="/icons/no-annual.png" alt="No Annual Fee" />
      <p>No annual fee cards</p>
    </div>
    <div className="card">
      <img src="/icons/balance-transfer.png" alt="Balance Transfer" />
      <p>Balance transfer cards</p>
    </div>
    <div className="card">
      <img src="/icons/instant-approval.png" alt="Instant Approval" />
      <p>Instant approval cards</p>
    </div>
    <div className="card">
      <img src="/icons/newcomer.png" alt="Newcomer" />
      <p>Newcomer cards</p>
    </div>
    <div className="card">
      <img src="/icons/secured.png" alt="Secured" />
      <p>Secured cards</p>
    </div>
    <div className="card">
      <img src="/icons/no-fx.png" alt="No FX Fee" />
      <p>No FX fee cards</p>
    </div>
  </div>
</div>


      {/* Middle Section */}
      <div className="middle-section">
        <h2>Credit card comparison</h2>
        <p>
          Compare up to three credit cards side-by-side and customize the
          filters to discover which offers the most rewards and perks.
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
