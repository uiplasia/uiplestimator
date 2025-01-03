import React, { useState, useEffect } from 'react';
import classic from '../assets/classic.webp';
import livingroom from '../assets/Livingroom.jpg';
import speakyourself from '../assets/speackyourself.webp';
import roomSide from '../assets/room-side.webp';
import boss from '../assets/boss.png';
import simmphony from '../assets/simphony1.webp';
import simphony1 from '../assets/simphony.webp';
import simphony2 from '../assets/simphony2.webp';
import classic1 from '../assets/classic1.webp';
import companyLogo from '../assets/companylogo.jpg'

const images = [classic, livingroom, speakyourself, roomSide, boss, simmphony, simphony1, simphony2, classic1];

const CategorySubcategoryStyleKHeader = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="container-fluid" style={{opacity:'0.89999'}}>
      <div className="row">
        <div className="col-8">
          <div className="d-flex justify-content-center align-items-center" style={{ height: '100%', overflow: 'hidden' }}>
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt="Header images"
                style={{
                  width:'250px',
                  height:'200px',
                  transition: 'transform 1s',
                  transform: `translateX(${(index - currentImageIndex) * 100}%)`,
                }}
              />
            ))}
          </div>
        </div>
        <div className="col-4">
          <div className="d-flex justify-content-center align-items-center" style={{ height: '100%' }}>
            <img src={companyLogo} alt="Logo" style={{ maxWidth: '100%', maxHeight: '100%' }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategorySubcategoryStyleKHeader;
