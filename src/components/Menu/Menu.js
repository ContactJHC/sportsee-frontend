import './Menu.css'
import meditation from '../../assets/meditation.png'
import swimming from '../../assets/swimming.png'
import biking from '../../assets/biking.png'
import workout from '../../assets/workout.png'
import React from 'react'
/**
 * Returns a lateral menu component including 4 icons and a copyright license text
 * @returns {React.ReactElement} -
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
