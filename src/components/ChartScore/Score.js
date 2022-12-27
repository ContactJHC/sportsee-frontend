import React, { PureComponent } from 'react';
import { RadialBarChart, RadialBar, Legend, ResponsiveContainer, PolarAngleAxis } from 'recharts';
import './Score.css'
import PropTypes from 'prop-types'

/**
 * Returns a radial-bar-chart component from fetched data, giving an overall percentage attainment of the user's goal
 * @param {array} donnees The fetched data, including 'name' and 'valeur'
 * @param {string} name The category name of the given value, in case of a Legend component use
 * @param {number} valeur The percentage value of the user's attainment 
 * @returns {import('react').ReactElement} -
 */

export default function Score({donnees}) {
  
  return (
    <div id='scoreContainer' >
      <ResponsiveContainer width="100%" height="100%">
        <RadialBarChart  
            innerRadius="100%" 
            outerRadius="60%" 
            barSize={10}
            startAngle={90}
            endAngle={450} 
            data={donnees}
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
          <div id='scorePct'>{donnees[0].valeur}%</div>
          <div id='scoreText'>de votre <br/>objectif</div>
        </div>
    </div>
  )
}

Score.propTypes = {
  donnees: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        valeur: PropTypes.number.isRequired,
      }).isRequired,
  )
}