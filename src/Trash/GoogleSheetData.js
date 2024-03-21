import React, { useState, useEffect } from 'react';

function GoogleSheetData() {
  const [sheetData, setSheetData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://script.google.com/macros/s/AKfycbx0-7y16UyIO1JFB4cvOQNop3Esi1vSDgPxUQ1UaiirTakgOXJ8xPn3paU06t5fgYYOeg/exec');
      const data = await response.json();
      setSheetData(data);
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Google Sheet Data</h1>
      <table>
        <thead>
          <tr>
            <th>Sr no</th>
            <th>Work Category</th>
            <th>Sub Category</th>
            <th>Plan Type</th>
            <th>Unit</th>
            <th>Total sqft</th>
            <th>Rate</th>
            <th>Price</th>
            <th>Specification</th>
          </tr>
        </thead>
        <tbody>
          {sheetData.map((row, index) => (
            <tr key={index}>
              <td>{row['sr_no']}</td>
              <td>{row['work_category']}</td>
              <td>{row['sub_category']}</td>
              <td>{row['plan_type']}</td>
              <td>{row['unit']}</td>
              <td>{row['Total_sqft']}</td>
              <td>{row['rate']}</td>
              <td>{row['price']}</td>
              <td>{row['specification']}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default GoogleSheetData;
