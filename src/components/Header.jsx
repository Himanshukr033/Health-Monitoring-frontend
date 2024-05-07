import React, { useState, useEffect } from 'react';
import DownloadIcon from '@mui/icons-material/Download';
import Button from '@mui/material/Button';

const Header = () => {
    const [width, setWidth] = useState(calculateWidth());
  
    useEffect(() => {
      function handleResize() {
        setWidth(calculateWidth());
      }
  
      window.addEventListener('resize', handleResize);
  
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);
  
    function calculateWidth() {
      const viewportWidth = window.innerWidth;
      const secondComponentWidth = 20 * viewportWidth / 100;
      const maxWidth = viewportWidth - secondComponentWidth - 280;
      return maxWidth;
    }
  
    return (
    <div style={{ display: 'flex', justifyContent: 'space-between', width: `${width}px`}}>
      <div style={{ fontWeight: 700, fontSize: '1.6rem', flex:1 }}>
        Blood Count
      </div>
      <div style={{ fontWeight: 700, display: 'flex', flex: 1, justifyContent: 'space-between', alignItems:'center' }}>
        <div style={{ fontWeight: 700, fontSize: '1.2rem', color: '#6AA7C4' }}>
          05.05.2024
        </div>
        <div style={{ fontWeight: 400, fontSize: '1.2rem', color: '#FFFFFF61' }}>
          22.02.23
        </div>
        <div style={{ fontWeight: 400, fontSize: '1.2rem', color: '#FFFFFF61' }}>
          22.02.23
        </div>
        <Button
        variant="contained"
        startIcon={<DownloadIcon />}
        sx={{
          color: '#4A93B3',
          fontWeight: 600,
          fontSize: '1rem',
          backgroundColor: 'rgba(74,147,179,0.19)',
          border: '1px solid #4A93B3',
          display: 'flex',
          alignItems: 'center',
          padding: '0px 8px 0px 8px',
          '&:hover': {
            backgroundColor: 'rgba(74,147,179,0.3)',
          },
          '&:focus': {
            outline: 'none', 
          },
          '&:active': {
            outline: 'none', 
          },
        }}
      >
        Export
      </Button>
      </div>
    </div>
  );
}

export default Header;
