import React, { useState } from 'react';
import './ComponentMainStyle.css';
import ClientDetailCredentialTitle from './ClientDetailCredentialTitle';
import livingRoomBackground from '../assets/room-side.webp';
import RightNavBar from './RightNavBar';
import {motion} from "framer-motion";
import { useInView } from "react-intersection-observer";
import {FcAdvance} from "react-icons/fc";
import { Tooltip } from 'react-tooltip';

export const ClientDetailCredential = ({ onNext,targetId,onSkipNext }) => {
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

  const StylingOptions = ["Select Styling", "Low", "Medium", "High", "Very High"]
  const CityOptions = ["Select a city","Mumbai", "Ahmedabad", "Hyderabad", "Metro city 1", "Metro city 2", "Metro city Outskirt"]
  const ProjectTypeOptions= ["Select a project type", "Warmsell", "Bareshell", "Interior Renovation", "Architecture"]
  const PropertyTyOptions = ["Select Property Type", "Apartment","Bungalow","Farmhouse","Villa"]
  const CeilingHeightOptions = ["10", "11", "12", "13", "14", "14+"]

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

  const [ref, inView] = useInView();

  // Define your animation properties
  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 2.5 } },
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
                <motion.input
                  type="text"
                  className="form-control client-detail-input"
                  name="clientName"
                  value={formData.clientName}
                  onChange={handleChange}
                  whileHover={{scale:1.2}}
                  style={{textAlign:'center'}}
                />
              </div>
              <div className="mb-1">
                <label className="form-label client-detail-label">{labels.projectId}</label>
                <motion.input
                  type="text"
                  className="form-control client-detail-input"
                  name="projectId"
                  value={formData.projectId}
                  onChange={handleChange}
                  placeholder='Please click any key'
                  required
                  whileHover={{scale:1.2}}
                  style={{textAlign:'center'}}
                />
              </div>
              <div className="mb-1">
                <label className="form-label client-detail-label">{labels.carpetArea}</label>
                <motion.input
                  type="number"
                  min="0"
                  className="form-control client-detail-input"
                  name="carpetArea"
                  value={formData.carpetArea}
                  onChange={handleChange}
                  required
                  whileHover={{scale:1.2}}
                  style={{textAlign:'center'}}
                />
              </div>
              <div className="mb-1">
                <label className="form-label client-detail-label">{labels.ceilingHeight}</label>
                <motion.select
                  className="form-select client-detail-select"
                  name="ceilingHeight"
                  value={formData.ceilingHeight}
                  onChange={handleChange}
                  required
                  whileHover={{scale:1.2}}
                  style={{textAlign:'center'}}
                >
                  <option value="">Select Ceiling Height</option>
                  {CeilingHeightOptions.map((option,index) =>(
                    <motion.option key={index} value={option} style={{textAlign:'center'}}>
                      {option}
                    </motion.option>
                  ))}
                </motion.select>
              </div>
            </div>
            <div className="col-md-4">
              <div className="mb-1">
                <label className="form-label client-detail-label">{labels.propertyType}</label>
                <motion.select
                  className="form-select client-detail-select"
                  name="propertyType"
                  value={formData.propertyType}
                  onChange={handleChange}
                  required
                  whileHover={{scale:1.2}}
                >
                  {PropertyTyOptions.map((option,index)=>(
                    <motion.option key={index} value={option} style={{textAlign:'center'}}>
                      {option}
                    </motion.option>
                  ))}
                </motion.select>
              </div>
              <div className='mb-1'>
                <label className='form-label client-detail-label'>{labels.projectType}</label>
                <motion.select
                  className='form-select client-detail-select'
                  name='projectType'
                  value={formData.projectType}
                  onChange={handleChange}
                  required
                  whileHover={{scale:1.2}}
                >
                  {ProjectTypeOptions.map((option,index)=>(
                    <motion.option key={index} value={option} style={{textAlign:'center'}}>
                      {option}
                    </motion.option>
                  ))}
                </motion.select>
              </div>
              <div className="mb-1">
                <label className="form-label client-detail-label">{labels.city}</label>
                <motion.select
                  className="form-select client-detail-select"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  required
                  whileHover={{scale:1.2}}
                >
                  {CityOptions.map((option,index)=>(
                    <motion.option key={index} value={option} style={{textAlign:'center'}}>
                      {option}
                    </motion.option>
                  ))}
                </motion.select>
              </div>
              <div className="mb-1">
                <label className="form-label client-detail-label">{labels.styling}</label>
                <motion.select
                  className="form-select client-detail-select"
                  name="styling"
                  value={formData.styling}
                  onChange={handleChange}
                  required
                  whileHover={{ scale: 1.2 }}
                >
                  {StylingOptions.map((option, index) => (
                    <motion.option key={index} value={option} style={{textAlign:'center'}}>
                      {option}
                    </motion.option>
                  ))}
                </motion.select>
              </div>
            </div>
            <motion.div
              animate={{ scale: [0.9, 1, 0.9], 
              transition: { repeat: Infinity, duration: 2 } }}
              style={{marginLeft:"750px", marginTop:"50px"}}
            >
              <button 
                style={{ backgroundColor:'transparent', border:'none' }} 
                data-tooltip-id='tooltip'
                data-tooltip-content="Hey! skip to The next page"
                data-tooltip-place='bottom'
                onClick={onSkipNext}
              >
                <FcAdvance 
                  style={{marginLeft:"80%", fontSize:"50px"}}
                />
              </button>
              <Tooltip id='tooltip'/>
            </motion.div>
          </div>
          <div className="text-center">
            <motion.button 
              type="button" 
              className="btn btn-primary" 
              onClick={handleNext} 
              style={{marginTop:"10px"}}
              whileHover={{ scale: 1.4 }}
                  whileTap={{
                    scale: 0.8,
                    rotate: -83,
                    borderRadius: "90%"
                  }} 
                  ref={ref}
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                  variants={buttonVariants} 
            >
              Next
            </motion.button>
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

