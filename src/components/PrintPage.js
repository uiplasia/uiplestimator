import React from 'react';
import companyLogo from '../assets/companylogo.jpg';
import Brand from './Brand';
import './ComponentMainStyle.css';
import {motion} from 'framer-motion';

const currentDateTime = new Date().toLocaleString();
const PrintPage = ({ formData, onReturn, submittedData, onPrintPage, onDelete, tablePrintComponent }) => {
  
  const { clientName, projectId, propertyType, projectType, city, carpetArea, ceilingHeight, planTypes } = formData || {};

  console.log(formData);

  let totalEstimator = submittedData.reduce((acc, data) => acc + ( data.carpetArea * data.percentageMarket * data.rate ), 0);

  console.log(formData);
  console.log(totalEstimator)

  return (
    <div className="container">
      <header className="text-center mb-4">
        <div>
          <img src={companyLogo} alt="Company Logo" className="img-fluid" style={{ height: '200px', marginRight: '10px' }} /><br/>
          <h1 className="fw-bold" style={{marginTop:'30px', marginBottom:'60px'}}>Budget Bliss: Custom Estimator</h1>
        </div>
      </header>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th colSpan="2" /*className="fs-4"*/><h2>Project Detail</h2></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Client Name</td>
            <td>{clientName}</td>
          </tr>
          <tr>
            <td>Project ID</td>
            <td>{projectId}</td>
          </tr>
          <tr>
            <td>Property Type</td>
            <td>{propertyType}</td>
          </tr>
          <tr>
            <td>Project Type</td>
            <td>{projectType}</td>
          </tr>
          <tr>
            <td>City</td>
            <td>{city}</td>
          </tr>
          <tr>
            <td>Carpet Area (sq. ft)</td>
            <td>{carpetArea}</td>
          </tr>
          <tr>
            <td>Ceiling Height</td>
            <td>{ceilingHeight}</td>
          </tr>
          <tr>
            <td>Estimated Price</td>
            <td>{totalEstimator}</td>
          </tr>
          <tr>
            <td colSpan="2">
              GST extra as Applicable Plan Type:<br/>
              {planTypes}
            </td>
          </tr>
        </tbody>
      </table>
      <div style={{pageBreakBefore:'always'}}></div>
      <h2 style={{margin:'40px'}}>Project Inclusion</h2>
      
      {tablePrintComponent}
      
      <div style={{ marginTop: '20px', padding: '10px', backgroundColor: '#f8f9fa', border: '1px solid #ccc' }} className="total-estimated-price-box">
        <h4>Total Estimated Price:</h4>
        <p>{totalEstimator}</p>
      </div>
      <div style={{position: 'fixed', top: '10px', right: '10px', fontSize: '12px', color: '#333'}}>{currentDateTime}</div>
      <div style={{margin:'50px'}}>
        <motion.button whileHover={{scale:1.3}} className='btn btn-warning' onClick={onReturn} style={{marginBottom:'20px', marginRight:'10px'}}>Return</motion.button>
        <motion.button whileHover={{scale:1.3}} className='btn btn-warning' onClick={onPrintPage} style={{marginBottom:'20px'}}>Print</motion.button>
        <motion.button whileHover={{scale:1.3}} className='btn btn-warning' onClick={onDelete} style={{marginBottom:'20px', marginLeft:"10px"}}>Delete</motion.button>
      </div>
      <div className="brand-btn-b" style={{marginBottom:'40px'}}> 
        <Brand/>
      </div>
    </div>
  );
};

export default PrintPage;