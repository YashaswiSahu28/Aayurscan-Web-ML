import React from 'react'
import Sidenav from '../Sidenav'
import Box from '@mui/material/Box';

function History() {
  return (
    <Box>
        <Sidenav/>
        <div className='history-div'>
          <h1>Explore past predictions...</h1>
          <div>
            <table>
            </table>
          </div>
        </div>
    </Box>
  )
}

export default History