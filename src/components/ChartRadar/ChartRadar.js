import React, { PureComponent } from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';

const data = [
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

export default function ChartRadar() {

    return (
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
          <PolarGrid radialLines={false} />
          <PolarAngleAxis axisLine={false} dataKey="kind" tick={{fill:'#fff'}}/>
          <PolarRadiusAxis axisLine={false} tick={false}  />
          <Radar dataKey="value" stroke="#FF0101" fill="#FF0101" fillOpacity={0.6} />
        </RadarChart>
      </ResponsiveContainer>
    );
  }
