import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentCard } from '../../store/entries/actions/getCurrentCard';
import { ButtonRegistry } from '../Buttons/button-registry/button-registry';
// import { BreadCrumbs } from '../../../components/breadCrumbs/breadCrumbs';

import './card-item.css';

function CurrentCard(props) {
    const dispatch = useDispatch();

    const { requestCurrentCardSds } = useSelector((state) => state.entries);
    //     console.log('requestSdsView', requestCurrentCardSds);

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
                    <strong>{requestCurrentCardSds?.username}</strong>
                </div>
                <div className="card__body">
                    <strong>Электронная почта</strong>
                    <br />
                    <p className="text__current-card">
                        {requestCurrentCardSds?.email}
                    </p>
                    <br />

                    <strong>Имя</strong>
                    <br />
                    <p className="text__current-card">
                        {requestCurrentCardSds?.firstname}
                    </p>

                    <strong>
                        <br />
                        Фамилия
                    </strong>
                    <p className="text__current-card">
                        {requestCurrentCardSds?.secondname}
                    </p>

                    <strong>
                        <br />
                        Отчество
                    </strong>
                    <br />
                    <p className="text__current-card">
                        {requestCurrentCardSds?.lastname}
                    </p>

                    <strong>
                        <br />
                        Инн организации
                    </strong>
                    <br />
                    <p className="text__current-card">
                        {requestCurrentCardSds?.org_inn}
                    </p>

                    <strong>
                        <br />
                        Огрн организации
                    </strong>
                    <br />
                    <p className="text__current-card">
                        {requestCurrentCardSds?.org_ogrn || 'нет данных'}
                    </p>

                    <strong>
                        <br />
                        Сокращенное наименование
                    </strong>
                    <br />
                    <p className="text__current-card">
                        {requestCurrentCardSds?.org_short_name}
                    </p>

                    <strong>
                        <br />
                        Должность
                    </strong>
                    <br />
                    <p className="text__current-card">
                        {requestCurrentCardSds?.post || 'нет данных'}
                    </p>

                    <strong>
                        <br />
                        Контактный номер телефона
                    </strong>
                    <br />
                    <p className="text__current-card">
                        {requestCurrentCardSds?.phone || 'нет данных'}
                    </p>
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
