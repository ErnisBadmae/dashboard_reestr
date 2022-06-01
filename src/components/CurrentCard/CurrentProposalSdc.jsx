import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getCurrentProposalSdc } from '../../store/entries/actions/getCurrentCard';

import './card-item.css';

function CurrentProposalSdc(props) {
    const dispatch = useDispatch();
    const { id } = useParams();

    const { requestSdcStandardCertification } = useSelector(
        (state) => state.entries.proposalSdc
    );

    useEffect(() => {
        dispatch(getCurrentProposalSdc(id));
    }, [id, dispatch]);

    return (
        <div className="card-container">
            <div className="card">
                <div className="card__title">
                    <strong>
                        {requestSdcStandardCertification?.full_name}
                    </strong>
                </div>
                <div className="card__body">
                    <strong>Полное имя</strong>
                    <br />
                    <p className="text__current-card">
                        {requestSdcStandardCertification?.short_name}
                    </p>
                    <br />

                    <strong>Регистрационный номер</strong>
                    <br />
                    <p className="text__current-card">
                        {requestSdcStandardCertification?.registration_number}
                    </p>

                    <strong>
                        <br />
                        Дата регистрации
                    </strong>
                    <p className="text__current-card">
                        {requestSdcStandardCertification?.registration_date}
                    </p>

                    <strong>
                        <br />
                        registration_company
                    </strong>
                    <br />
                    <p className="text__current-card">
                        {requestSdcStandardCertification?.registration_company}
                    </p>

                    <strong>
                        <br />
                        Сайт организации
                    </strong>
                    <br />
                    <p className="text__current-card">
                        {requestSdcStandardCertification?.site}
                    </p>

                    <strong>
                        <br />
                        area организации
                    </strong>
                    <br />
                    <p className="text__current-card">
                        {requestSdcStandardCertification?.area || 'нет данных'}
                    </p>

                    <strong>
                        <br />
                        Лого
                    </strong>
                    <br />
                    <p className="text__current-card">
                        {requestSdcStandardCertification?.logo}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default CurrentProposalSdc;
