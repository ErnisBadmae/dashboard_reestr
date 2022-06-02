import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getCurrentProposalSdc } from '../../store/proposal/actions';

import './card-item.css';

function CurrentProposalSdc(props) {
    const dispatch = useDispatch();
    const { id } = useParams();

    const { currentProposalSdc } = useSelector((state) => state.proposal);
    console.log(currentProposalSdc, 'currentProposalSdc');

    useEffect(() => {
        dispatch(getCurrentProposalSdc(id));
    }, [id, dispatch]);

    return (
        <div className="card-container">
            <div className="card">
                <div className="card__title">
                    <strong>{currentProposalSdc?.full_name}</strong>
                </div>
                <div className="card__body">
                    <strong>Полное имя</strong>
                    <br />
                    <p className="text__current-card">
                        {currentProposalSdc?.short_name}
                    </p>
                    <br />

                    <strong>Регистрационный номер</strong>
                    <br />
                    <p className="text__current-card">
                        {currentProposalSdc?.registration_number}
                    </p>

                    <strong>
                        <br />
                        Дата регистрации
                    </strong>
                    <p className="text__current-card">
                        {currentProposalSdc?.registration_date}
                    </p>

                    <strong>
                        <br />
                        registration_company
                    </strong>
                    <br />
                    <p className="text__current-card">
                        {currentProposalSdc?.registration_company}
                    </p>

                    <strong>
                        <br />
                        Сайт организации
                    </strong>
                    <br />
                    <p className="text__current-card">
                        {currentProposalSdc?.site}
                    </p>

                    <strong>
                        <br />
                        area организации
                    </strong>
                    <br />
                    <p className="text__current-card">
                        {currentProposalSdc?.area || 'нет данных'}
                    </p>

                    <strong>
                        <br />
                        Лого
                    </strong>
                    <br />
                    <p className="text__current-card">
                        {currentProposalSdc?.logo}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default CurrentProposalSdc;
