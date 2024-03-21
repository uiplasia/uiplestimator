import React from 'react';
import companyLogo from '../assets/companylogo.jpg';
import Brand from './Brand';
import './ComponentMainStyle.css';

const PrintPage = ({ formData, onReturn, submittedData, onPrintPage }) => {
  const islocalHost = window.location.hostname === 'localhost';
  console.log(formData);
  const { clientName, projectId, propertyType, projectType, city, carpetArea, ceilingHeight, planTypes } = formData || {};

  // Calculate total estimated price here
  const totalEstimator = submittedData.reduce((acc, data) => acc + (data.quantity_multiplier * data.rate), 0);

  return (
    <div className="container">
      {!islocalHost && <p id='print-url' style={{display:'none'}}>{window.location.href}</p>}
      <header className="text-center mb-4">
        <div>
          <img src={companyLogo} alt="Company Logo" className="img-fluid" style={{ height: '250px', marginRight: '10px' }} /><br/>
          <h1 className="fw-bold" style={{marginTop:'30px', marginBottom:'60px'}}>Budget Bliss: Custom Estimator</h1>
        </div>
      </header>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th colSpan="2" className="fs-4">Project Detail</th>
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
      <h2 style={{margin:'40px'}}>Project Inclusion</h2>
      <table className="table table-striped text-center">
        <thead>
          <tr className='table-header'>
            <th scope="col">Current Date</th>
            <th scope="col">Sr No</th>
            <th scope="col">Work Category</th>
            <th scope="col">Sub Category</th>
            <th scope="col">Plan Type</th>
            <th scope="col">Unit</th>
            <th scope="col">Total Sqft</th>
            <th scope="col">Rate</th>
            <th scope="col">Price</th>
            <th scope="col">Specification</th>
          </tr>
        </thead>
        <tbody className='table-resize'>
          {submittedData.map((data, index) => (
            <tr key={index}>
              <td className="align-middle" style={{ width: '100px' }}>{new Date().toISOString().slice(0, 10)}</td>
              <td className="align-middle" style={{ width: '50px' }}>{index + 1}</td>
              <td className="align-middle" style={{ width: '100px' }}>{data.categories}</td>
              <td className="align-middle" style={{ width: '100px' }}>{data.subcategories}</td>
              <td className="align-middle" style={{ width: '100px', maxWidth:'100px'}}>{data.planTypes}</td>
              <td className="align-middle" style={{ width: '100px' }}>{data.unit}</td>
              <td className="align-middle" style={{ width: '100px' }}>{data.total_sqft}</td>
              <td className="align-middle" style={{ width: '100px' }}>{data.rate}</td>
              <td className="align-middle" style={{ width: '100px' }}>{data.price}</td>
              <td className="align-middle" style={{ width: '200px' }}>{data.specification}</td>
            </tr>
          ))}
        </tbody>
      </table>
            <div style={{margin:'50px'}}>
              <button className='btn btn-warning' onClick={onReturn} style={{marginBottom:'20px', marginRight:'10px'}}>Return</button>
              <button className='btn btn-warning' onClick={onPrintPage} style={{marginBottom:'20px'}}>Print</button>
            </div>
      <div className="brand-btn-b" style={{marginBottom:'40px'}}> 
        <Brand/>
      </div>
    </div>
  );
};

export default PrintPage;
