import './Profile.css'
import Banner from '../../components/Banner/Banner'
// below are required imports for summariescontainers Components
import iconCalories from '../../assets/calories-icon.png'
import Summary from '../../components/Summary/Summary'
import iconCarbs from '../../assets/carbs-icon.png'
import iconProteins from '../../assets/protein-icon.png'
import iconLipids from '../../assets/fat-icon.png'

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
              

              

              <Summary name='Calories' number='1,930kCal' icon={iconCalories}/>
              <Summary name='Protéines' number='155g' icon={iconProteins}/>
              <Summary name='Glucides' number='290g' icon={iconCarbs}/>
              <Summary name='Lipides' number='50g' icon={iconLipids}/>
              
            </div>
        </div>
    </div>
  )
}
