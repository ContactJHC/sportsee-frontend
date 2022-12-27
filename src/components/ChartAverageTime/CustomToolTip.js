
import React from 'react'
import PropTypes from 'prop-types'

/**
 * Returns a customized tool tip from a prop object, being used as a dynamic hovered data indicator 
 * @param {boolean} active A boolean which is true when the mouse is hovering over the container
 * @param {array} payload The source data of the content to be displayed in the tooltip
 * @returns {import('react').ReactElement} -
 */
export default function CustomToolTip({active, payload }) {
if (active && payload && payload.length) {
  console.log(payload);
  return (

    <div>
        <p style={{margin:'10px', color:'black'}}>
      {payload[0].value} min
    </p>
      </div>

    
  )
}
}

CustomToolTip.propTypes = {
  active: PropTypes.bool,
  payload: PropTypes.arrayOf(PropTypes.any),
}