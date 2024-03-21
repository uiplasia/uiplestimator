import React, { useEffect, useState } from 'react';
import logoCompany from '../assets/companylogo.jpg';
import "animate.css/animate.min.css";
import classic from '../assets/classic.webp';
import livingroom from '../assets/Livingroom.jpg';
import speakyourself from '../assets/speackyourself.webp';
import roomSide from '../assets/room-side.webp';
import boss from '../assets/boss.png';
import simmphony from '../assets/simphony1.webp';
import simphony1 from '../assets/simphony.webp';
import simphony2 from '../assets/simphony2.webp';
import natuzzir from '../assets/natuzzi.jpg';
import blokLogo from '../assets/BLOK_LOGO.jpg';

const RightNavBar = () => {
  const [currentParagraph, setCurrentParagraph] = useState(0);
  const [currentImage, setCurrentImage] = useState(0);
  const [showNatuzzir, setShowNatuzzir] = useState(false);
  const [showBlokLogo, setShowBlokLogo] = useState(true);

  useEffect(() => {
    const paragraphInterval = setInterval(() => {
      setCurrentParagraph((prev) => (prev + 1) % 5);
    }, 4000);

    const imageInterval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % 8);
    }, 2000);

    const natuzzirInterval = setInterval(() => {
      setShowNatuzzir((prev) => !prev);
    }, 3000);

    const blokLogoInterval = setInterval(() => {
      setShowBlokLogo((prev) => !prev);
    }, 4000);

    return () => {
      clearInterval(paragraphInterval);
      clearInterval(imageInterval);
      clearInterval(natuzzirInterval);
      clearInterval(blokLogoInterval);
    };
  }, []);

  return (
    <div className="right-nav-bar" style={{ backgroundColor: '#22313f', height: '700px' }}>
      <div className="logo-section">
        <img src={logoCompany} alt='This is Company Logo' style={{ width: '200px', height: 'auto' }} />
      </div>
      <div className="motto-section" style={{ textAlign: 'center' }}>
        {Array.from({ length: 5 }, (_, index) => (
          <p
            key={index}
            className={`animate__animated ${
              currentParagraph === index ? 'animate__fadeInUp' : 'animate__fadeOutDown'
            }`}
            style={{ display: currentParagraph === index ? 'block' : 'none', color: 'white', width: '200px', alignItems: 'center', textAlign: 'center', marginRight: '20px', margin: '0 auto' }}
          >
            {[
              "The symphony of exclusivity, luxury, and extravagance makes this space unquestionably unique.",
              "Classics are never passé. This space is a spectacular confluence of the perfect ambience and remarkable aesthetics.",
              "A space that inspires positivity, warmth, and togetherness is the one that showers bountiful blessings upon you.",
              "Experience the best of conviviality, leisure, and good times in this enwrapping ambience.",
              "Every element of this space reinforces the significance of design in harmony with sustainability.",
            ][index]}
          </p>
        ))}
      </div>
      <div className="pictures-sectio" style={{ transform: 'matrix(1, 0, 0, 1, 0, -25)', marginTop: '40px' }}>
        {Array.from({ length: 8 }, (_, index) => (
          <img
            key={index}
            src={[
              speakyourself, livingroom, simmphony, simphony1, simphony2, classic, roomSide, boss
            ][index]}
            alt="U&I Images"
            style={{
              maxWidth: '250px',
              height: '180px',
              display: currentImage === index ? 'inline-block' : 'none',
              animation: `fadeInRight 1s forwards`
            }}
          />
        ))}
      </div>
      <div className="brand-section">
        {showNatuzzir && (
          <img
            src={natuzzir}
            alt="Natuzzir Logo"
            style={{
              maxWidth: '200px',
              maxHeight: '200px',
              animation: 'animate__animated animate__fadeIn'
            }}
          />
        )}
        {showBlokLogo && (
          <img
            src={blokLogo}
            alt="Blok Logo"
            style={{
              maxWidth: '200px',
              maxHeight: '200px',
              animation: 'animate__animated animate__fadeIn'
            }}
          />
        )}
      </div>
    </div>
  );
};

export default RightNavBar;
