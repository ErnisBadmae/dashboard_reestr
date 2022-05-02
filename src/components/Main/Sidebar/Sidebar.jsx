import { Link } from 'react-router-dom';
import './sidebar.scss';

function Sidebar(props) {
  return (
    <section className="sidebar">
      <div className="sidebar__inner">
        <ul>
          <p className="sidebar__inner-title">Заявления </p>
          <li>
            <div className="sidebar__inner-item" />
            <Link to="/declaration">
              <span>Заявление СДС</span>
            </Link>
          </li>
          <li>
            <div className="sidebar__inner-item" />
            <span>Заявление ОС</span>
          </li>
          <li>
            <div className="sidebar__inner-item" />
            <span>Сертификация</span>
          </li>
          <li>
            <div className="sidebar__inner-item" />
            <span>Аттестация Эксперта</span>
          </li>
          <li>
            <div className="sidebar__inner-item" />
            <span>Аттестация Эксперта</span>
          </li>

          <p className="sidebar__inner-title">Реестры</p>

          <li>
            <div className="sidebar__inner-item" />
            <span>Реестр СДС</span>
          </li>
          <li>
            <div className="sidebar__inner-item" />
            <span>Реестр ОС</span>
          </li>
          <li>
            <div className="sidebar__inner-item" />
            <span>Реестр Сертификатов</span>
          </li>
          <li>
            <div className="sidebar__inner-item" />
            <span>Реестр Экспертов</span>
          </li>
          <p className="sidebar__inner-title">ПОЛЬЗОВАТЕЛЬСКИЙ ИНТЕРФЕЙС</p>

          <li>
            <div className="sidebar__inner-item" />
            <span>Сообщения</span>
          </li>
          <li>
            <div className="sidebar__inner-item" />
            <span>Пользователи</span>
          </li>
          <p className="sidebar__inner-title">СЕРВИСЫ</p>

          <li>
            <div className="sidebar__inner-item" />
            <span>Отчеты </span>
          </li>

          <li>
            <div className="sidebar__inner-item" />
            <span>Настройки </span>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Sidebar;
