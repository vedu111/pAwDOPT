import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import './Adopt.css';
export const petsData = [
    { id: 1, name: 'Buddy', type: 'Dog', breed: 'Golden Retriever', age: 3, description: 'Friendly and energetic golden retriever looking for an active family.', image: 'path_to_buddy_image.jpg' },
    { id: 2, name: 'Max', type: 'Dog', breed: 'German Shepherd', age: 2, description: 'Loyal and intelligent German Shepherd, great with kids.', image: 'path_to_max_image.jpg' },
    { id: 3, name: 'Whiskers', type: 'Cat', breed: 'Siamese', age: 2, description: 'Gentle Siamese cat who loves to cuddle and play.', image: 'path_to_whiskers_image.jpg' },
    { id: 4, name: 'Luna', type: 'Cat', breed: 'Maine Coon', age: 4, description: 'Majestic Maine Coon with a friendly personality.', image: 'path_to_luna_image.jpg' },
  ];
  

function Adopt() {
  const [selectedType, setSelectedType] = useState('All');
  const [selectedBreed, setSelectedBreed] = useState('All');
  const [availableBreeds, setAvailableBreeds] = useState([]);
  const animalTypes = ['All', ...new Set(petsData.map(pet => pet.type))];

  useEffect(() => {
    if (selectedType === 'All') {
      setAvailableBreeds(['All']);
    } else {
      const breeds = ['All', ...new Set(petsData
        .filter(pet => pet.type === selectedType)
        .map(pet => pet.breed))];
      setAvailableBreeds(breeds);
    }
    setSelectedBreed('All');
  }, [selectedType]);

  const filteredPets = petsData.filter(pet => 
    (selectedType === 'All' || pet.type === selectedType) &&
    (selectedBreed === 'All' || pet.breed === selectedBreed)
  );

  return (
    <div className="adoption-page">
      <Navbar />
      <div className="adoption-content">
        <h1 className="page-title">Adopt a Pet</h1>
        
        <div className="filter-section">
          <div className="filter-group">
            <label htmlFor="pet-type" className="filter-label">Animal Type:</label>
            <select 
              id="pet-type" 
              className="filter-select"
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
            >
              {animalTypes.map(type => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
          </div>

          <div className="filter-group">
            <label htmlFor="pet-breed" className="filter-label">Breed:</label>
            <select 
              id="pet-breed" 
              className="filter-select"
              value={selectedBreed}
              onChange={(e) => setSelectedBreed(e.target.value)}
            >
              {availableBreeds.map(breed => (
                <option key={breed} value={breed}>{breed}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="pet-list">
          {filteredPets.map(pet => (
            <Link 
              key={pet.id} 
              to={{
                pathname: `/adopt/${pet.id}`,
                state: { pet }
              }} 
              className="pet-card"
            >
              <div className="pet-info">
                <h2 className="pet-name">{pet.name}</h2>
                <p className="pet-breed">{pet.breed}</p>
                <p className="pet-age">Age: {pet.age} years</p>
                <p className="pet-description">{pet.description}</p>
                <button className="adopt-button">Learn More</button>
              </div>
              <div className="pet-image">
                <img src={pet.image} alt={pet.name} />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Adopt;