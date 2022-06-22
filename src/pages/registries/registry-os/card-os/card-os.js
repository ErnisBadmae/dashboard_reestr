import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getView } from '../../../store/entries/actions';
import { BreadCrumbs } from '../../../components/breadCrumbs/breadCrumbs';

import './card-item.css';

function CardOs(props) {
    const dispatch = useDispatch();
    const { pathname } = useLocation();
    const { currentCard } = useSelector((state) => state.entries);

    useEffect(() => {
        dispatch(getView(pathname));
    }, [pathname, dispatch]);

    return (
        <div class="card-container">
            <BreadCrumbs registry="os-card">
                <span> {'>'} </span>
                <span> {currentCard?.certificate_number} </span>
            </BreadCrumbs>
            <div className="card">
                <div className="card__title">
                    <strong>
                        {currentCard?.full_name_organization_certification}
                    </strong>
                </div>
                <div className="card__body">
                    <strong>Номер аттестата аккредитации</strong>
                    <br />
                    <p>{currentCard?.certificate_number}</p>
                    <br />
                    <strong>Дата решения об аккредитации</strong>
                    <br />
                    <p>{currentCard?.certificate_date}</p>
                    <strong>
                        <br />
                        Номер решения об аккредитации
                    </strong>
                    <p>{currentCard?.decision_number}</p>
                    <strong>
                        <br />
                        ИНН
                    </strong>
                    <br />
                    <p>{currentCard?.inn}</p>
                    <strong>
                        <br />
                        ОГРН
                    </strong>
                    <br />
                    <p>{currentCard?.ogrn}</p>
                    <strong>
                        <br />
                        ФИО руководителя
                    </strong>
                    <br />
                    <p>{currentCard?.manager_name}</p>
                    <strong>
                        <br />
                        Адрес
                    </strong>
                    <br />
                    <p>{currentCard?.address}</p>
                    <strong>
                        <br />
                        Электронная почта
                    </strong>
                    <br />
                    <p>{currentCard?.email}</p>
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
                    {/* <strong>
                         <br />
                         Статус
                     </strong>
                     <br />
                     <p>{currentItem?.status || 'нет данных'}</p> */}
                </div>
            </div>
        </div>
    );
}

export default CardOs;
