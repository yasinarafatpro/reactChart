import { AppBar } from '@mui/material'
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import React from 'react'
import './Header.css'
import Search from '../component/Search';

const Header = ({value}) => {
  const handleClick=()=>{
  return(
      <Header/>
    )
  }
  return (
    <div className='header'>
        <AppBar>
          <Toolbar> 
            <Typography>Logo</Typography>
            <div style={{display:'inline-flex',position:'relative',left:'900px'}}>
            {value === 'appheader' ? <Search/>:null}
            {value === 'appheader' ? 
            <Button color="inherit" onClick={handleClick}>Add Product</Button> :null}
            </div>
          </Toolbar>
        </AppBar>
    </div>
  )
}
export default Header