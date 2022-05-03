import logo from '../../assets/img/logo/Logo.svg';
import logo2 from '../../assets/img/logo/logo2.png';
import {
    LocationOn,
    AccessTime,
    MailOutline,
    Phone,
} from '@mui/icons-material';

import './footer.scss';

function Footer(props) {
    return (
        <footer className="footer">
            <div className="footer__inner">
                <div className="footer__logo">
                    <div className="footer__logo-block">
                        <img className="footer__logo-1" src={logo} alt="logo" />
                        <img
                            className="footer__logo-2"
                            src={logo2}
                            alt="logo2"
                        />
                    </div>
                    <div className="footer__logo-tk">
                        <p className="footer__logo-text">ТК 066</p>
                        <p className="footer__logo-lk">Личный кабинет</p>
                    </div>
                </div>

                <div className="footer__content">
                    <div className="footer__content-items">
                        <p className="footer__content-item">Заявление СДС</p>
                        <p className="footer__content-item">Заявление ОС</p>
                        <p className="footer__content-item">Сертификация</p>
                        <p className="footer__content-item">
                            Аттестация Эксперта
                        </p>
                    </div>
                    <div className="footer__content-items">
                        <p className="footer__content-item">Реестр СДС</p>
                        <p className="footer__content-item">Реестр ОС</p>
                        <p className="footer__content-item">Реестр Экспертов</p>
                        <p className="footer__content-item">
                            Реестр Сертификатов
                        </p>
                    </div>
                    <div className="footer__content-items">
                        <p className="footer__content-item">Сообщения</p>
                        <p className="footer__content-item">Пользователи</p>
                        <p className="footer__content-item">Настройки</p>
                        <p className="footer__content-item">Отчеты</p>
                    </div>
                </div>
                <div className="footer__contact">
                    <div className="footer__address">
                        <a className="footer__address-click" href="#">
                            <div className="footer__address-p">
                                <p className="footer-elem">Москва </p>
                                <p className="footer-elem">
                                    Нахимовский проспект
                                </p>
                                <p className="footer-elem">дом 31, корпус 2</p>
                            </div>
                        </a>
                        <LocationOn className="footer__icon" />
                    </div>
                    <div className="footer__rasp">
                        <p className="footer__rasp-text">
                            Понедельник - Пятница 10:00 - 18:00
                        </p>
                        <AccessTime className="footer__icon" />
                    </div>
                    <div className="footer__email">
                        <a
                            className="footer__email-text"
                            href="mailto:mail@tk066.ru"
                        >
                            <div className="footer__email-p">mail@tk066.ru</div>
                        </a>
                        <MailOutline className="footer__icon" />
                    </div>
                    <div className="footer__phone">
                        <a
                            className="footer__phone-text"
                            href="tel:+74951284320"
                        >
                            <div className="footer__phone-p">
                                +7(495)128-43-20
                            </div>
                        </a>
                        <Phone className="footer__icon" />
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
