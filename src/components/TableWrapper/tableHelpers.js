import {
    getProposalSdcList,
    getProposalOsList,
} from '../../store/proposal/actions';
import { getInbox, getOutBox } from '../../store/messages/actions';
import $api from '../../http';

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
        case 'tableSdc':
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
        case 'tableOs':
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
                    text: '??????',
                    status: null,
                },
                {
                    id: 2,
                    text: '???????????????????? ???? ???????????????? ????????????????????',
                    status: 4,
                },
                {
                    id: 3,
                    text: '???????????????? ????????????????????',
                    status: 5,
                },

                {
                    id: 4,
                    text: '?????????????? ??????????????',
                    status: [8, 9],
                },
            ];
        case 'osAdmin':
            return [
                {
                    id: 1,
                    text: '??????',
                    status: null,
                },
                {
                    id: 2,
                    text: '???????????????????? ???? ???????????????? ????????????????????',
                    status: 4,
                },
                {
                    id: 3,
                    text: '???????????????? ????????????????????',
                    status: 5,
                },

                {
                    id: 4,
                    text: '?????????????? ??????????????',
                    status: [8, 9],
                },
            ];
        case 'messages':
            return [
                {
                    text: '???????????????? ??????????????????',
                    id: 1,
                },
                {
                    text: '?????????????????? ??????????????????',
                    id: 2,
                },
                {
                    text: '???????????????? ??????????????????',
                    id: 3,
                },
            ];
        case 'tableSdc':
            return [];
        case 'tableOs':
            return [];
        default:
            break;
    }
};

export const getColumns = (tableType) => {
    switch (tableType) {
        case 'sdcAdmin':
        case 'tableSdc':
            return [
                {
                    title: '???????? ???????????????? ',
                    dataIndex: 'dttm_created',
                    data_type: 'string',
                    is_sort: true,
                    number_in_row: 1,
                },
                {
                    title: '???????? ????????????????????',
                    dataIndex: 'dttm_updated',
                    data_type: 'string',
                    is_sort: true,
                    number_in_row: 1,
                },
                {
                    title: '???????? ???????????????? ??????????????',
                    dataIndex: 'dttm_decision',
                    data_type: 'string',
                    is_sort: true,
                    number_in_row: 1,
                },
                {
                    title: '????????????',
                    dataIndex: 'status',
                    data_type: 'string',
                    is_sort: true,
                    number_in_row: 1,
                },
            ];
        case 'osAdmin':
        case 'tableOs':
            return [
                {
                    title: '???????? ???????????????? ',
                    dataIndex: 'dttm_created',
                    data_type: 'string',
                    is_sort: true,
                    number_in_row: 1,
                },
                {
                    title: '???????? ????????????????????',
                    dataIndex: 'dttm_updated',
                    data_type: 'string',
                    is_sort: true,
                    number_in_row: 1,
                },
                {
                    title: '???????? ???????????????? ??????????????',
                    dataIndex: 'dttm_decision',
                    data_type: 'string',
                    is_sort: true,
                    number_in_row: 1,
                },
                {
                    title: '????????????',
                    dataIndex: 'status',
                    data_type: 'string',
                    is_sort: true,
                    number_in_row: 1,
                },
            ];
        case 'messages':
            return [
                {
                    title: '???????? ????????????',
                    dataIndex: 'subject',
                    data_type: 'string',
                    is_sort: true,
                    number_in_row: 1,
                },
                {
                    title: '??????????????????????',
                    dataIndex: 'body',
                    data_type: 'string',
                    is_sort: true,
                    number_in_row: 1,
                },
                {
                    title: '???? ????????',
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
        case 'tableSdc':
            return {
                onClick: (e) => {
                    e.preventDefault();
                    navigate('/request_sdc/' + record.id);
                },
            };
        case 'osAdmin':
        case 'tableOs':
            return {
                onClick: (e) => {
                    e.preventDefault();
                    navigate('/current_oc/' + record.id);
                },
            };

        default:
            break;
    }
};

export const checkStatus = async (userRole, setState, navigate) => {
    //     console.log(
    //         userRole,
    //         'checkStatus = async (userRole, setState, navigate) '
    //     );
    switch (userRole) {
        case 'user_sdc':
            let res = await $api.get(
                '/request/request_sdc_standard_certification/get/active_request_sdc_header'
            );
            if (res.data.data?.requestSdcHeader !== null) {
                setState(true);
            } else {
                navigate('/new-request-sdc');
            }
            break;

        case 'user_oc':
            let val = await $api.get(
                '/request/request_oc_organ_certification/get/active_request_oc_header'
            );
            if (val.data.data?.requestOcHeader !== null) {
                setState(true);
            } else {
                navigate('/new_request_oc');
            }
            break;

        default:
            break;
    }
};
