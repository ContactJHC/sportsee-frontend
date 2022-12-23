import React, { PureComponent, useState, useEffect } from 'react';
import { fetchPerformanceData } from '../../Services/Services';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';
import './ChartRadar.css'
import PropTypes from 'prop-types'

/**
 * Returns a radar-chart component from fetched data
 * @param {object} kindPerformance
 * @param {array} datas 
 * @returns {import('react').ReactElement}
 */

export default function ChartRadar() {

    const [perfScore, setPerfScore] = useState([])
    const [loading,setLoading] = useState(false)

    useEffect(()=> {
        async function getPerfScore() {
            setLoading(true)
            let preDat = await fetchPerformanceData('18')

            const kindPerf = {
                1: 'Cardio',
                2: 'Énergie',
                3: 'Endurance',
                4: 'Force',
                5: 'Vitesse',
                6: 'Intensité'
            }

            let dataz = preDat.data
            let dt=[]
            let index = 1
            dataz.forEach((e,i) => {
                index = i+1
                dt.push(
                    {value : e.value, kind : kindPerf[index]}
                )
            })
            setPerfScore(dt)
            setLoading(false)
            }
        getPerfScore()
    }, [])

    return (
        <>
        {loading && (
        <div>spinner à insérer</div>)}
        {perfScore[1] && (
            <ResponsiveContainer width="100%" height="70%">
                <RadarChart cx="50%" cy="50%" outerRadius="80%" data={perfScore}>
                <PolarGrid radialLines={false} />
                <PolarAngleAxis tickSize={15} orient={30} axisLine={false} dataKey='kind' tick={{fill:'#fff'}}/>
                <PolarRadiusAxis axisLine={false} tick={false}  />
                <Radar dataKey="value" stroke="#FF0101" fill="#FF0101" fillOpacity={0.6} />
                </RadarChart>
            </ResponsiveContainer>
        )}
        </>
    );
}

ChartRadar.propTypes = {
datas: PropTypes.shape({
    value: PropTypes.number.isRequired,
    kind: PropTypes.number.isRequired
}),
data: PropTypes.arrayOf(PropTypes.object)
}
