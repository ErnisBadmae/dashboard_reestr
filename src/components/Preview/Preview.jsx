import React, { useEffect } from 'react';
import { Dropdown, Menu, Space } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { DownOutlined } from '@ant-design/icons';
import {
    getPreviewCurrentProposalSdc,
    changeStatus,
} from '../../store/proposal/actions';
import { useNavigate } from 'react-router-dom';

import '../CurrentCard/card-item.scss';

function PreviewCardSdc(props) {
    const navigate = useNavigate();
    const userRole = useSelector((state) => state.auth.user.roles);
    const { previewProposalSdc } = useSelector((state) => state.proposalTest);
    const { isCardEditable } = useSelector((state) => state.proposalTest);

    const dispatch = useDispatch();
    const { id } = useSelector(
        (state) => state?.proposalTest?.currentProposalSdc
    );
    useEffect(() => {
        dispatch(getPreviewCurrentProposalSdc(id));
    }, [id, dispatch]);

    if (!previewProposalSdc) return null;

    const getMenuItems = (role, requestStatus) => {
        if (role !== 'user_admin') {
            return [
                {
                    key: '1',
                    label: 'Отправить заявление на рассмотрение',
                    onClick: () => {
                        dispatch(
                            changeStatus({ id, code: 'send_document_verified' })
                        )
                            .unwrap()
                            .then(() => navigate('/requests_sdc'));
                    },
                },

                {
                    key: '2',
                    label: 'Аннулировать заявление',
                    onClick: () => {
                        dispatch(changeStatus({ id, code: 'canceled' }))
                            .unwrap()
                            .then(() => navigate('/requests_sdc'));
                    },
                },
            ];
        } else {
            switch (requestStatus) {
                case 4:
                    return [
                        {
                            key: '1',
                            label: 'Принять в работу заявление',
                            onClick: () => {
                                dispatch(
                                    changeStatus({
                                        id,
                                        code: 'document_verified',
                                    })
                                );
                                navigate(-1);
                            },
                        },
                    ];
                case 5:
                    return [
                        {
                            key: '1',
                            label: 'Вернуть на доработку',
                            onClick: () => {
                                dispatch(
                                    changeStatus({ id, code: 'returned' })
                                );
                                navigate(-1);
                            },
                        },
                        {
                            key: '2',
                            label: 'Принять',
                            onClick: () => {
                                dispatch(
                                    changeStatus({
                                        id,
                                        code: 'desicion_accepted',
                                    })
                                );
                                navigate(-1);
                            },
                        },
                        {
                            key: '3',
                            label: 'Отклонить',
                            onClick: () => {
                                dispatch(
                                    changeStatus({
                                        id,
                                        code: 'desicion_rejected',
                                    })
                                );
                                navigate(-1);
                            },
                        },
                    ];
                case 6:
                    return [
                        {
                            key: '1',
                            label: 'Модерация',
                            onClick: () => {
                                dispatch(
                                    changeStatus({ id, code: 'moderation' })
                                );
                                navigate(-1);
                            },
                        },
                    ];
                case 7:
                    return [
                        {
                            key: '1',
                            label: 'Вернуть на доработку',
                            onClick: () => {
                                dispatch(
                                    changeStatus({ id, code: 'returned' })
                                );
                                navigate(-1);
                            },
                        },
                        {
                            key: '2',
                            label: 'Отправить на проверку документов',
                            onClick: () => {
                                dispatch(
                                    changeStatus({
                                        id,
                                        code: 'send_document_verified',
                                    })
                                );
                                navigate(-1);
                            },
                        },
                        {
                            key: '3',
                            label: 'Принять',
                            onClick: () => {
                                dispatch(
                                    changeStatus({
                                        id,
                                        code: 'desicion_accepted',
                                    })
                                );
                                navigate(-1);
                            },
                        },
                        {
                            key: '4',
                            label: 'Отклонить',
                            onClick: () => {
                                dispatch(
                                    changeStatus({
                                        id,
                                        code: 'desicion_rejected',
                                    })
                                );
                                navigate(-1);
                            },
                        },
                    ];
                case 8:
                    return [
                        {
                            key: '1',
                            label: 'Внести в реестр',
                            onClick: () => {
                                dispatch(
                                    changeStatus({
                                        id,
                                        code: 'register_entered',
                                    })
                                );
                                navigate(-1);
                            },
                        },
                    ];
                default:
                    break;
            }
        }
    };

    const menu = (
        <Menu items={getMenuItems(userRole, previewProposalSdc?.status?.id)} />
    );

    const cardData = [
        {
            id: 1,
            title: 'Дата создания',
            value: previewProposalSdc?.dttm_created,
            name: 'dttm_created',
        },
        {
            id: 2,
            title: 'Дата обновления',
            value: previewProposalSdc?.dttm_updated,
            name: 'dttm_updated',
        },
        {
            id: 3,
            title: 'Дата принятия решения',
            value: previewProposalSdc?.dttm_desicion,
            name: 'dttm_desicion',
        },
        {
            id: 4,
            title: 'Статус заявления',
            value: previewProposalSdc?.status?.title,
            name: 'status',
        },
    ];

    return (
        <>
            <div className="card__title">
                <strong className="strong-title">Заявление СДС</strong>
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
            <div className="card__body">
                {cardData.map((field) => {
                    return (
                        <div className="card__field" key={field.id}>
                            <span className="strong-title">{field.title}</span>
                            <span className="text__current-card">
                                {field.value}
                            </span>
                        </div>
                    );
                })}
            </div>
        </>
    );
}

export default PreviewCardSdc;
