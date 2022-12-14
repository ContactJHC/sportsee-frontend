import './Spinner.css'
import React from 'react'

/**
 * Returns a spinner component including two rings
 * @returns {React.ReactElement} - 
 */

function Spinner() {
  return (
    <div class="overlay">
        <div class="loading">
            <div class="loading-spinner"></div>
            <div class="loading-spinner"></div>			
        </div>
    </div>
  )
}

export default Spinner
