import './Profile.css'
import Banner from '../../components/banner/Banner'
// below are required imports for summariescontainers Components
import caloriesIcon from '../../assets/calories-icon.png'
import carbsIcon from '../../assets/carbs-icon.png'
import proteinsIcon from '../../assets/protein-icon.png'
import lipidsIcon from '../../assets/fat-icon.png'

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
              <div id='caloriesContainer'>
                <div id='caloriesSummary'>
                  <div id='caloriesIcon'>
                    <img className='iconImages' src={caloriesIcon} alt='calories' />
                  </div>
                  <div className='caloriesText'>
                    <div className='caloriesNumber'>1.930kCal</div>
                    <div className='caloriesName'>Calories</div>
                  </div>
                </div>
              </div>
              <div id='proteinsContainer'></div>
              <div id='carbsContainer'></div>
              <div id='lipidsContainer'></div>
            </div>
        </div>
    </div>
  )
}
