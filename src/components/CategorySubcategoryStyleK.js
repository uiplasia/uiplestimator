import React, { useState } from 'react';
import Title from './Title';
import CategorySubcategoryStyleKHeader from './CategorySubcategoryStyleKHeader';
import ReadDataNewEstimator from './ReadDataNewEstimator';
import './CategorySubcategoryStyleK.css';
import {motion} from 'framer-motion';
import arrow from '../assets/arrow.png';
import { Tooltip } from 'react-tooltip'

const CategorySubcategoryStyleK = ({ onBack, onSubmit, onPrint, formData, onDelete, onSkip }) => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedSubcategory, setSelectedSubcategory] = useState('');
  const [selectedPlanTypes, setSelectedPlanTypes] = useState([]);
  const [/*formSubmissions*/, setFormSubmissions] = useState([]);
  const [/*showPrintPage*/,/*setShowPrintPage*/]=useState(false);
  const [/*formSubmitted*/, setFormSubmitted] = useState(false);

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
    setSelectedSubcategory('');
    setSelectedPlanTypes([]);
  };

  const handleSubcategoryChange = (e) => {
    setSelectedSubcategory(e.target.value);
    setSelectedPlanTypes([]);
  };

  const handlePlanTypeChange = (planTypeValue) => {
    if (selectedPlanTypes.includes(planTypeValue)){
        setSelectedPlanTypes([]);
    }else{
        setSelectedPlanTypes([planTypeValue]);
    }
  };
  const handleSubmit = async () => {
    console.log("Selected Category:", selectedCategory);
    console.log("Selected Subcategory:", selectedSubcategory);
    console.log("Selected Plan Types:", selectedPlanTypes);
  
    try {
        const response = await fetch('https://sheet.best/api/sheets/5abc4c80-ad26-426e-9228-590674e7fb68');
        const data = await response.json();
        const selectedItem = data.find(item => item.work_category === selectedCategory && item.sub_category === selectedSubcategory && item.plan_type === selectedPlanTypes[0]);
    
        if (selectedItem) {
          // Under process-------------------------------------------------------------------------------------------------------
          // Try to Update the quantity_multiplier locally
          const updatedQuantityMultiplier = parseFloat(formData.carpetArea) * parseFloat(selectedItem.percentage_market);
    
          // try to Send a PATCH request to update the quantity_multiplier cell in the Google Sheet
          await fetch(`https://sheet.best/api/sheets/5abc4c80-ad26-426e-9228-590674e7fb68/${selectedItem.id}`, {
            method: 'PATCH',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              quantity_multiplier: updatedQuantityMultiplier
            })
          });
          // Under process-------------------------------------------------------------------------------------------------------
          formData = {
            categories: selectedCategory,
            subcategories: selectedSubcategory,
            planTypes: selectedPlanTypes,
            percentageMarket: selectedItem.percentage_market,
            unit: selectedItem.unit,
            total_sqft: selectedItem.total_sqft,
            quantity_multiplier: updatedQuantityMultiplier,
            rate: selectedItem.rate,
            price: selectedItem.price,
            specification: selectedItem.specification
          };
    
          setFormSubmissions(prevSubmissions => [...prevSubmissions, formData]);
          onSubmit(formData);
          setFormSubmitted(true);
        } else {
          console.error('No data found for the selected category, subcategory, and plan type.');
        }
      } catch (error) {
        console.error(error);
        console.log(formData)
      }
  };     

  return (
    <div className="container mt-5">
      <CategorySubcategoryStyleKHeader/>
      <Title />
      <div>
        <div className="row">
          <motion.div whileHover={{scale:1.07, marginRight:'20px'}} className="col">
            <h3 style={{ fontSize: '2em', color: '#482530' }}>Categories</h3>
            <ReadDataNewEstimator
              type="category"
              onChange={handleCategoryChange}
              className="scalable-item"
            />
          </motion.div>
          <motion.div whileHover={{scale:1.07, marginLeft:'20px'}} className="col">
            <h3 style={{ fontSize: '2em', color: '#482530' }}>Subcategories</h3>
            <ReadDataNewEstimator
              type="subcategory"
              category={selectedCategory}
              onChange={handleSubcategoryChange}
            />
          </motion.div>
        </div>
        <div className="mt-3">
          <h3>Plan Types</h3>
          <motion.div whileHover={{scale:1.07}} className="btn-group" role="group" aria-label="Plan Types">
            <ReadDataNewEstimator
              type="planType"              
              category={selectedCategory}
              subcategory={selectedSubcategory}
              onChange={(e) => handlePlanTypeChange(e.target.value)}
            />
          </motion.div>
          <div style={{width:'20px', height:'50px', marginLeft:'60px'}}>
              <button 
                style={{backgroundColor:'transparent', border:'none' }} 
                data-tooltip-id='tooltip'
                data-tooltip-content='Hey I can skip to Print-page!'
                data-tooltip-place='top'
                onClick={onSkip}
              >
                <motion.img 
                  style={{width:'40px'}} 
                  src={arrow} 
                  alt='skip'
                  animate={{ scale: [0.9, 1, 0.9], transition: { repeat: Infinity, duration: 2 } }}
                />
              </button>
              <Tooltip id="tooltip" />
          </div>
        </div>
        <div className="mt-3">
          <motion.button whileHover={{scale:1.06}} className="btn btn-warning me-2" onClick={onBack}>Go Back</motion.button>
          <motion.button whileHover={{scale:1.06}} className="btn btn-warning" onClick={handleSubmit}>Submit</motion.button>
          <motion.button whileHover={{scale:1.06}} style={{marginLeft:'10px'}} className="btn btn-warning" onClick={onDelete}>Delete</motion.button>
        </div>
      </div>
      <div className="text-center" style={{marginTop:'30px'}}>
        <motion.button whileHover={{scale:1.12}} className="btn btn-warning" onClick={onPrint}>Print All</motion.button>
      </div>
    </div>
  );
}

export default CategorySubcategoryStyleK;
