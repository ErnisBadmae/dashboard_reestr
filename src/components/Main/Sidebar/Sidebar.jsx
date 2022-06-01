import { Link } from 'react-router-dom';
import './sidebar.scss';
import { useSelector } from 'react-redux';

function Sidebar(props) {
    const { roles } = useSelector((state) => state.auth.user);
    const sidebarButtons = [
        {
            role: 'ROLE_USER',
            href: '/declaration',
            text: 'Заявление СДС',
            id: 0,
        },
        {
            role: 'user_sdc',
            href: '/requests_sdc',
            text: 'Заявления оператора СДС',
            id: 1,
        },
        {
            role: 'ROLE_NEW_USER_STANDARD_CERTIFICATION_DECISION',
            href: '/declarations',
            text: 'Список заявлений',
            id: 2,
        },
        {
            role: 'ROLE_DICTIONARY_REQUEST_STATUS_EDITOR',
            href: '/declaration',
            text: 'Тест кнопка2',
            id: 3,
        },
    ];
    return (
        <section className="sidebar">
            <div className="sidebar__inner">
                <ul>
                    <p className="sidebar__inner-title">Заявления </p>

                    {sidebarButtons.map((btn) => {
                        return (
                            roles?.includes(btn.role) && (
                                <li key={btn.id}>
                                    <Link
                                        to={btn.href}
                                        style={{
                                            width: '100%',
                                            height: '100%',
                                        }}
                                    >
                                        <div className="sidebar__inner-item" />
                                        <span>{btn.text}</span>
                                    </Link>
                                </li>
                            )
                        );
                    })}

                    <li>
                        <div className="sidebar__inner-item" />
                        <span>Сертификация</span>
                    </li>
                    <li>
                        <div className="sidebar__inner-item" />
                        <span>Аттестация Эксперта</span>
                    </li>
                    <p className="sidebar__inner-title">Реестры</p>
                    <li>
                        <Link
                            style={{ width: '100%', height: '100%' }}
                            to="/sds"
                        >
                            <div className="sidebar__inner-item" />
                            <span>Реестр СДС</span>
                        </Link>
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
                    <p className="sidebar__inner-title">
                        Пользовательский интерфейс
                    </p>
                    <li>
                        <div className="sidebar__inner-item" />
                        <span>Сообщения</span>
                    </li>
                    <li>
                        <div className="sidebar__inner-item" />
                        <span>Пользователи</span>
                    </li>
                    <p className="sidebar__inner-title">Сервисы</p>
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
