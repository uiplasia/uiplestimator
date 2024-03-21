import React, { useState } from 'react';

const CategorySubcategoryStyle = () => {
  const [categories, setCategories] = useState([
    { name: 'Structural Work', subcategories: ['RCC Work', 'Still Framing Work', 'Pre Engineered Building Work'] },
    { name: 'Brick & Masonry Work', subcategories: ['Red Bricks', 'AAC Blocks', 'Concrete Blocks','Plaster Work','WaterProofing','Kitchen Platform Base (Masonry,Vertical Support,Tiling Etc.)'] }
  ]);

  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedSubcategory, setSelectedSubcategory] = useState('');
  const [selectedClasses, setSelectedClasses] = useState([]);

  const handleCategoryClick = (categoryName) => {
    setSelectedCategory(categoryName);
    setSelectedSubcategory('');
  };

  const handleSubcategoryChange = (e) => {
    setSelectedSubcategory(e.target.value);
  };

  const handleClassChange = (e) => {
    const classValue = e.target.value;
    setSelectedClasses(prevClasses => {
      if (prevClasses.includes(classValue)) {
        return prevClasses.filter(item => item !== classValue);
      } else {
        return [...prevClasses, classValue];
      }
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Process selected category, subcategory, and classes
    console.log('Selected Category:', selectedCategory);
    console.log('Selected Subcategory:', selectedSubcategory);
    console.log('Selected Classes:', selectedClasses);
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col">
          <h3>Categories</h3>
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
          <h3>Subcategories</h3>
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
        <h3>Classes</h3>
        <div className="btn-group" role="group" aria-label="Classes">
          <button
            type="button"
            className={`btn btn-outline-primary ${selectedClasses.includes("Neutral") ? 'active' : ''}`}
            onClick={() => handleClassChange({ target: { value: "Neutral" } })}
          >
            Neutral
          </button>
          <button
            type="button"
            className={`btn btn-outline-primary ${selectedClasses.includes("Premium") ? 'active' : ''}`}
            onClick={() => handleClassChange({ target: { value: "Premium" } })}
          >
            Premium
          </button>
          <button
            type="button"
            className={`btn btn-outline-primary ${selectedClasses.includes("Premium plus") ? 'active' : ''}`}
            onClick={() => handleClassChange({ target: { value: "Premium plus" } })}
          >
            Premium plus
          </button>
          <button
            type="button"
            className={`btn btn-outline-primary ${selectedClasses.includes("Luxury") ? 'active' : ''}`}
            onClick={() => handleClassChange({ target: { value: "Luxury" } })}
          >
            Luxury
          </button>
          <button
            type="button"
            className={`btn btn-outline-primary ${selectedClasses.includes("Ultra Luxury") ? 'active' : ''}`}
            onClick={() => handleClassChange({ target: { value: "Ultra Luxury" } })}
          >
            Ultra Luxury
          </button>
        </div>
      </div>
      <div className="mt-3">
        <button className="btn btn-primary" onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
}

export default CategorySubcategoryStyle;
