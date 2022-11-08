import React, { PureComponent, useEffect } from 'react';
import { RadialBarChart, RadialBar, Legend, ResponsiveContainer, PolarAngleAxis } from 'recharts';
import { fetchMainDatas } from '../../Services/Services';
const data = [
  {
    name: 'Pourcentage',
    valeur: 12,
  }
];


export default function ScoreModel() {

  useEffect(()=> {
    async function getDataScore() {
      let preData = await fetchMainDatas('12') 
      console.log(preData);
    }
    getDataScore()
  }, [])

    return (
      

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

    
    );
  }
