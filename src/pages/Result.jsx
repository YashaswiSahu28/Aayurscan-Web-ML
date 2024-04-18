import React from 'react'
import Sidenav from '../Sidenav'
import Box from '@mui/material/Box';

function Result() {
  return (
    <Box>
        <Sidenav/>
        <div className='history-div'>
          <h1>Here is your predicted Result...</h1>
          <div>
            <table>
            </table>
          </div>
        </div>
    </Box>
  )
}

export default Result