import React from 'react';

export const propertyTypes = [
  { id: 'apartment', label: 'Apartment' },
  { id: 'bungalow', label: 'Bungalow' },
  { id: 'villa', label: 'Villa' },
  { id: 'farmhouse', label: 'Farmhouse' },
];

const PropertyType = ({ propertyType, setPropertyType }) => {
  const handlePropertyTypeChange = (e) => {
    setPropertyType(e.target.value);
  };

  return (
    <div>
        <label htmlFor='propertyType' className='container-center-label-above-field'>Property Type</label>
      {propertyTypes.map((type) => (
        <label key={type.id}>
          <input
            type="radio"
            name="propertyType"
            value={type.id}
            checked={propertyType === type.id}
            onChange={handlePropertyTypeChange}
          />
          {type.label}
        </label>
      ))}
    </div>
  );
};

export default PropertyType;
