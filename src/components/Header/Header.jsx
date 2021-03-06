import logo3 from '../../assets/img/logo/Logo3.svg';
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
import authService from '../../store/auth/authService';

function Header(props) {
    const logout = () => {
        authService.logout();
        window.location.reload();
    };
    return (
        <header className="header">
            <div className="header__container">
                <div className="header__inner">
                    <div className="header__logo">
                        <img
                            className="header__logo-2"
                            src={logo3}
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
