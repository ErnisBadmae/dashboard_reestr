import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
// import $api from '../../http';
import { getCurrentProposalSdc } from '../../store/entries/actions/getCurrentCard';
import { ButtonRegistry } from '../Buttons/button-registry/button-registry';

import './card-item.css';

function CurrentCard(props) {
    const dispatch = useDispatch();
    const { id } = useParams();

    const current = useSelector(
        (state) => state.entries.requestCurrentCardSds.inclusionRequest
    );
    console.log('idid', id);

    useEffect(() => {
        dispatch(getCurrentProposalSdc(id));
    }, [id, dispatch]);

    return (
        <div className="card-container">
            <div className="card">
                <div className="card__title">
                    <strong>{current?.full_name}</strong>
                </div>
                <div className="card__body">
                    <strong>Полное имя</strong>
                    <br />
                    <p className="text__current-card">{current?.short_name}</p>
                    <br />

                    <strong>Регистрационный номер</strong>
                    <br />
                    <p className="text__current-card">
                        {current?.registration_number}
                    </p>

                    <strong>
                        <br />
                        Дата регистрации
                    </strong>
                    <p className="text__current-card">
                        {current?.registration_date}
                    </p>

                    <strong>
                        <br />
                        registration_company
                    </strong>
                    <br />
                    <p className="text__current-card">
                        {current?.registration_company}
                    </p>

                    <strong>
                        <br />
                        Сайт организации
                    </strong>
                    <br />
                    <p className="text__current-card">{current?.site}</p>

                    <strong>
                        <br />
                        area организации
                    </strong>
                    <br />
                    <p className="text__current-card">
                        {current?.area || 'нет данных'}
                    </p>

                    <strong>
                        <br />
                        Лого
                    </strong>
                    <br />
                    <p className="text__current-card">{current?.logo}</p>
                </div>

                {/* <div className="btn__card">
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
                </div> */}
            </div>
        </div>
    );
}

export default CurrentCard;
