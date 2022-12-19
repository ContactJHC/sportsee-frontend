import './Header.css'
import logo from '../../assets/logo.png'

/**
 * Returns a header component including a nav bar
 * @returns {import('react').ReactElement}
 */

export default function Header() {
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
