import React from 'react';

const CarpetArea = ({ carpetArea, setCarpetArea }) => {
  const handleCarpetAreaChange = (e) => {
    const value = e.target.value;
    if (/^\d*\.?\d*$/.test(value)) {
      setCarpetArea(value);
    }
  };
  return (
    <div>
      <label htmlFor='propertyType' className='container-center-label-above-field'>Carpet Area</label>
      <input
        type="text"
        value={carpetArea}
        onChange={handleCarpetAreaChange}
        placeholder="Carpet Area (sq ft)"
        />
    </div>
  );
};

export default CarpetArea;