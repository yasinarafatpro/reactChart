import * as React from 'react';
import BasicSelect from './SelectProduct';

const ViewProduct = () => {
  return (
    <div>
      <h2>All Products</h2>
      <div>
        <h4>sort by : </h4>
        <div>
        <BasicSelect />
        </div>
      </div>
    </div>
  )
}
export default ViewProduct