import { useState, useEffect } from 'react'
import { fetchMainData, fetchSessionsData } from '../../Services/Services'


import './Profile.css'

import Banner from '../../components/Banner/Banner'
import Summary from '../../components/Summary/Summary'

import iconCalories from '../../assets/calories-icon.png'
import iconCarbs from '../../assets/carbs-icon.png'
import iconProteins from '../../assets/protein-icon.png'
import iconLipids from '../../assets/fat-icon.png'

import ChartDailyActivity from '../../components/ChartDailyActivity/ChartDailyActivity'
import ChartRadar from '../../components/ChartRadar/ChartRadar'
import ChartAverageTime from '../../components/ChartAverageTime/ChartAverageTime'
import Score from '../../components/ChartScore/Score'

import MainDataFormater from '../../models/MainDataFormater'
import AverageTimeDataFormater from '../../models/AverageTimeDataFormater'


/**
 * Returns a single page component including a banner, 3 summaries and 4 charts
 * @returns {import('react').ReactElement}
 */

export default function Profile() {
  const [loading, setLoading] = useState(false)

  const [usName, setUsName] = useState('')
  const [calorieCount, setCalorieCount] = useState('')
  const [proteinCount, setProteinCount] = useState('')
  const [carbohydrateCount, setCarbohydrateCount] = useState('')
  const [lipidCount, setLipidCount] = useState('')
  const [dataScore, setDataScore] = useState([])

  const [dataAverage, setDataAverage] = useState([])
  


  useEffect(()=> {
    async function getData() {
      setLoading(true)

      let mainData = await fetchMainData('18')
      let formatedMainData = new MainDataFormater(mainData)
      setUsName(formatedMainData.name)
      setCalorieCount(formatedMainData.calorie)
      setProteinCount(formatedMainData.protein)
      setCarbohydrateCount(formatedMainData.carbohydrate)
      setLipidCount(formatedMainData.lipid)
      setDataScore(formatedMainData.dataScore)

      let sessionsData = await fetchSessionsData('12')
      let formatedSessionsData = new AverageTimeDataFormater(sessionsData)
      setDataAverage(formatedSessionsData.dataAverage)

      

      setLoading(false)
    }
    getData()
  }, [])
  
  return (
    <div id='mainContainer'>
        <div id='bannerContainer'>
            {usName && (<Banner userName={usName}/>)}
        </div>
        {loading && (
          <div>Spinner à insérer</div>)}
          <div id='chartsAndSummariesContainer'>
              <div id='chartsContainer'>
                <div id='dailyActivityContainer'>
                  <div id='dailyActivityTitle'>Activité quotidienne</div>
                  <ChartDailyActivity />
                </div>
                <div id='averageAndRadarAndScoreContainer'>
                  <div id='averageChart'>
                  {dataAverage[1] && (<ChartAverageTime donnees={dataAverage} />)}
                  </div>
                  <div id='radarChart'>
                    <ChartRadar />
                  </div>                  
                  <div id='scoreChart'>
                    {dataScore[0] && (<Score donnees={dataScore}/>)}
                  </div>
                </div>
              </div>
              <div id='summariesContainer'>
                {calorieCount && (<Summary name='Calories' number={calorieCount} icon={iconCalories}/>)}
                {proteinCount && (<Summary name='Protéines' number={proteinCount} icon={iconProteins}/>)}
                {carbohydrateCount && (<Summary name='Glucides' number={carbohydrateCount} icon={iconCarbs}/>)}
                {lipidCount && (<Summary name='Lipides' number={lipidCount} icon={iconLipids}/>)}
              </div>
          </div>
    </div>
  )
}
