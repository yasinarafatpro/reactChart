import * as React from 'react';
import BasicSelect from './SelectProduct';

const ViewProduct = () => {
  return (
    <div>
      <h2>All Products</h2>
        <div style={{display:'inline-flex',position:'relative',left:'950px',bottom:'75px'}}>
        <h4>sort by : </h4>
            <BasicSelect/>
        </div>
    </div>
  )
}
export default ViewProduct