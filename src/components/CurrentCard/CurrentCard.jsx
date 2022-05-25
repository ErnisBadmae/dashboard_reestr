import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentCard } from '../../store/entries/actions/getCurrentCard';
import { ButtonRegistry } from '../Buttons/button-registry/button-registry';
// import { BreadCrumbs } from '../../../components/breadCrumbs/breadCrumbs';

import './card-item.css';

function CurrentCard(props) {
    const dispatch = useDispatch();

    const { requestSdsView } = useSelector((state) => state.entries);
    console.log('requestSdsView', requestSdsView);

    useEffect(() => {
        // dispatch(setCurrentCardNumber(id))
        dispatch(getCurrentCard());
    }, [dispatch]);

    return (
        <div class="card-container">
            {/* <BreadCrumbs registry="expert-card">
                <span> {'>'} </span>
                <span> {currentCard?.expert_name} </span>
            </BreadCrumbs> */}
            <div className="card">
                <div className="card__title">
                    <strong>{requestSdsView?.expert_name}</strong>
                </div>
                <div className="card__body">
                    <strong>№ аттестата</strong>
                    <br />
                    <p>{requestSdsView?.certificate_number}</p>
                    <br />
                    <strong>Область специализации</strong>
                    <br />
                    <p>{requestSdsView?.area}</p>
                    <strong>
                        <br />
                        Сертификат (скан)
                    </strong>
                    <p>{requestSdsView?.certificate_scan}</p>
                    <strong>
                        <br />
                        Действителен до
                    </strong>
                    <br />
                    <p>{requestSdsView?.valid}</p>
                    <strong>
                        <br />
                        Дата вступления в организацию
                    </strong>
                    <br />
                    <p>{'нет данных'}</p>
                    <strong>
                        <br />
                        Дата исключения
                    </strong>
                    <br />
                    <p>{requestSdsView?.exclusion || 'нет данных'}</p>
                    <strong>
                        <br />
                        Должность
                    </strong>
                    <br />
                    <p>{requestSdsView?.exclusion_position}</p>
                    <strong>
                        <br />
                        Основание для привлечения личного труда
                    </strong>
                    <br />
                    <p>{requestSdsView?.exclusion || 'нет данных'}</p>
                </div>
                <div className="btn__card">
                    <ButtonRegistry
                        text="Одобрить заявление на регистрацию"
                        path={'/'}
                    />
                    <ButtonRegistry text="Отклонить заявление" path={'/'} />
                </div>
            </div>
        </div>
    );
}

export default CurrentCard;
