import React, { useState, useEffect } from "react";

import Routes from "./config/Routes";

import StrainCard from './components/StrainCard';
import SearchIcon from "./search.svg";
import "./App.css";

const API_URL = "http://localhost:4000/cryptostrains";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [strains, setStrains] = useState([]);

  useEffect(() => {
    searchStrains("Haze");
  }, []);

  const searchStrains = async (title) => {
    const response = await fetch(`${API_URL}?q=${title}`);
    const data = await response.json();

    setStrains(data);
  };

  return (
    <div className="app">
      <h1>Collection App</h1>

      <div className="search">
        <input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search For Strains"
        />
        <img
          src={SearchIcon}
          alt="search"
          onClick={() => searchStrains(searchTerm)}
        />
      </div>

      {strains?.length > 0 ? (
        <div className="container">
          {strains.map((strain) => (
            <StrainCard strain={strain} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No Strains found</h2>
        </div>
      )}
    </div>
  );
};

export default App;