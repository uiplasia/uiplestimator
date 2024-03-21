//in case they asked me to add category and subcategory toggled for space management 

import React, { useState } from 'react';

const CategorySubCat = () => {
  const [categories, setCategories] = useState([
    { name: 'Structral Work', subcategories: ['RCC Work', 'Still Framing Work', 'Pre Engineered Building Work'] },
    { name: 'Brick & Masonry Work', subcategories: ['Red Bricks', 'AAC Blocks', 'Concrete Blocks','Plaster Work','WaterProofing','Kitchen Platform Base (Masonry,Vertical Support,Tiling Etc.)'] }
  ]);

  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedSubcategory, setSelectedSubcategory] = useState('');

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
    setSelectedSubcategory('');
  };

  const handleSubcategoryChange = (e) => {
    setSelectedSubcategory(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Process selected category and subcategory
    console.log('Selected Category:', selectedCategory);
    console.log('Selected Subcategory:', selectedSubcategory);
  };

  return (
    <form onSubmit={handleSubmit}>
      <select value={selectedCategory} onChange={handleCategoryChange}>
        <option value="">Select Category</option>
        {categories.map((category, index) => (
          <option key={index} value={category.name}>{category.name}</option>
        ))}
      </select>
      <select value={selectedSubcategory} onChange={handleSubcategoryChange}>
        <option value="">Select Subcategory</option>
        {selectedCategory &&
          categories.find((category) => category.name === selectedCategory)
            .subcategories.map((subcategory, index) => (
              <option key={index} value={subcategory}>{subcategory}</option>
            ))}
      </select>
      <button type='submit'>Submit</button>
    </form>
  );
}

export default CategorySubCat;
