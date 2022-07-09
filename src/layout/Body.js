import { Container } from '@mui/system'
import React from 'react';
import Box from '@mui/material/Box';
import PaiChart from '../component/PaiChart';
import Barchart from '../component/Barchart';
import ViewProduct from '../component/ViewProduct';

const Body = () => {
  return (
    <div>
        <Container>
        <Box marginTop={10} sx={{display:'flex', bgcolor: '#cfe8fc',cursor:'pointer'}}>
            <PaiChart/>
            <Barchart/>
        </Box>
        <ViewProduct/>
        </Container>
    </div>
  )
}

export default Body