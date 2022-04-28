import logo from '../../assets/img/logo/Logo.svg'
import descLogo from '../../assets/img/desc/desc.svg'
import './header.scss'

function Header(props) {
  return (
    <div>
      <header className="header">
        <div className="header__inner">
          <div className="header__logo">
            <img className='header__logo-1' src={logo} alt='logo'/>
            <img className='header__logo-2' src={descLogo} alt='logo'/>
          </div>
          <div className="header__icons">
            <input className='header__input' />
            <img className='header__icon-x' src={logo} alt='logo'/>
            <img className='header__icon-x' src={logo} alt='logo'/>
            <img className='header__icon-x' src={logo} alt='logo'/>
            <img className='header__icon-x' src={logo} alt='logo'/>
            <img className='header__icon-x' src={logo} alt='logo'/>
            <img className='header__icon-x' src={logo} alt='logo'/>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
