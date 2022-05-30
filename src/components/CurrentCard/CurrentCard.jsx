import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useLocation } from 'react-router-dom';
import $api from '../../http';
import { getCurrentCard } from '../../store/entries/actions/getCurrentCard';
import { ButtonRegistry } from '../Buttons/button-registry/button-registry';

import './card-item.css';

function CurrentCard(props) {
    const dispatch = useDispatch();
    const { id } = useParams();
    //     const { pathname } = useLocation();
    //     console.log(pathname, 'pathname');
    console.log(id, 'id');

    //     const { requestCurrentCardSds } = useSelector((state) => state.entries);
    //     console.log('requestSdsView', requestCurrentCardSds);
    //     const [message, setMessgage] = useState();

    useEffect(() => {
        dispatch(getCurrentCard(id));
    }, []);

    const acceptStatus = async (id, statusId) => {
        let res = await $api.post(
            `/user/user_standard_certification/inclusion_request_decision/${id}/${statusId}`
        );
        //    setMessgage(res.data.message);
        //    console.log(message, 'message');
    };

    return (
        <div class="card-container">
            <div className="card">
                {/* <div className="card__title">
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
                </div> */}

                <div className="btn__card">
                    <ButtonRegistry
                        text="Одобрить заявление на регистрацию"
                        //     path={'/'}
                        onClick={() => acceptStatus(id, 2)}
                    />
                    <ButtonRegistry
                        text="Отклонить заявление"
                        // path={'/'}
                        onClick={() => acceptStatus(id, 3)}
                    />
                </div>
            </div>
        </div>
    );
}

export default CurrentCard;
