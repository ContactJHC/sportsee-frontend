import './Profile.css'
import Banner from '../../components/banner/Banner'

export default function Profile() {
  return (
    <div id='mainContainer'>
        <div id='bannerContainer'>
            <Banner userName={'Thomas'}/>
        </div>
        <div id='chartsAndSummariesContainer'>
            <div id='chartsContainer'>
              <div id='dailyActivityContainer'>

              </div>
              <div id='averageAndIntensityAndScoreContainer'>
                <div id='averageChart'></div>
                <div id='intensityChart'></div>
                <div id='scoreChart'></div>
              </div>
            </div>
            <div id='summariesContainer'>
              <div id='caloriesSummary'></div>
              <div id='proteinsSummary'></div>
              <div id='carbsSummary'></div>
              <div id='lipidsSummary'></div>
            </div>
        </div>
    </div>
  )
}
