import './Header.css'
import logo from '../../assets/logo.png'

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
