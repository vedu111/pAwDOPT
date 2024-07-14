import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import './PetDetails.css';

function PetDetails() {
  const { id } = useParams();
  const [pet, setPet] = useState(null);

  useEffect(() => {
    const fetchPetDetails = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/pets/${id}`);
        if (!response.ok) {
          throw new Error('Pet not found');
        }
        const petData = await response.json();
        setPet(petData);
      } catch (error) {
        console.error('Error fetching pet details:', error);
      }
    };

    fetchPetDetails();
  }, [id]);

  if (!pet) {
    return <div>Loading...</div>;
  }

  return (
    <div className="pet-details-page">
      <Navbar />
      <div className="pet-details-content">
        <h1 className="page-title">{pet.name}'s Details</h1>
        <div className="pet-info">
          <p><strong>Type:</strong> {pet.type}</p>
          <p><strong>Breed:</strong> {pet.breed}</p>
          <p><strong>Age:</strong> {pet.age} years</p>
          <p><strong>Health Information:</strong> {pet.healthInfo}</p>
          <p><strong>Compatibility:</strong> {pet.compatibility}</p>
          <p><strong>Date Added:</strong> {new Date(pet.dateAdded).toLocaleDateString()}</p>
          {/* Display photos if available */}
          <div className="pet-photos">
            {pet.photos && pet.photos.length > 0 && (
              pet.photos.map((photo, index) => (
                <img key={index} src={photo} alt={`Photo ${index + 1}`} />
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PetDetails;
