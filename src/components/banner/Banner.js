import './Banner.css'
import PropTypes from 'prop-types'

/**
 * Returns a name-personalized banner component from a prop name
 * @param {object} userName 
 * @returns {import('react').ReactElement}
 */

export default function Banner({userName}) {
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

Banner.defaultProps = {
    userName: PropTypes.string.isRequired
}
