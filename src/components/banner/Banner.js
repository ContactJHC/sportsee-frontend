import './Banner.css'
import PropTypes from 'prop-types'
import React from 'react'

/**
 * Returns a name-personalized greeting banner component from a prop name
 * @param {string} userName -
 * @returns {React.ReactElement} -
 */

function Banner({userName}) {
  return (
    <>
        <div id='greeting'>
            <p>Bonjour &nbsp;
                <span id='userName'>
                    {userName}
                </span>
            </p>
        </div>
        <div id='motivationalText'>
            <p>Félicitations ! Vous avez explosé vos objectifs hier <span className='emoji' role='img' aria-label='dog' >👏</span></p>
        </div>
    </>
  )
}

Banner.propTypes = {
    userName: PropTypes.string.isRequired
}

export default Banner
