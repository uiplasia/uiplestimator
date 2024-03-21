import React, { useState, useEffect } from 'react';
import brand1 from '../assets/BLOK_LOGO.jpg';
import brand2 from '../assets/natuzzi.jpg';

const images = [brand1, brand2, brand1, brand2];

const Brand = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5500);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="d-flex justify-content-center" style={{ width: '100%', overflow: 'hidden' }}>
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={index + "Brand"}
          style={{
            maxWidth: '100%',
            maxHeight: '20px',
            transition: 'transform 1s',
            transform: `translateX(${(index - currentImageIndex) * 100}%)`,
          }}
        />
      ))}
    </div>
  );
};

export default Brand;
