import React, { useEffect } from 'react';
import { EditOutlined, DownOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { getCurrentProposalOs } from '../../store/proposal/actions';
import { ButtonRegistry } from '../Buttons/button-registry/button-registry';
import { correctlyDate } from '../../helpers/utils';
import Spinner from '../Spinner/Spinner';
import { Dropdown, Menu, Space } from 'antd';
import { getMenuItems } from '../Preview/previewHelper';

import './card-item.scss';

function ProposalCardOs(props) {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { proposalOsId } = useParams();

    const userRole = useSelector((state) => state.auth.user.roles);
    const { isCardEditable } = useSelector((state) => state.proposalTest);
    const { currentProposalOs, isLoading } = useSelector(
        (state) => state.proposalTest
    );

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

    // const getMenuItems = (role, requestStatus) => {
    //     if (role !== 'user_admin') {
    //         return [
    //             {
    //                 key: '1',
    //                 label: 'Отправить заявление на рассмотрение',
    //                 onClick: () => {
    //                     dispatch(
    //                         changeStatusOc({
    //                             proposalOsId,
    //                             code: 'send_document_verified',
    //                         })
    //                     )
    //                         .unwrap()
    //                         .then(() => navigate('/requests_sdc'));
    //                 },
    //             },

    //             {
    //                 key: '2',
    //                 label: 'Аннулировать заявление',
    //                 onClick: () => {
    //                     dispatch(
    //                         changeStatusOc({ proposalOsId, code: 'canceled' })
    //                     )
    //                         .unwrap()
    //                         .then(() => navigate('/requests_sdc'));
    //                 },
    //             },
    //         ];
    //     } else {
    //         switch (requestStatus) {
    //             case 4:
    //                 return [
    //                     {
    //                         key: '1',
    //                         label: 'Принять в работу заявление',
    //                         onClick: () => {
    //                             dispatch(
    //                                 changeStatusOc({
    //                                     proposalOsId,
    //                                     code: 'document_verified',
    //                                 })
    //                             );
    //                             navigate(-1);
    //                         },
    //                     },
    //                 ];
    //             case 5:
    //                 return [
    //                     {
    //                         key: '1',
    //                         label: 'Вернуть на доработку',
    //                         onClick: () => {
    //                             dispatch(
    //                                 changeStatusOc({
    //                                     proposalOsId,
    //                                     code: 'returned',
    //                                 })
    //                             );
    //                             navigate(-1);
    //                         },
    //                     },
    //                     {
    //                         key: '2',
    //                         label: 'Принять',
    //                         onClick: () => {
    //                             dispatch(
    //                                 changeStatusOc({
    //                                     proposalOsId,
    //                                     code: 'desicion_accepted',
    //                                 })
    //                             );
    //                             navigate(-1);
    //                         },
    //                     },
    //                     {
    //                         key: '3',
    //                         label: 'Отклонить',
    //                         onClick: () => {
    //                             dispatch(
    //                                 changeStatusOc({
    //                                     proposalOsId,
    //                                     code: 'desicion_rejected',
    //                                 })
    //                             );
    //                             navigate(-1);
    //                         },
    //                     },
    //                 ];
    //             case 6:
    //                 return [
    //                     {
    //                         key: '1',
    //                         label: 'Модерация',
    //                         onClick: () => {
    //                             dispatch(
    //                                 changeStatusOc({
    //                                     proposalOsId,
    //                                     code: 'moderation',
    //                                 })
    //                             );
    //                             navigate(-1);
    //                         },
    //                     },
    //                 ];
    //             case 7:
    //                 return [
    //                     {
    //                         key: '1',
    //                         label: 'Вернуть на доработку',
    //                         onClick: () => {
    //                             dispatch(
    //                                 changeStatusOc({
    //                                     proposalOsId,
    //                                     code: 'returned',
    //                                 })
    //                             );
    //                             navigate(-1);
    //                         },
    //                     },
    //                     {
    //                         key: '2',
    //                         label: 'Отправить на проверку документов',
    //                         onClick: () => {
    //                             dispatch(
    //                                 changeStatusOc({
    //                                     proposalOsId,
    //                                     code: 'send_document_verified',
    //                                 })
    //                             );
    //                             navigate(-1);
    //                         },
    //                     },
    //                     {
    //                         key: '3',
    //                         label: 'Принять',
    //                         onClick: () => {
    //                             dispatch(
    //                                 changeStatusOc({
    //                                     proposalOsId,
    //                                     code: 'desicion_accepted',
    //                                 })
    //                             );
    //                             navigate(-1);
    //                         },
    //                     },
    //                     {
    //                         key: '4',
    //                         label: 'Отклонить',
    //                         onClick: () => {
    //                             dispatch(
    //                                 changeStatusOc({
    //                                     proposalOsId,
    //                                     code: 'desicion_rejected',
    //                                 })
    //                             );
    //                             navigate(-1);
    //                         },
    //                     },
    //                 ];
    //             case 8:
    //                 return [
    //                     {
    //                         key: '1',
    //                         label: 'Внести в реестр',
    //                         onClick: () => {
    //                             dispatch(
    //                                 changeStatusOc({
    //                                     proposalOsId,
    //                                     code: 'register_entered',
    //                                 })
    //                             );
    //                             navigate(-1);
    //                         },
    //                     },
    //                 ];
    //             default:
    //                 break;
    //         }
    //     }
    // };

    const menu = (
        <Menu
            items={getMenuItems({
                userRole,
                requestStatus: currentProposalOs?.status?.id,
                dispatch,
                navigate,
                id: proposalOsId,
                requestType: 'oc',
            })}
        />
    );

    return (
        <>
            <div className="card__body">
                <div className="card__title">
                    <strong className="strong-title">Заявление</strong>
                    <div className="actionMenuContainer">
                        {(userRole === 'user_admin' || isCardEditable) && (
                            <Dropdown overlay={menu}>
                                <a href="/" onClick={(e) => e.preventDefault()}>
                                    <Space style={{ color: '#0f2355' }}>
                                        Действия
                                        <DownOutlined />
                                    </Space>
                                </a>
                            </Dropdown>
                        )}
                    </div>
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
                {isCardEditable && userRole === 'user_oc' && (
                    <div className="btn__edit">
                        <ButtonRegistry
                            text={'Редактировать ОС'}
                            icon={<EditOutlined />}
                            className={'btn__login'}
                            onClick={() =>
                                navigate(`/edit_card/${proposalOsId}`)
                            }
                        />
                    </div>
                )}
            </div>
        </>
    );
}

export default ProposalCardOs;
