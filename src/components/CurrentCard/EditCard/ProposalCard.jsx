import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { getCurrentProposalSdc } from '../../../store/proposal/actions';
import { ButtonRegistry } from '../../Buttons/button-registry/button-registry';
import Holder from '../../Holders/Holder';

import '../card-item.scss';
import CurrentHolder from '../CurrentHolder/CurrentHolder';

function ProposalCard(props) {
    const navigate = useNavigate();

    const dispatch = useDispatch();
    const { id } = useParams();

    const { currentProposalSdc } = useSelector((state) => state.proposalTest);
    const { holders } = useSelector((state) => state.proposalTest);

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
            title: 'Держатель',
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
            title: 'Область распространения',
            value: currentProposalSdc?.area,
            name: 'area',
        },
    ];

    return (
        <>
            <div className="card__body">
                <div className="card__title">
                    <strong>Заявление</strong>
                </div>
                {cardData.map((field) => {
                    return (
                        <div className="card__field" key={field.id}>
                            <div className="strong-title">{field.title}</div>

                            <div className="text__current-card">
                                {field.value}
                            </div>
                        </div>
                    );
                })}
                <div className="btn__edit">
                    <ButtonRegistry
                        text={'Редактировать СДС'}
                        onClick={() => navigate(`/edit-card/${id}`)}
                    />
                </div>
                <div className="card__field">
                    <Holder />
                    {Object.keys(holders).length === 0 ? (
                        <></>
                    ) : (
                        <CurrentHolder />
                    )}
                </div>
            </div>
        </>
    );
}

export default ProposalCard;
