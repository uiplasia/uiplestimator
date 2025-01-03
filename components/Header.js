import React from 'react';
import './header.css';
import companylogo from '../assets/companylogo.jpg';

const Header = () => {
  return (
    <div className="header">
      <img src={companylogo} alt="Company Logo is not showing" className="logo" />
      <h1 className="company-name"></h1>
    </div>
  );
}

export default Header;
