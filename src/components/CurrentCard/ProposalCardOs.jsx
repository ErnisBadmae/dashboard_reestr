import React, { useEffect } from 'react';
import { EditOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { getCurrentProposalOs } from '../../store/proposal/actions';
import { ButtonRegistry } from '../Buttons/button-registry/button-registry';
import { correctlyDate } from '../../helpers/utils';

// import CurrentHolder from './CurrentHolder/CurrentHolder';
// import Holder from '../Holders/Holder';
import Spinner from '../Spinner/Spinner';

import './card-item.scss';

function ProposalCardOs(props) {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { proposalOsId } = useParams();

    const { currentProposalOs, isLoading } = useSelector(
        (state) => state.proposalTest
    );
    //     const userRole = useSelector((state) => state.auth.user.roles);

    useEffect(() => {
        dispatch(getCurrentProposalOs(proposalOsId));
    }, [proposalOsId, dispatch]);

    const cardData = [
        {
            id: 1,
            title: 'Полное имя',
            value: currentProposalOs?.full_name,
            name: 'full_name',
        },
        {
            id: 2,
            title: 'Сокращенное имя',
            value: currentProposalOs?.full_name,
            name: 'short_name',
        },
        {
            id: 3,
            title: 'Регистрационный номер',
            value: currentProposalOs?.registration_number,
            name: 'registration_number',
        },
        {
            id: 4,
            title: 'Дата регистрации',
            value: correctlyDate(currentProposalOs?.registration_date),
            name: 'registration_date',
        },
        {
            id: 5,
            title: 'Зарегистрированная компания',
            value: currentProposalOs?.registration_company,
            name: 'registration_company',
        },
        {
            id: 6,
            title: 'Сайт организации',
            value: currentProposalOs?.site,
            name: 'site',
        },
        {
            id: 7,
            title: 'Область распространения',
            value: currentProposalOs?.area,
            name: 'area',
        },
    ];

    if (isLoading) {
        return <Spinner />;
    }

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

                {/* {isCardEditable && userRole === 'user_os' && (
                    <div className="btn__edit">
                        <ButtonRegistry
                            text={'Редактировать ОС'}
                            icon={<EditOutlined />}
                            className={'btn__login'}
                            onClick={() => navigate(`/edit-card/${sdcId}`)}
                        />
                    </div>
                )} */}
            </div>
        </>
    );
}

export default ProposalCardOs;
