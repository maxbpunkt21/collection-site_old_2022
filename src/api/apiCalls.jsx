import React, { useState, useEffect } from "react";

const API_URL = "http://localhost:4000/cryptostrains";

export const searchAllStrains = async (title) => {
    const [strains, setStrains] = ([]);
    const response = await fetch(`${API_URL}?q=${title}`);
    const data = await response.json();

    return data; 
  };

  export const searchStrainsByCategory = async (title) => {
    const [strains, setStrains] = ([]);
    const response = await fetch(`${API_URL}?category=${title}`);
    const data = await response.json();

    return data; 

  };

