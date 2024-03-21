import React, { useEffect, useState } from 'react';
import './ReadDataNewEstimator.css';

const ReadDataNewEstimator = ({ type, category, onChange }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('https://sheet.best/api/sheets/5abc4c80-ad26-426e-9228-590674e7fb68');
      const data = await response.json();
      setData(data);
    } catch (error) {
      console.error(error);
    }
  };  

  let uniqueValues = [];
if (type === 'category') {
  uniqueValues = [...new Set(data.map(item => item.work_category))];
} else if (type === 'subcategory' && category) {
  uniqueValues = [...new Set(data.filter(item => item.work_category === category).map(item => item.sub_category))];
} else if (type === 'unit') {
  uniqueValues = [...new Set(data.map(item => item.unit))];
} else if (type === 'total_sqft') {
  uniqueValues = [...new Set(data.map(item => item.total_sqft))];
} else if (type === 'quantity_multiplier') {
  uniqueValues = [...new Set(data.map(item => item.quantity_multiplier))];
} else if (type === 'rate') {
  uniqueValues = [...new Set(data.map(item => item.rate))];
} else if (type === 'price') {
  uniqueValues = [...new Set(data.map(item => item.price))];
} else if (type === 'specification') {
  uniqueValues = [...new Set(data.map(item => item.specification))];
}

  return (
    <select
      className="form-select bg-transparent btn-warning"
      onChange={onChange}
      name={type}
    >
      <option value="">Select {type.charAt(0).toUpperCase() + type.slice(1)}</option>
      {uniqueValues.map((value, index) => (
        <option key={index} value={value}>{value}</option>
      ))}
    </select>
  );
};

export default ReadDataNewEstimator;
