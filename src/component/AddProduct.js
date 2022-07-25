import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button, FormControl, InputLabel, MenuItem, Paper, Select, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

const AddProduct = ({ product }) => {

  const [form, setForm] = useState({
    productname: "", brand: "", ram: "", tags: "", price: ""
  })
  const [data,setData]=useState({})

  const handlwInput = (e) => {
    const { name, value } = e.target
    setForm({ ...form, [name]: value })
  }
  const handleSubmit = async(event) => {
    event.preventDefault();
    try{
      const response=await fetch('http://localhost:3001/post',{
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify(form)
      })
      const resp=await response.json()
      setData(resp)
      console.log(resp)

    }catch(err){
      console.log(err)
    }
  }
  return (
    <div>
      <div style={{ padding: '20px', paddingLeft: '100px', paddingBottom: '20px', border: '1px solid' }}>
      <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>

        <FormControl fullWidth sx={{ m: 1 }}>
          <TextField id="filled-basic" name='productname' label='ProductName' variant="outlined" value={form.productname} onChange={handlwInput} />
        </FormControl>

        <FormControl sx={{ m: 1, display: 'flow-root' }}>
          <TextField id="filled-basic" label="Brand" name='brand' variant="outlined" value={form.brand} onChange={handlwInput} />
          <TextField id="standard-basic" label="Ram/Rom" name='ram' variant="outlined" value={form.ram} onChange={handlwInput} /><br /><br />
        </FormControl>

        <FormControl fullWidth sx={{ m: 1 }}>
          <InputLabel htmlFor="my-input">Tags</InputLabel>
          <Select id="standard-basic" label="Search and Select" name='tags' variant="outlined" type='text' value={form.tags} onChange={handlwInput}>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select><br /><br />
        </FormControl>

        <FormControl fullWidth>
          <TextField id="standard-basic" label="Enter Your Product Price" name='price' variant="outlined" value={form.price} onChange={handlwInput} /><br /><br />
        </FormControl>

        <Stack spacing={2} direction='row'>
          <Button variant='contained' onClick={() => setForm({
            productname: "", brand: "", ram: "", tags: "", price: ""
          })}>Cancel</Button>
          <Button variant='contained' type='submit' onClick={handleSubmit}>Publish</Button>
        </Stack>
        <p>{product}</p>
      </Box>
    </div>
    <div style={{}}>
        <h2>Table</h2>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Model</TableCell>
                <TableCell>Ram/Rom</TableCell>
                <TableCell>Tag</TableCell>
                <TableCell>Price</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
            
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  )
}
export default AddProduct