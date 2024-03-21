import React from 'react';

const Popup = ({ formData }) => {
  // Check if formData is defined
  if (!formData) {
    return null;
  }

  // Destructure formData with default values
  const { clientName = '', projectId = '', propertyType = '', carpetArea = '', city = '', categories = [], subcategories = [], planType = [] } = formData;

  return (
    <div className="popup">
      <h2>Client Details</h2>
      <p>Client Name: {clientName}</p>
      <p>Project ID: {projectId}</p>
      <p>Property Type: {propertyType}</p>
      <p>Carpet Area: {carpetArea}</p>
      <p>City: {city}</p>
      <p>Categories: {categories.join(', ')}</p>
      <p>Subcategories: {subcategories.join(', ')}</p>
      <p>Plan Type: {planType.join(', ')}</p>
    </div>
  );
};

export default Popup;
