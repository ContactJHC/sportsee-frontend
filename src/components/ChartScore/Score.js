import React, { PureComponent, useEffect } from 'react';
import { RadialBarChart, RadialBar, Legend, ResponsiveContainer, PolarAngleAxis } from 'recharts';
import { fetchMainData } from '../../Services/Services';
import './Score.css'
import PropTypes from 'prop-types'

/**
 * Returns a radial-bar-chart component from fetched data
 * @param {array} data
 * @returns {import('react').ReactElement}
 */


const data = [
  {
    name: 'Pourcentage',
    valeur: 12,
  }
];

export default function Score() {

  useEffect(()=> {
    async function getDataScore() {
      let preData = await fetchMainData('12') 
      console.log(preData);
    }
    getDataScore()
  }, [])

  return (
    <div id='scoreContainer' >
      {/* style={{backgroundColor:'#FBfbFb', width:'500px', height:'500px', border:'solid red 10px', position:'absolute', top:'150px', left:'150px'}}> */}
      <ResponsiveContainer width="100%" height="100%">
        <RadialBarChart  
            innerRadius="100%" 
            outerRadius="60%" 
            barSize={10}
            startAngle={90}
            endAngle={450} 
            data={data}
            style={{ background: "transparent"}}
        >
        
          <PolarAngleAxis 
            type="number"
            domain={[0,100]}
            angleAxisId={0}
            axisLineType='circle'
            tick={false}
            // background={{ fill: "blue" }}
            style={{fill: "#FFF" }}
          />
          <RadialBar 
            background={{ fill: "#fbfbfb" }}
            cornerRadius={5} 
            dataKey= 'valeur'
            style={{fill: "#FF0000", background:"white" }}
            />
          {/* <Legend iconSize={10} layout="vertical" verticalAlign="middle" wrapperStyle={style} /> */}
        </RadialBarChart>
      </ResponsiveContainer>
        <div id='scoreTitle'>Score</div>
        <div id="scoreSummary">
          <div id='scorePct'>{data[0].valeur}%</div>
          <div id='scoreText'>de votre <br/>objectif</div>
        </div>
        
    </div>
  )
}

Score.propTypes = {
  data: PropTypes.object.isRequired,
  valeur: PropTypes.number.isRequired
}