import React from "react";
import "../styles/Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">Cred-Go</div>
      <nav className="nav-links">
        <a href="/">Home</a>
        <a href="/compare">Compare</a>
        <a href="/reviews">Reviews</a>
      </nav>
    </header>
  );
};

export default Header;
