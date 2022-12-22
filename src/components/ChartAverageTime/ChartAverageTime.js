import React, { PureComponent, useState, useEffect } from 'react'
import { fetchSessionsData } from '../../Services/Services';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import './ChartAverageTime.css'
import CustomToolTip from './CustomToolTip'
import CustomCursor from './CustomCursor'
import PropTypes from 'prop-types'


/**
 * Returns a line-chart component from fetched data
 * @param {array} data 
 * @returns {import('react').ReactElement}
 */


export default function ChartAverageTime() {

  const [dataAverage, setDataAverage] = useState([])
  const [loading,setLoading] = useState(false)

  useEffect(()=> {
    async function getDataScore() {
      setLoading(true)
      let preData = await fetchSessionsData('12')
      setDataAverage(preData.sessions)      
      setLoading(false)
    }
    getDataScore()
  }, [])

  return (
    <>
      {loading && (
        <div>spinner à insérer</div>)}
      {dataAverage[1] && (
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
              height={250}
              data={dataAverage}
              margin={{
                bottom: 10
              }}
            >
              <CartesianGrid strokeDasharray="3 3" horizontal={false} vertical={false}/>
              <XAxis hide dataKey="day" tickLine={false} axisLine={false} />
              <YAxis hide={true} padding={{top:80, bottom: 100}} />
              <Tooltip wrapperStyle={{ display:'flex', backgroundColor:"white", color: "black"}}
                labelStyle={{display: "none"}}
                content={<CustomToolTip/>}
                cursor={<CustomCursor />} />
              <Line type="natural" dataKey="sessionLength" activeDot={{ stroke: "rgba(255, 255, 255, 0.5)", strokeWidth: 10, r: 5, fill:'#fff'}} 
              stroke="#fff" 
              strokeWidth={3} dot={false}/>

            </LineChart>
          </ResponsiveContainer>
        </div>
      )}
    </>
  );
  
}

ChartAverageTime.propTypes = {
  sessions: PropTypes.arrayOf(
    PropTypes.shape({
      day: PropTypes.number.isRequired,
      sessionLength: PropTypes.number.isRequired,
    }).isRequired,
  )
}
