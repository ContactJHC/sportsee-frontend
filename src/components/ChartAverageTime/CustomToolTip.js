
import React from 'react'
import PropTypes from 'prop-types'

export default function CustomToolTip({active, payload }) {
if (active && payload && payload.length) {
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