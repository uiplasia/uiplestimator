import React from 'react';

export const ceilingHeights = [
  { id: '10ft', label: '10 ft' },
  { id: '11ft', label: '11 ft' },
  { id: '12ft', label: '12 ft' },
  { id: '13ft', label: '13 ft' },
  { id: '14ft', label: '14 ft' },
  { id: '14ft+', label: '14 ft +' },
];

const CeilingHeight = ({ ceilingHeight, setCeilingHeight }) => {
  const handleCeilingHeightChange = (e) => {
    setCeilingHeight(e.target.value);
  };

  return (
    <div>
        <label htmlFor='propertyType' className='container-center-label-above-field'>Ceiling Height</label>
      {ceilingHeights.map((height) => (
        <label key={height.id}>
          <input
            type="radio"
            name="ceilingHeight"
            value={height.id}
            checked={ceilingHeight === height.id}
            onChange={handleCeilingHeightChange}
          />
          {height.label}
        </label>
      ))}
    </div>
  );
};

export default CeilingHeight;