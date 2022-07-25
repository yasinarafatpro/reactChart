import { Button } from '@mui/material'
import React, { useState } from 'react'
import AddProduct from './AddProduct'

const MyButton = () => {

    const [active, setActive] = useState("y")

    return (
        <div>
            <div className='button'>
                <Button color="inherit" onClick={()=>setActive("F")}>Add Product</Button>
            </div>
            {/* <div>
                {active==="F" && <AddProduct product='sumsung'/>}
            </div> */}
        </div>
    )
}
export default MyButton