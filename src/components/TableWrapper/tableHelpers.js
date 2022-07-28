import {
    getProposalSdcList,
    getProposalOsList,
} from '../../store/proposal/actions';
import { getInbox, getOutBox } from '../../store/messages/actions';

export const getTableData = ({
    tableType,
    dispatch,
    pageSize,
    filterStatus,
    pageIndex,
    messagesType,
}) => {
    switch (tableType) {
        case 'sdcAdmin':
            return () => {
                dispatch(
                    getProposalSdcList({
                        row_page: pageSize,
                        page: pageIndex,
                        filters:
                            filterStatus !== null
                                ? { status: filterStatus }
                                : {},
                    })
                );
            };
        case 'osAdmin':
            return () => {
                dispatch(
                    getProposalOsList({
                        row_page: pageSize,
                        page: pageIndex,
                        filters:
                            filterStatus !== null
                                ? { status: filterStatus }
                                : {},
                    })
                );
            };
        case 'messages':
            return () => {
                if (messagesType === 'inbox') {
                    dispatch(
                        getInbox({
                            row_page: pageSize,
                            page: pageIndex,
                            filters:
                                filterStatus !== null
                                    ? { status: filterStatus }
                                    : {},
                        })
                    );
                }
                if (messagesType === 'outbox') {
                    dispatch(
                        getOutBox({
                            row_page: pageSize,
                            page: pageIndex,
                            filters:
                                filterStatus !== null
                                    ? { status: filterStatus }
                                    : {},
                        })
                    );
                }
            };
        default:
            break;
    }
};

export const getFilterButtons = (tableType) => {
    switch (tableType) {
        case 'sdcAdmin':
            return [
                {
                    id: 1,
                    text: 'Все',
                    status: null,
                },
                {
                    id: 2,
                    text: 'Отправлено на проверку документов',
                    status: 4,
                },
                {
                    id: 3,
                    text: 'Проверка документов',
                    status: 5,
                },

                {
                    id: 4,
                    text: 'Решение принято',
                    status: [8, 9],
                },
            ];
        case 'osAdmin':
            return [
                {
                    id: 1,
                    text: 'Все',
                    status: null,
                },
                {
                    id: 2,
                    text: 'Отправлено на проверку документов',
                    status: 4,
                },
                {
                    id: 3,
                    text: 'Проверка документов',
                    status: 5,
                },

                {
                    id: 4,
                    text: 'Решение принято',
                    status: [8, 9],
                },
            ];
        case 'messages':
            return [
                {
                    text: 'Входящие сообщения',
                    id: 1,
                },
                {
                    text: 'Исходящие сообщения',
                    id: 2,
                },
                {
                    text: 'Написать сообщение',
                    id: 3,
                },
            ];
        default:
            break;
    }
};

export const getColumns = (tableType) => {
    switch (tableType) {
        case 'sdcAdmin':
            return [
                {
                    title: 'Дата создания ',
                    dataIndex: 'dttm_created',
                    data_type: 'string',
                    is_sort: true,
                    number_in_row: 1,
                },
                {
                    title: 'Дата обновления',
                    dataIndex: 'dttm_updated',
                    data_type: 'string',
                    is_sort: true,
                    number_in_row: 1,
                },
                {
                    title: 'Дата принятия решения',
                    dataIndex: 'dttm_decision',
                    data_type: 'string',
                    is_sort: true,
                    number_in_row: 1,
                },
                {
                    title: 'Статус',
                    dataIndex: 'status',
                    data_type: 'string',
                    is_sort: true,
                    number_in_row: 1,
                },
            ];
        case 'osAdmin':
            return [
                {
                    title: 'Дата создания ',
                    dataIndex: 'dttm_created',
                    data_type: 'string',
                    is_sort: true,
                    number_in_row: 1,
                },
                {
                    title: 'Дата обновления',
                    dataIndex: 'dttm_updated',
                    data_type: 'string',
                    is_sort: true,
                    number_in_row: 1,
                },
                {
                    title: 'Дата принятия решения',
                    dataIndex: 'dttm_decision',
                    data_type: 'string',
                    is_sort: true,
                    number_in_row: 1,
                },
                {
                    title: 'Статус',
                    dataIndex: 'status',
                    data_type: 'string',
                    is_sort: true,
                    number_in_row: 1,
                },
            ];
        case 'messages':
            return [
                {
                    title: 'Тема письма',
                    dataIndex: 'subject',
                    data_type: 'string',
                    is_sort: true,
                    number_in_row: 1,
                },
                {
                    title: 'Препросмотр',
                    dataIndex: 'body',
                    data_type: 'string',
                    is_sort: true,
                    number_in_row: 1,
                },
                {
                    title: 'От кого',
                    dataIndex: 'sender',
                    data_type: 'string',
                    is_sort: true,
                    number_in_row: 1,
                },
            ];
        default:
            break;
    }
};

export const relocateToCard = (record, tableType, navigate) => {
    switch (tableType) {
        case 'messages':
            return {
                onClick: (e) => {
                    e.preventDefault();
                    navigate('/message/' + record.id);
                },
            };
        case 'sdcAdmin':
            return {
                onClick: (e) => {
                    e.preventDefault();
                    navigate('/request_sdc/' + record.id);
                },
            };
        case 'osAdmin':
            return {
                onClick: (e) => {
                    e.preventDefault();
                    navigate('/request_os/' + record.id);
                },
            };

        default:
            break;
    }
};
