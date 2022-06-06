import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { getCurrentProposalSdc } from '../../../store/proposal/actions';
import { ButtonRegistry } from '../../Buttons/button-registry/button-registry';

import '../card-item.scss';

function ProposalCard(props) {
    const navigate = useNavigate();

    const dispatch = useDispatch();
    const { id } = useParams();

    const { currentProposalSdc } = useSelector((state) => state.proposal);

    useEffect(() => {
        dispatch(getCurrentProposalSdc(id));
    }, [id, dispatch]);

    const cardData = [
        {
            id: 1,
            title: 'Полное имя',
            value: currentProposalSdc?.short_name,
            name: 'short_name',
        },
        {
            id: 2,
            title: 'Регистрационный номер',
            value: currentProposalSdc?.registration_number,
            name: 'registration_number',
        },
        {
            id: 3,
            title: 'Дата регистрации',
            value: currentProposalSdc?.registration_date,
            name: 'registration_date',
        },
        {
            id: 4,
            title: 'registration_company',
            value: currentProposalSdc?.registration_company,
            name: 'registration_company',
        },
        {
            id: 5,
            title: 'Сайт организации',
            value: currentProposalSdc?.site,
            name: 'site',
        },
        {
            id: 6,
            title: 'Область',
            value: currentProposalSdc?.area,
            name: 'area',
        },
    ];

    return (
        <>
            <div className="card__title">
                <strong>{currentProposalSdc?.full_name}</strong>
            </div>
            <div className="card__body">
                {cardData.map((field) => {
                    return (
                        <div key={field.id}>
                            <strong>{field.title}</strong>

                            <div className="text__current-card">
                                {field.value}
                            </div>
                        </div>
                    );
                })}
                <ButtonRegistry
                    text={'Редактировать заявку'}
                    onClick={() => navigate(`/edit-card/${id}`)}
                />
            </div>
        </>
    );
}

export default ProposalCard;
