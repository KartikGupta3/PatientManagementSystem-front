import React, { useState, useEffect } from 'react';
import './Treatment.css';

const Treatment = () => {
  const [treatments, setTreatments] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTreatment, setSelectedTreatment] = useState(null);

  useEffect(() => {
    // Here, you can fetch treatment data from an API or local storage
    const mockTreatments = [
      {
        id: 1,
        name: 'Medication A',
        description: 'Acetaminophen for pain relief and fever reduction.',
      },
      {
        id: 2,
        name: 'Therapy B',
        description: 'Cognitive Behavioral Therapy for anxiety and depression.',
      },
      {
        id: 3,
        name: 'Procedure C',
        description: 'Knee arthroscopy for meniscus tear repair.',
      },
      {
        id: 4,
        name: 'Exercise D',
        description: 'Strength training exercises for muscle building and toning.',
      },
    ];
    setTreatments(mockTreatments);
  }, []);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleTreatmentClick = (treatment) => {
    setSelectedTreatment(treatment);
  };

  const filteredTreatments = treatments.filter((treatment) =>
    treatment.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="treatment">
      <h2>Treatment Information</h2>
      <div className="treatment-content">
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search treatments..."
            value={searchTerm}
            onChange={handleSearch}
          />
        </div>
        <div className="treatment-list">
          <ul>
            {filteredTreatments.map((treatment) => (
              <li
                key={treatment.id}
                onClick={() => handleTreatmentClick(treatment)}
                className={selectedTreatment === treatment ? 'selected' : ''}
              >
                <h3>{treatment.name}</h3>
                <p>{treatment.description}</p>
              </li>
            ))}
          </ul>
        </div>
        {selectedTreatment && (
          <div className="treatment-details">
            <h3>{selectedTreatment.name}</h3>
            <p>{selectedTreatment.description}</p>
            {/* Add additional details or components for the selected treatment */}
          </div>
        )}
      </div>
    </div>
  );
};

export default Treatment;