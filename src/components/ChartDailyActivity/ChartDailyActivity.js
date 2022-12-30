import React, { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Label } from 'recharts';
import PropTypes from 'prop-types'

/**
 * Returns a bar-chart component from fetched data, giving a daily activity overview
 * @param {array} donnees The fetched datas including 'day', 'kilogram' and 'calories'
 * @param {string} day The session's given day
 * @param {number} kilogram The user's weight on the given day
 * @param {number} calories The amount of used calories on the given day
 * @returns {React.ReactElement} -
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
  donnees: PropTypes.arrayOf(
    PropTypes.shape({
      day: PropTypes.string.isRequired,
      kilogram: PropTypes.number.isRequired,
      calories: PropTypes.number.isRequired
    }).isRequired,
  )
}