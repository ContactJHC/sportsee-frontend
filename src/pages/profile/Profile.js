import './Profile.css'
import Banner from '../../components/Banner/Banner'
// below are required imports for summariescontainers Components
import iconCalories from '../../assets/calories-icon.png'
import Summary from '../../components/Summary/Summary'
import iconCarbs from '../../assets/carbs-icon.png'
import iconProteins from '../../assets/protein-icon.png'
import iconLipids from '../../assets/fat-icon.png'
import ChartDailyActivity from '../../components/ChartDailyActivity/ChartDailyActivity'
import ChartRadar from '../../components/ChartRadar/ChartRadar'
import ChartAverageTime from '../../components/ChartAverageTime/ChartAverageTime'
// import ChartScore from '../../components/ChartScore/ChartScore'
import Score from '../../components/ChartScore/Score'

export default function Profile() {
  
  
  return (
    <div id='mainContainer'>
        <div id='bannerContainer'>
            <Banner userName={'Thomas'}/>
        </div>
        <div id='chartsAndSummariesContainer'>
            <div id='chartsContainer'>
              <div id='dailyActivityContainer'>
                <ChartDailyActivity />
              </div>
              <div id='averageAndRadarAndScoreContainer'>
                <div id='averageChart'>
                  <ChartAverageTime />
                </div>
                <div id='radarChart'>
                  <ChartRadar />
                </div>
                  
                <div id='scoreChart'>
                  <Score />
                </div>
              </div>
            </div>
            <div id='summariesContainer'>
              

              

              <Summary name='Calories' number='1,930' icon={iconCalories}/>
              <Summary name='Protéines' number='155' icon={iconProteins}/>
              <Summary name='Glucides' number='290' icon={iconCarbs}/>
              <Summary name='Lipides' number='50' icon={iconLipids}/>
              
            </div>
        </div>
    </div>
  )
}
