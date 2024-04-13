import React from 'react';
import '../App.css'; 
import Sidenav from '../Sidenav';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';

function HomePage() {
  return(
    <Box sx={{ flexGrow: 1, marginTop: '100px', marginLeft:"60px", marginRight:"60px"}}>
      <Typography className="para" sx={{ alignContent: 'center', color: '#fff', padding: '20px' }}>
      Unlock the mysteries of nature with our intuitive website! Simply upload a photo or scan a plant, 
      and our AI-powered tool instantly identifies it for you. Whether you're a seasoned botanist or a 
      curious enthusiast, discover the beauty of plants effortlessly!

      </Typography>
      
      
      <Box className="app-container" sx={{ display: "flex", backgroundColor: '#233610' }}>
      <Sidenav/>
      
      </Box>
      
    
    
    </Box>
    
  );
}

export default HomePage