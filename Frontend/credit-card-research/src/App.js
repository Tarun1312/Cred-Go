import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import SearchResults from "./components/SearchResults";
import Compare from "./components/Compare";
import Reviews from "./components/Reviews";

const App = () => {
  return (
    <Router>
      <Header />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/compare" element={<Compare />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/search" element={<SearchResults />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
