import React, {useState, useEffect} from 'react'
import StrainCard from './StrainCard';

const API_URL = "http://localhost:4000/cryptostrains";

function DropdownT()  {
  const [searchTerm, setSearchTerm] = useState("");
  const [strains, setStrains] = useState([]);

  // useEffect((selects) => {
  //   searchStrains(selects);
  // }, []);

  const searchStrains = async (title) => {
    const response = await fetch(`${API_URL}?category=${title}`);
    const data = await response.json();

    setStrains(data);
  };


  const [selects, setSelects]=useState(); 
  
  return (
    <div>
      <h1>{selects}</h1>
      <select value={selects} 
      onChange={e=> { setSelects(e.target.value); searchStrains(e.target.value); }}>
        <option></option>
        <option>Fruit</option>
        <option>Legendary</option>
        <option>Ice Cream</option>
        <option>Sweet</option>
        <option>Famous</option>
        <option>Celebrity</option>



      </select>
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

  )
}

export default DropdownT