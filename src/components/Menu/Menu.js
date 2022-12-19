import './Menu.css'
import meditation from '../../assets/meditation.png'
import swimming from '../../assets/swimming.png'
import biking from '../../assets/biking.png'
import workout from '../../assets/workout.png'
/**
 * Returns a header component including a nav bar
 * @returns {import('react').ReactElement}
 */


export default function Menu() {
  return (
    <div id='lateralMenu'>
        <div id='lateralIcons'>
            <img src={meditation} alt='meditation' />
            <img src={swimming} alt='swimming' />
            <img src={biking} alt='biking' />
            <img src={workout} alt='workout' />
        </div>
        <div id='lateralCopyright'>
            <p>Copyright, SportSee 2020</p>
        </div>
    </div>
  )
}
