import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getView } from '../../../store/entries/actions';
// import { Breadcrumb } from 'antd';
import './card-item.css';
import { BreadCrumbs } from '../../../components/breadCrumbs/breadCrumbs';

function CardSds(props) {
    const { pathname } = useLocation();
    const dispatch = useDispatch();

    const { currentCard } = useSelector((state) => state.entries);

    useEffect(() => {
        dispatch(getView(pathname));
    }, [pathname, dispatch]);

    return (
        <div className="card-container">
            <BreadCrumbs registry="sds-card">
                <span> {'>'} </span>
                <span> {currentCard?.full_name} </span>
            </BreadCrumbs>
            <div className="card">
                <div className="card__title">
                    <strong>{currentCard?.full_name}</strong>
                </div>

                <div className="card__body">
                    <strong>Сокращенное название</strong>
                    <br />
                    <p>{currentCard?.short_name}</p>

                    <strong>Регистрационный номер</strong>
                    <br />
                    <p>{currentCard?.registration_number}</p>

                    <strong>
                        <br />
                        Дата регистрации
                    </strong>
                    <p>{currentCard?.registration_date}</p>

                    <strong>
                        <br />
                        Организация, представившая СДС на регистрацию (Оно же
                        Держатель)
                    </strong>
                    <p>{currentCard?.registration_company}</p>

                    <strong>
                        <br />
                        Сайт
                    </strong>
                    <br />
                    <p>
                        <a href={currentCard?.site}>{currentCard?.site}</a>
                    </p>

                    <strong>
                        <br />
                        Область распространения
                    </strong>
                    <br />
                    <p>{currentCard?.area}</p>

                    <strong>
                        <br />
                        Изображение знака
                    </strong>
                    <br />
                    <p>{currentCard?.logo}</p>

                    <strong>
                        <br />
                        Статус
                    </strong>
                    <br />
                    <p>{currentCard?.status || 'нет данных'}</p>
                </div>
            </div>
        </div>
    );
}

export default CardSds;

// const titles = ['Сокращенное название', 'Регистрационный номер'];
// return (
//      titles.map((el) => {
//           return <div>{el}</div>
//      })
