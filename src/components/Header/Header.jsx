import logo from '../../assets/img/logo/Logo.svg';
import descLogo from '../../assets/img/logo/desc.svg';
import {
    SearchOutlined,
    NotificationsNoneOutlined,
    ChatBubbleOutlineOutlined,
    LanguageOutlined,
    Settings,
    AccountCircle,
    PowerSettingsNew,
} from '@mui/icons-material';
import './header.scss';
import {
    useNavigate,
} from 'react-router-dom';

function Header(props) {
    const navigate = useNavigate()
    const logout = ()=> {
   
    localStorage.removeItem('user')
    navigate('/login');
    window.location.reload();

    }
    return (
        <header className="header">
            <div className="header__container">
                <div className="header__inner">
                    <div className="header__logo">
                        <img className="header__logo-1" src={logo} alt="logo" />
                        <img
                            className="header__logo-2"
                            src={descLogo}
                            alt="logo"
                        />
                    </div>
                    <nav className="header__nav">
                        <div className="header__icons-search">
                            <input className="header__input" />
                            <SearchOutlined className="icon" />
                        </div>

                        <ul className="header__icons">
                         
                            <li className="header__icon">
                                <NotificationsNoneOutlined className="icon" />
                            </li>
                            <li className="header__icon">
                                <ChatBubbleOutlineOutlined className="icon" />
                            </li>
                            <li className="header__icon">
                                <LanguageOutlined className="icon" />
                            </li>
                            <li className="header__icon">
                                <Settings className="icon" />
                            </li>
                            <li className="header__icon">
                                <AccountCircle className="icon" />
                            </li>
                            <li className="header__icon" onClick={logout}>
                                <PowerSettingsNew className="icon" />
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
}

export default Header;
