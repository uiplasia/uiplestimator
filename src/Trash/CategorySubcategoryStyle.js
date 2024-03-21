import React, { useState } from 'react';
import './CategorySubcategoryStyleK.css';

const CategorySubcategoryStyle = () => {
  const [categories, setCategories] = useState([
    { name: 'Structural Work', subcategories: ['RCC Work', 'Still Framing Work', 'Pre Engineered Building Work'] },
    { name: 'Brick & Masonry Work', subcategories: ['Red Bricks', 'AAC Blocks', 'Concrete Blocks','Plaster Work','WaterProofing','Kitchen Platform Base (Masonry,Vertical Support,Tiling Etc.)'] },
    { name: 'Stone Work (Platform , Wall Cladding , Dedo Work , Basin Counter)', subcategories: ['Tiles', 'Marble', 'Quartz','Granite'] },
    { name: 'Doors & Windows Installation', subcategories: ['Wooden', 'UPVC', 'Aluminium','Steel'] },
  ]);

  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedSubcategory, setSelectedSubcategory] = useState('');
  const [selectedPlanTypes, setSelectedPlanTypes] = useState([]);

  const planTypes = [
    // { name: 'Neutral', value: 'Neutral' },
    { name: 'Premium', value: 'Premium' },
    { name: 'Premium plus', value: 'Premium plus' },
    { name: 'Luxury', value: 'Luxury' },
    { name: 'Ultra Luxury', value: 'Ultra Luxury' },
  ];

  const handleCategoryClick = (categoryName) => {
    setSelectedCategory(categoryName);
    setSelectedSubcategory('');
  };

  const handleSubcategoryChange = (e) => {
    setSelectedSubcategory(e.target.value);
  };

  const handlePlanTypeChange = (e) => {
    const planTypeValue = e.target.value;
    setSelectedPlanTypes(prevPlanTypes => {
      if (prevPlanTypes.includes(planTypeValue)) {
        return prevPlanTypes.filter(item => item !== planTypeValue);
      } else {
        return [...prevPlanTypes, planTypeValue];
      }
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Process selected category, subcategory, and plan types
    console.log('Selected Category:', selectedCategory);
    console.log('Selected Subcategory:', selectedSubcategory);
    console.log('Selected Plan Types:', selectedPlanTypes);
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col">
          <h3 style={{fontSize:'2em',color:'#482530'}}>Categories</h3>
          <ul className="list-group">
            {categories.map((category, index) => (
              <li
                key={index}
                className={`list-group-item ${selectedCategory === category.name ? 'active' : ''}`}
                onClick={() => handleCategoryClick(category.name)}
              >
                {category.name}
              </li>
            ))}
          </ul>
        </div>
        <div className="col">
          <h3 style={{fontSize:'2em',color:'#482530'}}>Subcategories</h3>
          <select
            className="form-select"
            value={selectedSubcategory}
            onChange={handleSubcategoryChange}
          >
            <option value="">Select Subcategory</option>
            {selectedCategory &&
              categories.find((category) => category.name === selectedCategory)
                .subcategories.map((subcategory, index) => (
                  <option key={index} value={subcategory}>{subcategory}</option>
                ))}
          </select>
        </div>
      </div>
      <div className="mt-3">
        <h3>Plan Types</h3>
        <div className="btn-group" role="group" aria-label="Plan Types">
          {planTypes.map((planType) => (
            <button
              key={planType.value}
              type="button"
              className={`btn btn-outline-primary ${selectedPlanTypes.includes(planType.value) ? 'active' : ''}`}
              onClick={() => handlePlanTypeChange({ target: { value: planType.value } })}
            >
              {planType.name}
            </button>
          ))}
        </div>
      </div>
      <div className="mt-3">
        <button className="btn btn-primary" onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
}

export default CategorySubcategoryStyle;
