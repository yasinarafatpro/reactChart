import React, { PureComponent } from 'react'
import { PieChart, Pie, Tooltip,Cell} from 'recharts'

const data = [
  { name: 'Daraz', value: 35 },
  { name: 'Bikroy', value: 30 },
  { name: 'Pickaboo', value: 35 }
]
const COLORS = ['#84AF27', '#FFC239', '#0095A0'];
const RADIAN = Math.PI / 180;

const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

export default class PaiChart extends PureComponent {

  render() {

    return (
      <div>
        <h3> Pi Chart</h3>
        <div>
          <PieChart width={400} height={400}>
            <Tooltip />
            <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          </PieChart>
        </div>
      </div>
    )
  }
}