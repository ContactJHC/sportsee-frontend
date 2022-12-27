import React, { PureComponent} from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';
import './ChartRadar.css'
import PropTypes from 'prop-types'

/**
 * Returns a radar-chart component from fetched data, giving an user's performance overview
 * @param {array} donnees The fetched data including 'value' and 'kind'
 * @param {number} value The user's score in one performance kind
 * @param {string} kind The name in french language of the performance kind
 * @returns {import('react').ReactElement} -
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
    donnees: PropTypes.arrayOf(
        PropTypes.shape({
          value: PropTypes.number.isRequired,
          kind: PropTypes.string.isRequired,
        }).isRequired,
    )
}
