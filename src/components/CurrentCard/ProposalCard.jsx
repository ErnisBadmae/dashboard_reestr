import React, { useEffect } from 'react';
import { EditOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import {
    getCurrentProposalSdc,
    getHolders,
} from '../../store/proposal/actions';
import { ButtonRegistry } from '../Buttons/button-registry/button-registry';
import Holder from '../Holders/Holder';
import CurrentHolder from './CurrentHolder/CurrentHolder';
import { correctlyDate } from '../../helpers/utils';

import './card-item.scss';

function ProposalCard(props) {
    const navigate = useNavigate();

    const dispatch = useDispatch();
    const { sdcId } = useParams();

    const { currentProposalSdc } = useSelector((state) => state.proposalTest);
    const { isCardEditable } = useSelector((state) => state.proposalTest);
    const userRole = useSelector((state) => state.auth.user.roles);
    const { holders } = useSelector((state) => state.proposalTest);

    useEffect(() => {
        dispatch(getCurrentProposalSdc(sdcId));
        dispatch(getHolders(sdcId));
    }, [sdcId, dispatch]);

    const cardData = [
        {
            id: 1,
            title: 'Полное имя',
            value: currentProposalSdc?.full_name,
            name: 'full_name',
        },
        {
            id: 2,
            title: 'Сокращенное имя',
            value: currentProposalSdc?.full_name,
            name: 'short_name',
        },
        {
            id: 3,
            title: 'Регистрационный номер',
            value: currentProposalSdc?.registration_number,
            name: 'registration_number',
        },
        {
            id: 4,
            title: 'Дата регистрации',
            value: correctlyDate(currentProposalSdc?.registration_date),
            name: 'registration_date',
        },
        {
            id: 5,
            title: 'Зарегистрированная компания',
            value: currentProposalSdc?.registration_company,
            name: 'registration_company',
        },
        {
            id: 6,
            title: 'Сайт организации',
            value: currentProposalSdc?.site,
            name: 'site',
        },
        {
            id: 7,
            title: 'Область распространения',
            value: currentProposalSdc?.area,
            name: 'area',
        },
    ];

    return (
        <>
            <div className="card__body">
                <div className="card__title">
                    <strong className="strong-title">Заявление</strong>
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

                {isCardEditable && userRole === 'user_sdc' && (
                    <div className="btn__edit">
                        <ButtonRegistry
                            text={'Редактировать СДС'}
                            icon={<EditOutlined />}
                            className={'btn__login'}
                            onClick={() => navigate(`/edit-card/${sdcId}`)}
                        />
                    </div>
                )}

                <div className="card__field__container">
                    {holders.length === 0 && <Holder drawBtn={true} />}
                    {holders.map((holder, index) => {
                        if (index === 0) {
                            return (
                                <>
                                    <Holder
                                        drawBtn={true}
                                        holderName={holder.full_name}
                                    />
                                    <CurrentHolder currentHolder={holder} />
                                </>
                            );
                        }
                        return (
                            <>
                                <Holder
                                    drawBtn={false}
                                    holderName={holder.full_name}
                                />
                                <CurrentHolder currentHolder={holder} />
                            </>
                        );
                    })}
                </div>
            </div>
        </>
    );
}

export default ProposalCard;
