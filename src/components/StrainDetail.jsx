import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';


const API_URL = "http://localhost:4000/cryptostrains";

const StrainDetail = () => {

    const { id } = useParams();
    const [strain, setStrain] = useState([]);  

    const searchStrains = async (ids) => {
        const response = await fetch(`${API_URL}/${ids}`);
        const data = await response.json();

        setStrain(data);
    }
    
    useEffect(() => {
        searchStrains(id);
    }, []);    

  return (
    <div> 
        <h1>CryptoStrain #{id}</h1>
        <h2>{strain.name}</h2>
        <img src={require(`./img/0${id}.jpg`)} alt="a"></img> 
        <div className="details">
            <h2>THC: {strain.thc}%</h2>
            <h2>Type: {strain.type}</h2>
            <h2>Body: {strain.body}</h2>
            <h2>Background: {strain.background}</h2>
            <h2>Category: {strain.category}</h2>
            <h2>Category 2: {strain.category2}</h2>
        </div>

    </div>
  )
}

export default StrainDetail