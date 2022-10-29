import React, { PureComponent } from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Group A', value: 0.12 },
  { name: 'Group B', value: 0.88 },
  { name: 'Group C', value: 0 },
  { name: 'Group D', value: 0 },
];
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

export default class Example extends PureComponent {

  render() {
    return (
      <PieChart width={800} height={400} onMouseEnter={this.onPieEnter}>
        <Pie
          data={data}
          cx={120}
          cy={200}
          startAngle={90}
          endAngle={540}
          innerRadius={60}
          outerRadius={80}          
          fill="#FF0000"
          paddingAngle={5}
          dataKey="value"
        >
            <Cell fill="#FF0000" radius={[50,50,0,0]} />

          {/* {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))} */}
        </Pie>
        {/* <Pie
          data={data}
          cx={420}
          cy={200}
          startAngle={180}
          endAngle={0}
          innerRadius={60}
          outerRadius={80}
          fill="#8884d8"
          paddingAngle={5}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie> */}
      </PieChart>
    );
  }
}