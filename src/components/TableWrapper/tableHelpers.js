import { getProposalSdcList } from '../../store/proposal/actions';
import { getInbox, getOutBox } from '../../store/messages/actions';
import { useNavigate } from 'react-router-dom';

const navigate = useNavigate;

export const getTableData = ({
    tableType,
    dispatch,
    pageSize,
    filterStatus,
    pageIndex,
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
        case 'user_sdc':
            return () => {
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
                    text: 'Отправлено на проверку документов',
                    status: 4,
                },
                {
                    text: 'Проверка документов',
                    status: 5,
                },
                {
                    text: 'Решение принято',
                    status: [8, 9],
                },

                {
                    text: 'Все',
                    status: null,
                },
            ];
        case 'user_sdc':
            return [
                {
                    text: 'Входящие сообщения',
                },
                {
                    text: 'Исходящие сообщения',
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
        case 'user_sdc':
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

export const relocateToCard = (record, tableType) => {
    switch (tableType) {
        case 'user_sdc':
            return {
                onClick: (e) => {
                    e.preventDefault();
                    navigate('/message/' + record.id);
                },
            };

        default:
            break;
    }
};
