import React from 'react';

import { Link } from 'react-router-dom';

const StrainCard = ({ strain: {id, name} }) => {
  const link = '/' + id;  
  return (
    <Link to={link}>
      <div className="movie" key={name}>
        <div>
            <img src={require(`./img/0${id}.jpg`)} alt={name}/>
          <span>{id}</span>
          <h3>{name}</h3>
        </div>
      </div>
    </Link>
  );
}

export default StrainCard;