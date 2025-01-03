import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

const Styling = ({ styling, setStyling }) => {
  const handleStylingChange = (level) => {
    setStyling(level);
  };

  return (
    <div>
    <label htmlFor='propertyType' className='container-center-label-above-field'>Styling</label>
    <Stack direction="row" spacing={2} justifyContent="center">
      <Button variant={styling === 'low' ? 'contained' : 'outlined'} onClick={() => handleStylingChange('low')}>
        Low
      </Button>
      <Button variant={styling === 'medium' ? 'contained' : 'outlined'} onClick={() => handleStylingChange('medium')}>
        Medium
      </Button>
      <Button variant={styling === 'high' ? 'contained' : 'outlined'} onClick={() => handleStylingChange('high')}>
        High
      </Button>
      <Button variant={styling === 'very high' ? 'contained' : 'outlined'} onClick={() => handleStylingChange('very high')}>
        Very High
      </Button>
    </Stack>
    </div>
  );
};

export default Styling;