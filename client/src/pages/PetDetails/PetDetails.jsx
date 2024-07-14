import React from 'react';
import { useParams, useLocation } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import './PetDetails.css';
import { petsData } from '../Adopt/Adopt';

function PetDetails() {
  const { id } = useParams();
  const location = useLocation();
  const pet = location.state?.pet || petsData.find(p => p.id === parseInt(id));

  if (!pet) {
    return <div>Pet not found</div>;
  }

  return (
    <div className="pet-details-page">
      <Navbar />
      <div className="pet-details-content">
        <div className="pet-image-large">
          <img src={pet.image} alt={pet.name} />
        </div>
        <h1 className="pet-name-large">{pet.name}</h1>
        <div className="pet-info-section">
          <h2>About {pet.name}</h2>
          <p>{pet.description}</p>
        </div>
        <div className="pet-info-section">
          <h2>Health Information</h2>
          <p>{pet.health || 'Health information not available.'}</p>
        </div>
        <div className="pet-info-section">
          <h2>Compatibility</h2>
          <p>{pet.compatibility || 'Compatibility information not available.'}</p>
        </div>
        <button className="adopt-button-large">Adopt Me</button>
      </div>
    </div>
  );
}

export default PetDetails;