import { Container } from '@mui/system'
import React from 'react';
import Box from '@mui/material/Box';
import PaiChart from '../component/PaiChart';
import Barchart from '../component/Barchart';
import ViewProduct from '../component/ViewProduct';
import AddProduct from '../component/AddProduct';

const Body = ({}) => {
  return (
    <div>
      <Container maxWidth='lg'>
        <Box sx={{display: 'inline-flex'}}>
          <PaiChart />
          <Barchart />
        </Box>
        <ViewProduct />
      </Container>
    </div>
  )
}

export default Body