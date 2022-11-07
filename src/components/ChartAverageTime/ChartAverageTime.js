import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './ChartAverageTime.css'
import CustomToolTip from './CustomToolTip';


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
    <div id='averageTimeFullChart' style={{height:'100%',width:'100%'}}>
      <p id='averageTimeTitle'>Durée moyenne des sessions</p>
      <div id='averageTimeDays'>
        <p>L</p>
        <p>M</p>
        <p>M</p>
        <p>J</p>
        <p>V</p>
        <p>S</p>
        <p>D</p>
      </div>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 80,
            right: 0,
            left: 0,
            bottom: 70,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" horizontal={false} vertical={false}/>
          <XAxis hide dataKey="day" tickLine={false} axisLine={false} />
          <YAxis hide={true} padding={{bottom: 40}} />
          <Tooltip wrapperStyle={{ display:'flex', backgroundColor:"white", color: "black"}}
            labelStyle={{display: "none"}}
            content={<CustomToolTip/>} />
          <Line type="natural" dataKey="sessionLength" activeDot={{ stroke: "rgba(255, 255, 255, 0.5)", strokeWidth: 10, r: 5, fill:'#fff'}} 
          stroke="#fff" 
          strokeWidth={3} dot={false}/>

        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
