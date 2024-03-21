import React, { useState } from 'react';
import Title from './Title';
import CategorySubcategoryStyleKHeader from './CategorySubcategoryStyleKHeader';
import ReadDataNewEstimator from './ReadDataNewEstimator';
import './CategorySubcategoryStyleK.css';

const CategorySubcategoryStyleK = ({ onBack, onSubmit, onPrint, formData }) => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedSubcategory, setSelectedSubcategory] = useState('');
  const [selectedPlanTypes, setSelectedPlanTypes] = useState([]);
  const [formSubmissions, setFormSubmissions] = useState([]);
  const [showPrintPage,/*setShowPrintPage*/]=useState(false);
  const [/*formSubmitted*/, setFormSubmitted] = useState(false);

  const planTypes = [
    { name: 'Premium', value: 'Premium' },
    { name: 'Premium plus', value: 'Premium plus' },
    { name: 'Luxury', value: 'Luxury' },
    { name: 'Ultra Luxury', value: 'Ultra Luxury' },
  ];

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
    setSelectedSubcategory('');
  };

  const handleSubcategoryChange = (e) => {
    setSelectedSubcategory(e.target.value);
  };


  const handlePlanTypeChange = (planTypeValue) => {
    if (selectedPlanTypes.includes(planTypeValue)){
        setSelectedPlanTypes([]);
    }else{
        setSelectedPlanTypes([planTypeValue]);
    }
};
  const handleSubmit = async () => {
    try {
      const response = await fetch('https://sheet.best/api/sheets/5abc4c80-ad26-426e-9228-590674e7fb68');
      const data = await response.json();
      const selectedItem = data.find(item => item.work_category === selectedCategory && item.sub_category === selectedSubcategory);
  
      if (selectedItem) {
        const formData = {
          categories: selectedCategory,
          subcategories: selectedSubcategory,
          planTypes: selectedPlanTypes,
          unit: selectedItem.unit,
          total_sqft: selectedItem.total_sqft,
          quantity_multiplier: selectedItem.quantity_multiplier,
          rate: selectedItem.rate,
          price: selectedItem.price,
          specification: selectedItem.specification
        };
        
        setFormSubmissions(prevSubmissions => [...prevSubmissions, formData]);
        onSubmit(formData);
        setFormSubmitted(true);
      } else {
        console.error('No data found for the selected category and subcategory.');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container mt-5">
      <CategorySubcategoryStyleKHeader/>
      <Title />
      <div>
        <div className="row">
          <div className="col">
            <h3 style={{ fontSize: '2em', color: '#482530' }}>Categories</h3>
            <ReadDataNewEstimator
              type="category"
              onChange={handleCategoryChange}
            />
          </div>
          <div className="col">
            <h3 style={{ fontSize: '2em', color: '#482530' }}>Subcategories</h3>
            <ReadDataNewEstimator
              type="subcategory"
              category={selectedCategory}
              onChange={handleSubcategoryChange}
            />
          </div>
        </div>
        <div className="mt-3">
          <h3>Plan Types</h3>
          <div className="btn-group" role="group" aria-label="Plan Types">
            {planTypes.map((planType,index) => (
              <button
                key={planType.value}
                type="button"
                className={`btn btn-outline-warning ${selectedPlanTypes.includes(planType.value) ? 'active' : ''}`}
                onClick={() => handlePlanTypeChange(planType.value)}
                name="planType"
                style={{ marginRight: index !== planTypes.length - 1 ? '8px' : '0' }}
              >
                {planType.name}
              </button>
            ))}
          </div>
        </div>
        <div className="mt-3">
          <button className="btn btn-warning me-2" onClick={onBack}>Go Back</button>
          <button className="btn btn-warning" onClick={handleSubmit}>Submit</button>
        </div>
      </div>
      {formSubmissions.length > 0 && (
        <>
          <div className="text-center" style={{marginTop:'30px'}}>
            <button className="btn btn-warning" onClick={onPrint}>Print All</button>
          </div>
        </>
      )}
      {showPrintPage}
    </div>
  );
}

export default CategorySubcategoryStyleK;
