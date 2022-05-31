import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import $api from '../../http';
import { getCurrentCard } from '../../store/entries/actions/getCurrentCard';
import { ButtonRegistry } from '../Buttons/button-registry/button-registry';

import './card-item.css';

function CurrentCard(props) {
    const dispatch = useDispatch();
    const { id } = useParams();

    const current = useSelector(
        (state) => state.entries.requestCurrentCardSds.inclusionRequest
    );
    console.log('ididididididid', id);
    const [message, setMessgage] = useState();

    useEffect(() => {
        dispatch(getCurrentCard(id));
    }, [id, dispatch]);

    const acceptStatus = async (id, statusId) => {
        let res = await $api.post(
            `/user/user_standard_certification/inclusion_request_decision/${id}/${statusId}`
        );
        setMessgage(res.data.message);
        console.log(res, 'resres');
    };

    return (
        <div class="card-container">
            <div className="card">
                <div className="card__title">
                    <strong>{current?.email}</strong>
                </div>
                <div className="card__body">
                    <strong>Электронная почта</strong>
                    <br />
                    <p className="text__current-card">{current?.email}</p>
                    <br />

                    <strong>Имя</strong>
                    <br />
                    <p className="text__current-card">{current?.firstname}</p>

                    <strong>
                        <br />
                        Фамилия
                    </strong>
                    <p className="text__current-card">{current?.secondname}</p>

                    <strong>
                        <br />
                        Отчество
                    </strong>
                    <br />
                    <p className="text__current-card">{current?.lastname}</p>

                    <strong>
                        <br />
                        Инн организации
                    </strong>
                    <br />
                    <p className="text__current-card">{current?.org_inn}</p>

                    <strong>
                        <br />
                        Огрн организации
                    </strong>
                    <br />
                    <p className="text__current-card">
                        {current?.org_ogrn || 'нет данных'}
                    </p>

                    <strong>
                        <br />
                        Сокращенное наименование
                    </strong>
                    <br />
                    <p className="text__current-card">
                        {current?.org_short_name}
                    </p>

                    <strong>
                        <br />
                        Должность
                    </strong>
                    <br />
                    <p className="text__current-card">
                        {current?.post || 'нет данных'}
                    </p>

                    <strong>
                        <br />
                        Контактный номер телефона
                    </strong>
                    <br />
                    <p className="text__current-card">
                        {current?.phone || 'нет данных'}
                    </p>
                </div>

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
