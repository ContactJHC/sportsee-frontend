import './Summary.css'
import PropTypes from 'prop-types'
import React from 'react'

/**
 * Returns a div component including a summary from a string, a number and an icon
 * @prop {string} name name of the summary
 * @prop {number} number figure indicator of the summary
 * @prop {string} icon path to the summary's logo
 * 
 * @returns {React.ReactElement}
 */

function Summary({name, number, icon}) {

  return (
    <div className='categoryContainer'>
        <div className='categorySummary'>
            <div className='categoryIcon'>
            <img className='iconImages' src={icon} alt={name}/>
            </div>
            <div className='categoryText'>
            {name==='Calories' ? (
              <div className='categoryNumber'>{number}kCal</div>
            ) : (
              <div className='categoryNumber'>{number}g</div>              
            )}
            <div className='categoryName'>{name}</div>
            </div>
        </div>
    </div>
  )
}

Summary.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
  icon: PropTypes.string.isRequired
}

export default Summary