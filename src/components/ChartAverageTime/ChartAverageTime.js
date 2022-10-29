import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    {
        day: 1,
        sessionLength: 30
    },
    {
        day: 2,
        sessionLength: 23
    },
    {
        day: 3,
        sessionLength: 45
    },
    {
        day: 4,
        sessionLength: 50
    },
    {
        day: 5,
        sessionLength: 0
    },
    {
        day: 6,
        sessionLength: 0
    },
    {
        day: 7,
        sessionLength: 60
    }
]

export default function ChartAverageTime() {

  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart
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
        <CartesianGrid strokeDasharray="3 3" horizontal={false} vertical={false}/>
        <XAxis dataKey="day" tickLine={false} axisLine={false} tick={{fill:'#FFF', opacity:'0.5', fontSize:'20px'}}/>
        <YAxis hide={true} />
        <Tooltip />
        <Line type="monotone" dataKey="sessionLength" stroke="#FFF" strokeWidth={3} dot={false}/>
      </LineChart>
    </ResponsiveContainer>
  );
}
