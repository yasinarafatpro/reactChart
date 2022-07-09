import React from 'react'
import {Tooltip,BarChart,Bar, XAxis, YAxis, CartesianGrid, Legend} from 'recharts'
const Barchart = () => {
    const data = [
        {
            name: 'Official',
            pv: 3000,
            amt: 2400,
          },
          {
            name: 'Unfficial',
            pv: 3200,
            amt: 2400,
          },
          {
            name: 'Without Warranty',
            pv: 3200,
            amt: 2400,
          },
          {
            name: 'Used',
            pv: 1200,
            amt: 2400,
          },
      ]
  return (
    <div>
        <h3>Bar chart</h3>
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="pv" fill="#8884d8" />
          <Bar dataKey="uv" fill="#82ca9d" />
        </BarChart>
    </div>
  )
}

export default Barchart