import React, { PureComponent } from 'react';
import { RadialBarChart, RadialBar, Legend, ResponsiveContainer, PolarAngleAxis } from 'recharts';

const data = [
  {
    name: 'Pourcentage',
    valeur: 35,
  }
];



export default function ScoreModel() {


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
