import React, { useEffect, useState, useRef } from 'react';
import { Dropdown, Menu, Space } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import $api from '../../http';
import { DownOutlined } from '@ant-design/icons';
import { getPreviewCurrentProposalSdc } from '../../store/proposal/actions';
import { info, error } from '../../components/Toast/Toast';

import './card-item.css';
import './current-card.scss';

function PreviewCardSdc(props) {
    const userRole = useSelector((state) => state.auth.user.roles);
    const { previewProposalSdc } = useSelector((state) => state.proposalTest);

    const dispatch = useDispatch();
    const { id } = useSelector(
        (state) => state.proposalTest.currentProposalSdc
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
                    onClick: () => changeStatus(id, 'send_document_verified'),
                },

                {
                    key: '2',
                    label: 'Аннулировать заявление',
                    onClick: () => changeStatus(id, 'cancelled'),
                },
            ];
        } else {
            switch (requestStatus) {
                case 4:
                    return [
                        {
                            key: '1',
                            label: 'Принять в работу заявление',
                            onClick: () =>
                                changeStatus(id, 'document_verified'),
                        },
                    ];
                case 5:
                    return [
                        {
                            key: '1',
                            label: 'Вернуть на доработку',
                            onClick: () => changeStatus(id, 'returned'),
                        },
                        {
                            key: '2',
                            label: 'Отправить на модерацию',
                            onClick: () => changeStatus(id, 'send_moderation'),
                        },
                    ];
                case 6:
                default:
                    break;
            }
        }
    };

    const menu = (
        <Menu items={getMenuItems(userRole, previewProposalSdc?.status?.id)} />
    );

    //     const { Panel } = Collapse;

    // const [shownActionMenu, setShownActionMenu] = useState(false);
    // const actionMenuRef = useRef(null);

    //     const { id } = useParams();

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
    //     const handleClickOutside = (event) => {
    //         if (!actionMenuRef?.current?.contains(event.target)) {
    //             setShownActionMenu(false);
    //         }
    //     };

    //     useEffect(() => {
    //         if (actionMenuRef) {
    //             document.addEventListener('click', handleClickOutside, true);
    //             return () => {
    //                 document.removeEventListener('click', handleClickOutside, true);
    //             };
    //         }
    //     }, [actionMenuRef]);

    const changeStatus = async (id, code) => {
        try {
            let res = await $api.post(
                `request/request_sdc_standard_certification/change_sdc_header_status/${id}/${code}`
            );
            info('Статус заявки успешно изменен!');
            console.log(res, 'responseFromcheckstatus');
        } catch (err) {
            error(err.response.data.message);
        }
    };

    return (
        //    <div className="card-container">
        //   <div className="card">
        <>
            <div className="card__title">
                <strong>Заявление СДС</strong>
                <div className="actionMenuContainer">
                    <Dropdown overlay={menu}>
                        <a onClick={(e) => e.preventDefault()}>
                            <Space style={{ color: '#0f2355' }}>
                                Действия
                                <DownOutlined />
                            </Space>
                        </a>
                    </Dropdown>
                    {/* <button
                        className="btn__option"
                        onClick={() => {
                            setShownActionMenu(!shownActionMenu);
                        }}
                        type="button"
                    >
                        Действия
                    </button> */}
                    {/* {shownActionMenu && (
                        <div className="actionMenu" ref={actionMenuRef}>
                            <button
                                className="btn__option"
                                onClick={() =>
                                    changeStatus(id, 'send_document_verified')
                                }
                            >
                                Отправить на рассмотрение
                            </button>
                            <button
                                className="btn__option"
                                onClick={() => changeStatus(id, 'cancelled')}
                            >
                                Аннулировать заявление
                            </button>
                        </div>
                    )} */}
                </div>
            </div>
            <div className="card__body">
                {cardData.map((field) => {
                    return (
                        <div className="card__field" key={field.id}>
                            <strong>{field.title}</strong>
                            <div className="text__current-card">
                                {field.value}
                            </div>
                        </div>
                    );
                })}
                {/* <Collapse accordion>
                    <Panel header="Смотреть подробнее" key="1" bordered={false}>
                        <p>{<EditProposalCurrentSdc />}</p>
                    </Panel>
                </Collapse> */}
            </div>
            {/* </div> */}
        </>

        //    </div>
    );
}

export default PreviewCardSdc;
