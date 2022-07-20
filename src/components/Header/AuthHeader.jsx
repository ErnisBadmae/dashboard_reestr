import logo3 from '../../assets/img/logo/Logo3.svg';

import './header.scss';

function AuthHeader(props) {
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
                    <nav className="header__nav"></nav>
                </div>
            </div>
        </header>
    );
}

export default AuthHeader;
