import React, { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Label } from 'recharts';
import PropTypes from 'prop-types'

/**
 * Returns a bar-chart component from fetched data
 * @param {object} data 
 * @returns {import('react').ReactElement}
 */

export default function ChartDailyActivity({donnees}) {
  
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        width={500}
        height={300}
        data={donnees}
        margin={{
          top: 30,
          right: 30,
          left: 5,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" vertical={false} />
        <XAxis dataKey="day"/>
        <YAxis dataKey="calories" orientation='right'/>
        <Tooltip contentStyle={{backgroundColor:'#E60000',color:'white'}}
        itemStyle={{color:'white', fontFamily:'Roboto'}}/>
        <Legend iconType='circle' width={400} align='right' verticalAlign='top' height={50}/>

        <Bar radius={[50,50,0,0]} barSize={10} name='Poids (kg)' dataKey="kilogram" fill="#020203" />
        <Bar radius={[50,50,0,0]} barSize={10} name='Calories brûlées (kCal)' dataKey="calories" fill="#FF0101" />
      </BarChart>
    </ResponsiveContainer>
  )
}

ChartDailyActivity.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      day: PropTypes.string,
      kilogram: PropTypes.number,
      calories: PropTypes.number,
    }),
  ).isRequired,
}