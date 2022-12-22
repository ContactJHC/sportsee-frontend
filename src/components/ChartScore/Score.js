import React, { PureComponent, useState, useEffect } from 'react';
import { RadialBarChart, RadialBar, Legend, ResponsiveContainer, PolarAngleAxis } from 'recharts';
import { fetchMainData } from '../../Services/Services';
import './Score.css'
import PropTypes from 'prop-types'

/**
 * Returns a radial-bar-chart component from fetched data
 * @param {array} data
 * @returns {import('react').ReactElement}
 */

export default function Score() {

  const [dataScore, setDataScore] = useState([])
  const [loading,setLoading] = useState(false)

  useEffect(()=> {
    async function getDataScore() {
      setLoading(true)
      let preData = await fetchMainData('12')
      setDataScore([
        {
          name: 'Pourcentage',
          valeur: preData.todayScore * 100
        }
      ])
      setLoading(false)
    }
    getDataScore()
  }, [])

  return (
    <>
    {loading && (
    <div>spinner à insérer</div>)}
    {dataScore[0] && (
    <div id='scoreContainer' >
      <ResponsiveContainer width="100%" height="100%">
        <RadialBarChart  
            innerRadius="100%" 
            outerRadius="60%" 
            barSize={10}
            startAngle={90}
            endAngle={450} 
            data={dataScore}
            style={{ background: "transparent"}}
        >
        
          <PolarAngleAxis 
            type="number"
            domain={[0,100]}
            angleAxisId={0}
            axisLineType='circle'
            tick={false}
            style={{fill: "#FFF" }}
          />
          <RadialBar 
            background={{ fill: "#fbfbfb" }}
            cornerRadius={5} 
            dataKey= 'valeur'
            style={{fill: "#FF0000", background:"white" }}
            />
        </RadialBarChart>
      </ResponsiveContainer>
        <div id='scoreTitle'>Score</div>
        <div id="scoreSummary">
          <div id='scorePct'>{dataScore[0].valeur}%</div>
          <div id='scoreText'>de votre <br/>objectif</div>
        </div>
    </div>
    )}
  </>
  )
}

// Score.propTypes = {
//   data: PropTypes.object.isRequired,
//   valeur: PropTypes.number.isRequired
// }