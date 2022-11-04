import React, { PureComponent } from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';
import './ChartRadar.css'

const kindPerformance = {
    1: 'Cardio',
    2: 'Énergie',
    3: 'Endurance',
    4: 'Force',
    5: 'Vitesse',
    6: 'Intensité'
}

const datas = [
    {
        value: 80,
        kind: 1
    },
    {
        value: 120,
        kind: 2
    },
    {
        value: 140,
        kind: 3
    },
    {
        value: 50,
        kind: 4
    },
    {
        value: 200,
        kind: 5
    },
    {
        value: 90,
        kind: 6
    }
]

let data=[]
let index = 1
datas.forEach((e,i) => {
    index = i+1
    console.log(index, kindPerformance[index]);
    data.push(
        {value : e.value, kind : kindPerformance[index]}
    )
})

console.log(data);

export default function ChartRadar() {

    return (
      <ResponsiveContainer width="100%" height="70%">
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
          <PolarGrid radialLines={false} />
          <PolarAngleAxis tickSize={15} orient={30} axisLine={false} dataKey='kind' tick={{fill:'#fff'}}/>
          {/* <PolarAngleAxis axisLine={false} dataKey={`${kindPerformance}.kind`} tick={{fill:'#fff'}}/> */}
          <PolarRadiusAxis axisLine={false} tick={false}  />
          <Radar dataKey="value" stroke="#FF0101" fill="#FF0101" fillOpacity={0.6} />
        </RadarChart>
      </ResponsiveContainer>
    );
  }
