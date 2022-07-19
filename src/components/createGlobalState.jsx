import { createGlobalState } from 'react-hooks-global-state'
import React, { useState } from 'react';
const API_URL = "http://localhost:4000/cryptostrains";

[strains, setStrains] = useState([]);

const { setGlobalState, useGlobalState } = createGlobalState({
    strains = []  
}); 
