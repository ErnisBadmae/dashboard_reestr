import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getView } from '../../../store/entries/actions';
import { correctlyDate } from '../../../helpers/utils';
import { BreadCrumbs } from '../../../components/breadCrumbs/breadCrumbs';

import './card-item.css';

function CardSertificate(props) {
    const dispatch = useDispatch();
    const { pathname } = useLocation();
    const { currentCard } = useSelector((state) => state.entries);

    useEffect(() => {
        dispatch(getView(pathname));
    }, [pathname, dispatch]);

    return (
        <div class="card-container">
            <BreadCrumbs registry="certificate-card">
                <span> {'>'} </span>
                <span> {currentCard?.company_name} </span>
            </BreadCrumbs>
            <div className="card">
                <div className="card__title">
                    <strong>{currentCard?.company_name}</strong>
                </div>
                <div className="card__body">
                    <strong>№ выданного сертификата</strong>
                    <br />
                    <p>{currentCard?.number}</p>
                    <br />
                    <strong>ИНН получателя</strong>
                    <br />
                    <p>{currentCard?.company_inn}</p>
                    <strong>
                        <br />№ бланка
                    </strong>
                    <p>{currentCard?.certificate_form}</p>
                    <strong>
                        <br />
                        Дата выдачи
                    </strong>
                    <br />
                    <p>{correctlyDate(currentCard?.certificate_date)}</p>
                    <strong>
                        <br />
                        Срок действия сертификата
                    </strong>
                    <br />
                    <p>{correctlyDate(currentCard?.valid_date)}</p>
                    <strong>
                        <br />
                        Соответствие требованиям (например, стандарт)
                    </strong>
                    <br />
                    <p>{currentCard?.certificate_conformity}</p>
                    <strong>
                        <br />
                        ОГРН получателя
                    </strong>
                    <br />
                    <p>{currentCard?.company_ogrn}</p>
                    <strong>
                        <br />
                        Особые отметки (например, оценка при наличии)
                    </strong>
                    <br />
                    <p>{currentCard?.comment}</p>
                    <strong>
                        <br />
                        Скан-копия сертификата
                    </strong>
                    <br />
                    <p>{currentCard?.certificate_scan}</p>
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

export default CardSertificate;
