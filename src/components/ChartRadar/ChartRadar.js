import React, { PureComponent} from 'react';
// import { fetchPerformanceData } from '../../Services/Services';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';
import './ChartRadar.css'
import PropTypes from 'prop-types'
// import PerformancesDataFormater from '../../models/PerformancesDataFormater';

/**
 * Returns a radar-chart component from fetched data
 * @param {object} kindPerformance
 * @param {array} datas 
 * @returns {import('react').ReactElement}
 */

export default function ChartRadar({donnees}) {
    
    return (
        <ResponsiveContainer width="100%" height="70%">
            <RadarChart cx="50%" cy="50%" outerRadius="80%" data={donnees}>
            <PolarGrid radialLines={false} />
            <PolarAngleAxis tickSize={15} orient={30} axisLine={false} dataKey='kind' tick={{fill:'#fff'}}/>
            <PolarRadiusAxis axisLine={false} tick={false}  />
            <Radar dataKey="value" stroke="#FF0101" fill="#FF0101" fillOpacity={0.6} />
            </RadarChart>
        </ResponsiveContainer>
    );
}

ChartRadar.propTypes = {
datas: PropTypes.shape({
    perfScore: PropTypes.arrayOf(PropTypes.object).isRequired,
})
}
