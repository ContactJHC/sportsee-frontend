import React, { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Label } from 'recharts';

const data = [
    {
        day: '2020-07-01',
        kilogram: 80,
        calories: 240
    },
    {
        day: '2020-07-02',
        kilogram: 80,
        calories: 220
    },
    {
        day: '2020-07-03',
        kilogram: 81,
        calories: 280
    },
    {
        day: '2020-07-04',
        kilogram: 81,
        calories: 290
    },
    {
        day: '2020-07-05',
        kilogram: 80,
        calories: 160
    },
    {
        day: '2020-07-06',
        kilogram: 78,
        calories: 162
    },
    {
        day: '2020-07-07',
        kilogram: 76,
        calories: 390
    }
]

export default function ChartDailyActivity() {
    let re = data[0].day.split('-')[2]
    console.log('re',re);
    if (re.includes('0')) {
      console.log('oui');
      console.log(re.split('0'))
      re = re.split('0')[1]
      console.log(re);
    } else {
      console.log('non');
    }
    
    return (
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 30,
            right: 30,
            left: 5,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          {/* <XAxis dataKey= { "day".split('-')[2].includes('0') ?
            "day".split('-')[2].split('0')[1] : 
            "day".split('-')[2]
          }
            /> */}
          <XAxis dataKey="day"/>
          <YAxis dataKey="calories" orientation='right'/>
          <Tooltip contentStyle={{backgroundColor:'#E60000',color:'white'}}
          itemStyle={{color:'white', fontFamily:'Roboto'}}/>
          <Legend iconType='circle' width={400} align='right' verticalAlign='top'/>

          <Bar radius={[50,50,0,0]} barSize={10} name='Poids (kg)' dataKey="kilogram" fill="#020203" />
          <Bar radius={[50,50,0,0]} barSize={10} name='Calories brûlées (kCal)' dataKey="calories" fill="#FF0101" />
        </BarChart>
      </ResponsiveContainer>
    );
}

