import logo from '../../assets/img/logo/Logo.svg';
import logo2 from '../../assets/img/logo/logo2.png';
import icon from '../../assets/img/icons/icon1.png';

import './footer.scss';

function Footer(props) {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__logo">
          <div className="footer__logo-block">
            <img className="footer__logo-1" src={logo} alt="logo" />
            <img className="footer__logo-2" src={logo2} alt="logo2" />
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
            <p className="footer__content-item">Аттестация Эксперта</p>
          </div>
          <div className="footer__content-items">
            <p className="footer__content-item">Реестр СДС</p>
            <p className="footer__content-item">Реестр ОС</p>
            <p className="footer__content-item">Реестр Экспертов</p>
            <p className="footer__content-item">Реестр Сертификатов</p>
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
                <p>Москва </p>
                <p>Нахимовский проспект</p>
                <p>дом 31 корп 2</p>
              </div>
            </a>
            <img className="footer__icon-1" src={icon} alt="icon" />
          </div>
          <div className="footer__rasp">
            <p className='footer__rasp-text'>расписанеи</p>
            <img className="footer__icon-1" src={icon} alt="icon" />
          </div>
          {/* <p>Москва Нахимовский проспект</p> */}
          {/* <p>Москва Нахимовский проспек</p>
          <p>Москва Нахимовский</p>
          <p>Москва Нахим</p> */}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
