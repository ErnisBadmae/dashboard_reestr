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

function Header(props) {
  return (
    <header className="header">
      <div className="header__inner">
        <div className="header__logo">
          <img className="header__logo-1" src={logo} alt="logo" />
          <img className="header__logo-2" src={descLogo} alt="logo" />
        </div>
        <div className="header__icons">
          <div className="header__icons-search">
            <input className="header__input" />
            <SearchOutlined className="icon" />
          </div>
          <div className="item">
            <NotificationsNoneOutlined className="icon" />
          </div>
          <div className="item">
            <ChatBubbleOutlineOutlined className="icon" />
          </div>
          <div className="item">
            <LanguageOutlined className="icon" />
          </div>
          <div className="item">
            <Settings className="icon" />
          </div>
          <div className="item">
            <AccountCircle className="icon" />
          </div>
          <div className="item">
            <PowerSettingsNew className="icon" />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
