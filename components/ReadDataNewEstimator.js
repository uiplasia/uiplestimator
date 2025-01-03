import React, { useState, useEffect } from 'react';
import * as XLSX from 'xlsx';
import './ReadDataNewEstimator.css';
import './CategorySubcategoryStyleK.css';

const ReadDataNewEstimator = ({ type, category, subcategory, onChange }) => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch('/path/to/your/excel/file.xlsx');
      const arrayBuffer = await response.arrayBuffer();
      const workbook = XLSX.read(arrayBuffer, { type: 'array' });
      const sheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[sheetName];
      const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

      const filteredData = jsonData.filter(entry => {
        if (entry.work_category === "") {
          return false;
        }
        for (const key in entry) {
          if (entry[key] === null) {
            return false;
          }
        }
        return true;
      });

      console.log('Data before filtering:', data);
      console.log('Filtered data:', filteredData);
      setData(filteredData);
      console.log(`Category: ${category}, Subcategory: ${subcategory}`);
    } catch (error) {
      console.error(error);
    }
  };

  let uniqueValues = [];
  if (type === 'category') {
    uniqueValues = [...new Set(data.map(item => item.work_category))];
  } else if (type === 'subcategory' && category) {
    uniqueValues = [...new Set(data.filter(item => item.work_category === category).map(item => item.sub_category))];
  } else if (type === 'planType' && category && subcategory) {
    uniqueValues = [...new Set(data.filter(item => item.work_category === category && item.sub_category === subcategory).map(item => item.plan_type))];
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
  } else if (type === 'percentage_market') {
    uniqueValues = [...new Set(data.map(item => item.percentage_market))];
  }

  return (
    <div>
      {uniqueValues.map((value, index) => (
        <div key={index}>
          <p>{value}</p>
        </div>
      ))}
    </div>
  );
};

export default ReadDataNewEstimator;
