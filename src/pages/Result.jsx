import React from 'react'
import Sidenav from '../Sidenav'
import Box from '@mui/material/Box';
import { useLocation } from 'react-router-dom';

function Result(){
  const location = useLocation();
  const data = location.state.data || "No data available";// Access the passed data
  return (
    <Box>
        <Sidenav/>
        <div className='history-div'>
          <h1>Here is your predicted Result...</h1>
                {data}  
          <div>
          </div>
        </div>
    </Box>
  )
};

export default Result;