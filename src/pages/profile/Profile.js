import { useState, useEffect } from 'react'
import React from 'react'
import { fetchMainData, fetchSessionsData, fetchActivityData, fetchPerformanceData} from '../../Services/Services'

import './Profile.css'

import Banner from '../../components/Banner/Banner'
import Summary from '../../components/Summary/Summary'
import Spinner from '../../components/Spinner/Spinner'

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
import ActivityDataFormater from '../../models/ActivityDataFormater'
import PerformancesDataFormater from '../../models/PerformancesDataFormater'

/**
 * Returns a single page component including a banner, 3 summaries and 4 charts
 * @returns {React.ReactElement} -
 */

function Profile() {

  let userId = '18'
  var url = new URL(window.location.href)
  // example : 'http://localhost:3001/?id=12'
  if(url.searchParams.get("id")) {
    userId = url.searchParams.get("id")
  }

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  const [usName, setUsName] = useState('')
  const [calorieCount, setCalorieCount] = useState('')
  const [proteinCount, setProteinCount] = useState('')
  const [carbohydrateCount, setCarbohydrateCount] = useState('')
  const [lipidCount, setLipidCount] = useState('')
  const [dataScore, setDataScore] = useState([])

  const [dataAverage, setDataAverage] = useState([])
  
  const [dataDaily, setDataDaily] = useState([])

  const [perfScore, setPerfScore] = useState([])

  useEffect(()=> {
    async function getData() {
      setLoading(true)

      let mainData = await fetchMainData(userId)
      if (mainData === undefined) {
        setError(true)
        setLoading(false)
      }
      let formatedMainData = new MainDataFormater(mainData)
      setUsName(formatedMainData.name)
      setCalorieCount(formatedMainData.calorie)
      setProteinCount(formatedMainData.protein)
      setCarbohydrateCount(formatedMainData.carbohydrate)
      setLipidCount(formatedMainData.lipid)
      setDataScore(formatedMainData.dataScore)

      let sessionsData = await fetchSessionsData(userId)
      let formatedSessionsData = new AverageTimeDataFormater(sessionsData)
      setDataAverage(formatedSessionsData.dataAverage)

      let activityData = await fetchActivityData(userId)
      let formatedActivityData = new ActivityDataFormater(activityData)
      setDataDaily(formatedActivityData.dataActivity)

      let performanceData = await fetchPerformanceData(userId)
      let formatedPerformanceData = new PerformancesDataFormater(performanceData.data)
      setPerfScore(formatedPerformanceData.perfScore)

      setLoading(false)
    }
    getData()
  }, [])
  
  return (
    <div id='mainContainer'>
        <div id='bannerContainer'>
            {usName && (<Banner userName={usName}/>)}
        </div>
        {error && (<div>Impossible d'acc??der aux donn??es du r??seau, veuillez essayer de recharger la page ult??rieurement.</div>)}
        {loading && (<Spinner />)}
        {!error && (
        <div id='chartsAndSummariesContainer'>
            <div id='chartsContainer'>
              <div id='dailyActivityContainer'>
                <div id='dailyActivityTitle'>Activit?? quotidienne</div>
                {dataDaily[1] && (<ChartDailyActivity donnees={dataDaily}/>)}
              </div>
              <div id='averageAndRadarAndScoreContainer'>
                <div id='averageChart'>
                {dataAverage[1] && (<ChartAverageTime donnees={dataAverage} />)}
                </div>
                <div id='radarChart'>
                {perfScore[1] && (<ChartRadar donnees={perfScore}/>)}
                </div>                  
                <div id='scoreChart'>
                  {dataScore[0] && (<Score donnees={dataScore}/>)}
                </div>
              </div>
            </div>
            <div id='summariesContainer'>
              {calorieCount && (<Summary name='Calories' number={calorieCount} icon={iconCalories}/>)}
              {proteinCount && (<Summary name='Prot??ines' number={proteinCount} icon={iconProteins}/>)}
              {carbohydrateCount && (<Summary name='Glucides' number={carbohydrateCount} icon={iconCarbs}/>)}
              {lipidCount && (<Summary name='Lipides' number={lipidCount} icon={iconLipids}/>)}
            </div>
        </div>)}
    </div>
  )
}

export default Profile