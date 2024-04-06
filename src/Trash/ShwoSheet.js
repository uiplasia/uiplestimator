import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const ShowSheet = () => {
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

  return (
    <div>
      {data.map((row, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <p>{JSON.stringify(row)}</p>
        </motion.div>
      ))}
    </div>
  );
};

export default ShowSheet;
