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
            id: 0,
            title: 'Полное наименование',
            value: currentProposalOs?.request_oc_organ_certification
                ?.full_name_company,
            name: 'full_name',
        },
        {
            id: 1,
            title: 'Полное наименование ОС',
            value: currentProposalOs?.request_oc_organ_certification
                ?.full_name_organ_certification,
            name: 'short_name',
        },
        {
            id: 2,
            title: 'Сокращенное наименование ОС',
            value: currentProposalOs?.request_oc_organ_certification
                ?.short_name_organ_certification,
            name: 'short_name',
        },
        {
            id: 3,
            title: 'Номер сертификата',
            value: currentProposalOs?.request_oc_organ_certification
                ?.certificate_number,
            name: 'registration_number',
        },
        {
            id: 4,
            title: 'Дата регистрации',
            value: correctlyDate(
                currentProposalOs?.request_oc_organ_certification
                    ?.certificate_date
            ),
            name: 'certificate_date',
        },
        {
            id: 5,
            title: 'Номер решения',
            value: currentProposalOs?.request_oc_organ_certification
                ?.decision_number,
            name: 'decision_number',
        },
        {
            id: 6,
            title: 'Сайт организации',
            value: currentProposalOs?.request_oc_organ_certification?.site,
            name: 'site',
        },
        {
            id: 7,
            title: 'Область распространения',
            value: currentProposalOs?.request_oc_organ_certification?.area,
            name: 'area',
        },
        {
            id: 8,
            title: 'ИНН',
            value: currentProposalOs?.request_oc_organ_certification?.inn,
            name: 'area',
        },
        {
            id: 9,
            title: 'ОГРН',
            value: currentProposalOs?.request_oc_organ_certification?.ogrn,
            name: 'area',
        },
        {
            id: 10,
            title: 'Имя руководителя',
            value: currentProposalOs?.request_oc_organ_certification
                ?.manager_name,
            name: 'area',
        },
        {
            id: 11,
            title: 'Адрес',
            value: currentProposalOs?.request_oc_organ_certification?.address,
            name: 'area',
        },
        {
            id: 12,
            title: 'Номер телефона',
            value: currentProposalOs?.request_oc_organ_certification?.phone,
            name: 'area',
        },
        {
            id: 13,
            title: 'E-mail',
            value: currentProposalOs?.request_oc_organ_certification?.email,
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
