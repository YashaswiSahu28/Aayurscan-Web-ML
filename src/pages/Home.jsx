
import React from 'react';
import '../App.css'; 
import Sidenav from '../Sidenav';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import CustomWebcam from "../Components/CustomWebcam";

function HomePage() {
  return(
    <div className="home-div">
      <Sidenav/>
      <Box 
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexGrow: 1,
        marginTop: '100px',
        marginLeft: '60px',
        marginRight: '60px',
        flexDirection:'column',
      }}
      >
        <h1 style={{ color: 'white' }}>Welcome to Aayurscan: Your Portal to Medicinal Plant Recognition.</h1>
        <Typography className="para" sx={{ alignContent: 'justify', color: '#fff', padding: '20px' }}>
        
        Join us on Aayurscan and embark on an expedition to elevate your understanding of nature's treasures through a sophisticated, user-friendly interface tailored for the discerning explorer.
        </Typography>
        <Box className="app-container" sx={{ display: "flex"}}> 
            <CustomWebcam />
        </Box>
      </Box>
    </div>
    
    
  );
}

export default HomePage
