import { ButtonRegistry } from '../../buttons/button-registry/button-registry';
import logo from '../../../assets/img/logo/logo.png';
import './header.scss';

export const Header = () => {
    return (
        <div style={{ padding: '0 20px' }}>
            <header className="header">
                <div className="header__logo pointer">
                    <a href="/standard-certifications/list">
                    <img className="logo" src={logo} alt="logo" />
                    </a>
                </div>
                <div className="header__title">
                    <div className="header__title_title">ПРОФСДС</div>
                </div>
                <div>
                    <ButtonRegistry
                        text="Реестр СДС"
                        path={'/standard-certifications/list'}
                    />
                    <ButtonRegistry
                        text="Реестр ОС"
                        path={'/organ-certifications/list'}
                    />
                    <ButtonRegistry
                        text="Реестр экспертов"
                        path={'organ-certification-experts/list'}
                    />
                    <ButtonRegistry
                        text="Реестр сертификатов"
                        path={'certificates/list'}
                    />
                </div>
            </header>
            <div className="header__line"></div>
        </div>
    );
};
