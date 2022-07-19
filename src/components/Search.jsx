import React, { useState, useEffect } from "react";

import StrainCard from './StrainCard';
import SearchIcon from "./search.svg";

const API_URL = "http://localhost:4000/cryptostrains";

const Search = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [strains, setStrains] = useState([]);
  
    useEffect(() => {
      searchStrains("");
    }, []);
  
    const searchStrains = async (title) => {
      const response = await fetch(`${API_URL}?q=${title}`);
      const data = await response.json();
  
      setStrains(data);
    }

  return (
      <div>
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
        </div>  )
}

export default Search