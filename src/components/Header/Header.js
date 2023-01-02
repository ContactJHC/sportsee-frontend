import './Header.css'
import logo from '../../assets/logo.png'
import React from 'react'

/**
 * Returns a header component including a nav bar
 * @returns {React.ReactElement} -
 */

function Header() {
  return (
    <header>
        <div id='logo' className='navOption'>
                <img src={logo} alt='logo' />
        </div>
        <nav>
            <div id='navHome' className='navOption'>Accueil</div>
            <div id='navProfile' className='navOption'>Profil</div>
            <div id='navSettings' className='navOption'>Réglages</div>
            <div id='navCommunity' className='navOption'>Communauté</div>
        </nav>
        

    </header>
  )
}

export default Header
