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

            </div>
            <div id='summariesContainer'>

            </div>
        </div>
    </div>
  )
}
