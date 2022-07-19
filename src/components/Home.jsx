import React, { useState, useEffect } from "react";

import StrainCard from './StrainCard';
import SearchIcon from "./search.svg";
import DropdownT from "./DropdownT";
import { searchAllStrains } from "../api/apiCalls";



const API_URL = "http://localhost:4000/cryptostrains";


const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [strains, setStrains] = useState([]);
  const [category, setCategory] = useState(); 
  const [category2, setCategory2] = useState(); 
  const [type, setType] = useState(); 

  const [body, setBody] = useState(); 
  const [background, setBackground] = useState(); 



  useEffect(() => {
    searchStrains("");
  }, []);

  const searchStrains = async (title) => {
    const response = await fetch(`${API_URL}?q=${title}`);
    const data = await response.json();

    setStrains(data);
  };

  const searchStrainsByCategory = async (title) => {
    const response = await fetch(`${API_URL}?category=${title}`);
    const data = await response.json();

    setStrains(data); 
  };

  const searchStrainsByCategory2 = async (title) => {
    const response = await fetch(`${API_URL}?category2=${title}`);
    const data = await response.json();

    setStrains(data); 
  };

  const searchStrainsByBody = async (title) => {
    const response = await fetch(`${API_URL}?body_like=${title}`);
    const data = await response.json();

    setStrains(data); 
  };

  const searchStrainsByBackground = async (title) => {
    const response = await fetch(`${API_URL}?background_like=${title}`);
    const data = await response.json();

    setStrains(data); 
  };

  const searchStrainsByType = async (title) => {
    const response = await fetch(`${API_URL}?type=${title}`);
    const data = await response.json();

    setStrains(data); 
  };

  return (
    <div className="app">
      <h1>CryptoStrains Collection</h1>

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
      <div className="dropdowns">
        {/* <DropdownT /> */}
        <h3>Category: </h3>
        <select value={category} 
        onChange={e=> { setCategory(e.target.value); searchStrainsByCategory(e.target.value); }}>
          <option></option>
          <option>Alien</option>
          <option>Animals</option>
          <option>Celebrity</option>
          <option>Cheese</option>
          <option>Chocolate</option>
          <option>Drug</option>
          <option>Famous</option>
          <option>Fantasy</option>
          <option>Food</option>
          <option>Fruit</option>
          <option>Ice</option>
          <option>Ice Cream</option>
          <option>Jewelry</option>
          <option>Legendary</option>
          <option>Neon</option>
          <option>OG</option>
          <option>Plant</option>
          <option>Sky</option>
          <option>Space</option>
          <option>Sweet</option>
          <option>Trippy</option>
          <option>Unicorn</option>
        </select>

        <h3>Category2: </h3>
        <select value={category2} 
        onChange={e=> { setCategory2(e.target.value); searchStrainsByCategory2(e.target.value); }}>
          <option></option>
          <option>Cheese</option>
          <option>Chocolate</option>
          <option>Cookies</option>
          <option>Diesel</option>
          <option>Gelato</option>
          <option>Glue</option>
          <option>Haze</option>
          <option>Kush</option>
          <option>OG</option>
          <option>Purple</option>
          <option>Skunk</option>
          <option>Zkittlez</option>
        </select>

        <h3>Body: </h3>
        <select value={body} 
        onChange={e=> { setBody(e.target.value); searchStrainsByBody(e.target.value); }}>
          <option></option>
          <option>Black</option>        
          <option>Blue</option>
          <option>Brown</option>
          <option>Chocolate</option>
          <option>Gold</option>
          <option>Green</option>
          <option>Grey</option>
          <option>Khaki</option>
          <option>Multi Color</option>
          <option>Neon Green</option>
          <option>Orange</option>
          <option>Pink</option>
          <option>Purple</option>
          <option>Rainbow</option>
          <option>Red</option>
          <option>Ruby</option>
          <option>Silver</option>
          <option>Vanilla</option>
          <option>White</option>
          <option>Yellow</option>
        </select>


        <h3>Background: </h3>
        <select value={background} 
        onChange={e=> { setBackground(e.target.value); searchStrainsByBackground(e.target.value); }}>
          <option></option>
          <option>Black</option>        
          <option>Blue</option>
          <option>Brown</option>
          <option>Dark Green</option>
          <option>Green</option>
          <option>Grey</option>
          <option>Orange</option>
          <option>Pink</option>
          <option>Purple</option>
          <option>Rainbow</option>
          <option>Red</option>
          <option>Ruby</option>
          <option>Sand</option>
          <option>Silver</option>
          <option>Vanilla</option>
          <option>White</option>
          <option>Yellow</option>
        </select>

        <h3>Type: </h3>
        <select value={type} 
        onChange={e=> { setType(e.target.value); searchStrainsByType(e.target.value); }}>
          <option></option>
          <option>mostly sativa</option>        
          <option>mostly indica</option>
          <option>hybrid</option>
        </select>
        
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

export default Home