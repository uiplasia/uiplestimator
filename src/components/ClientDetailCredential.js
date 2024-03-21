import React, { useState } from 'react';
import './ComponentMainStyle.css';
import ClientDetailCredentialTitle from './ClientDetailCredentialTitle';
import livingRoomBackground from '../assets/room-side.webp';
import RightNavBar from './RightNavBar';

export const ClientDetailCredential = ({ onNext,targetId }) => {
  const labels = {
    clientName: <span style={{ color: 'white' }}>Client Name</span>,
    projectId: <span style={{ color: 'white' }}>Project ID</span>,
    propertyType: <span style={{ color: 'white' }}>Property Type</span>,
    projectType: <span style={{ color: 'white' }}>Project Type</span>,
    city: <span style={{ color: 'white' }}>City</span>,
    carpetArea: <span style={{ color: 'white' }}>Carpet Area</span>,
    ceilingHeight: <span style={{ color: 'white' }}>Ceiling Height sqft</span>,
    styling: <span style={{ color: 'white' }}>Styling</span>,
  };

  const [formData, setFormData] = useState({
    clientName: '',
    projectId: '',
    propertyType: '',
    projectType: '',
    city: '',
    carpetArea: '',
    ceilingHeight: '',
    styling: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    let newProjectId = formData.clientName.split(' ').join('_');
    newProjectId = newProjectId.toLowerCase();
    newProjectId += `_${Math.floor(Math.random() * 1000000)}`;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: name === 'projectId' ? newProjectId : value,
    }));
  };
  
  

  const handleNext = () => {
    onNext({ ...formData, ...formData });
  };

  return (
    <div className='client-detail-big-container' style={{backgroundImage:`url(${livingRoomBackground})`,backgroundSize:'80%', height:'100vh', overflow:"hidden"}}>
      <div style={{marginBottom:'60px'}}>
        <ClientDetailCredentialTitle />
      </div>
      <div className='grid-wraper-client-navbar' style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '20px'}}>  
        <div className="container client-detail-container">
          <div className="row justify-content-center">
            <div className="col-md-4">
              <div className="mb-1">
                <label className="form-label client-detail-label">{labels.clientName}</label>
                <input
                  type="text"
                  className="form-control client-detail-input"
                  name="clientName"
                  value={formData.clientName}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-1">
                <label className="form-label client-detail-label">{labels.projectId}</label>
                <input
                  type="text"
                  className="form-control client-detail-input"
                  name="projectId"
                  value={formData.projectId}
                  onChange={handleChange}
                  placeholder='Please click any key'
                  required
                />
              </div>
              <div className="mb-1">
                <label className="form-label client-detail-label">{labels.carpetArea}</label>
                <input
                  type="number"
                  min="0"
                  className="form-control client-detail-input"
                  name="carpetArea"
                  value={formData.carpetArea}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-1">
                <label className="form-label client-detail-label">{labels.ceilingHeight}</label>
                <select
                  className="form-select client-detail-select"
                  name="ceilingHeight"
                  value={formData.ceilingHeight}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Ceiling Height</option>
                  <option value="10ft">10</option>
                  <option value="11ft">11</option>
                  <option value="12ft">12</option>
                  <option value="13ft">13</option>
                  <option value="14ft">14</option>
                  <option value="14+ft">14+</option>
                </select>
              </div>
            </div>
            <div className="col-md-4">
              <div className="mb-1">
                <label className="form-label client-detail-label">{labels.propertyType}</label>
                <select
                  className="form-select client-detail-select"
                  name="propertyType"
                  value={formData.propertyType}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Property Type</option>
                  <option value="Apartment">Apartment</option>
                  <option value="Bungalow">Bungalow</option>
                  <option value="Farmhouse">Farmhouse</option>
                  <option value="Villa">Villa</option>
                </select>
              </div>
              <div className='mb-1'>
                <label className='form-label client-detail-label'>{labels.projectType}</label>
                <select
                  className='form-select client-detail-select'
                  name='projectType'
                  value={formData.projectType}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Project Type</option>
                  <option value="Warmsell">Warmsell</option>
                  <option value="Bareshell">Bareshell</option>
                  <option value="Interior Renovation">Interior Renovation</option>
                  <option value="Architecture">Architecture</option>
                </select>
              </div>
              <div className="mb-1">
                <label className="form-label client-detail-label">{labels.city}</label>
                <select
                  className="form-select client-detail-select"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select City</option>
                  <option value="Mumbai">Mumbai</option>
                  <option value="Ahmedabad">Ahmedabad</option>
                  <option value="Hyderabad">Hyderabad</option>
                  <option value="Metro city 1">Metro city 1</option>
                  <option value="Metro city 2">Metro city 2</option>
                  <option value="Metro city Outskirt">Metro city Outskirt</option>
                </select>
              </div>
              <div className="mb-1">
                <label className="form-label client-detail-label">{labels.styling}</label>
                <select
                  className="form-select client-detail-select"
                  name="styling"
                  value={formData.styling}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Styling</option>
                  <option value="Low">Low</option>
                  <option value="Medium">Medium</option>
                  <option value="High">High</option>
                  <option value="Very High">Very High</option>
                </select>
              </div>
            </div>
          </div>
          <div className="text-center">
            <button type="button" className="btn btn-primary" onClick={handleNext} style={{marginTop:"100px"}}>Next</button>
          </div>
        </div>
        <div>
          <RightNavBar />
        </div>
      </div>
    </div>
  );
}

export default ClientDetailCredential;

