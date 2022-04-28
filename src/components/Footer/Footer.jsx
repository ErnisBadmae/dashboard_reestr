import logo from '../../assets/img/logo/Logo.svg';
import logo2 from '../../assets/img/logo/logo2.png';
import './footer.scss';

function Footer(props) {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__logo">
          <img className="footer__logo-1" src={logo} alt="logo" />
          <img className="footer__logo-2" src={logo2} alt="logo2" />
          <span className='footer__logo-text'>ТК 066</span>
        </div>
        
        <div className="footer__content">
          <div className="footer__content-1">
            <span >Заявление СДС</span>
            <span>Заявление ОС</span>
            <span>Сертификация</span>
            <span>Аттестация Эксперта</span>
          </div>
          <div className="footer__content-2">
            <span>Реестр СДС</span>
            <span>Реестр ОС</span>
            <span>Реестр Экспертов</span>
            <span>Реестр Сертификатов</span>
          </div>
          <div className="footer__content-3">
            <div className="footer__content-1">
              <span>Сообщения</span>
              <span>Пользователи</span>
              <span>Настройки</span>
              <span>Отчеты</span>
            </div>
          </div>
        </div>
        <div className="footer__contact">
          <span>Москва Нахимовский проспект</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
