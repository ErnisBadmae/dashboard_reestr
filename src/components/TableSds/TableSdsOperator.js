import { Table, Layout } from 'antd';
import React, { useEffect, useState, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getProposalSdcList } from '../../store/proposal/actions';
import { requestSdcCertifHolderTableColumn } from '../../helpers/requestsSds';
import { ButtonRegistry } from '../Buttons/button-registry/button-registry';
import $api from '../../http';

import './table.scss';

const { Content } = Layout;

export const TableSdsOperator = (props) => {
    const { totalElements } = useSelector(
        (state) => state.proposal.proposalSdcList
    );

    const [pagination, setPagination] = useState({
        pageSizeOptions: ['5', '10', '20', '40', '60'],
        showSizeChanger: true,
        pageSize: 10,
        total: 30,
        current: 1,
    });

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const message =
        'У вас имеется активная заявка, Вы пока не можете добавить заявку';
    const [checkRequest, setCheckRequest] = useState(false);

    useEffect(() => {
        dispatch(
            getProposalSdcList({
                row_page: pagination.pageSize,
                page: pagination.current,
            })
        );
    }, [dispatch, pagination]);

    const { proposalSdcList } = useSelector((state) => state.proposal);
    //    console.log(proposalSdcList, 'proposalSdc');

    const dataSource = proposalSdcList.data?.map((item) => ({
        ...item,
        //копируем и перезаписываем поля у объектов
        status: item.status.title,
        key: item.id,
    }));

    const relocateToCard = (record) => {
        return {
            onClick: (e) => {
                e.preventDefault();
                navigate('/request_sdc/' + record.id);
            },
        };
    };

    const checkStatus = async () => {
        let res = await $api.get(
            '/request/request_sdc_standard_certification/get/active_request_sdc_header'
        );
        //    console.log(res, 'responseFromcheckstatus');
        if (res.data.data?.requestSdcHeader?.status.code === 'created') {
            setCheckRequest(true);
        } else {
            navigate('/new-request-sdc');
        }
    };

    const handleTableChange = (newPagination) => {
        setPagination({
            ...pagination,
            pageSize: newPagination.pageSize,
            current: newPagination.current,
        });
    };

    return (
        <>
            <Content style={{ padding: '0 40px' }}>
                <div className="buttons__request">
                    {checkRequest ? (
                        <div className="check-error"> {message} </div>
                    ) : (
                        <ButtonRegistry
                            text="Добавить заявку"
                            //     path={'/new-request-sdc'}
                            onClick={() => checkStatus()}
                        />
                    )}
                </div>

                <div className="registry-sro__drawer-wrapper">
                    <Table
                        // bordered={false}
                        columns={requestSdcCertifHolderTableColumn}
                        dataSource={dataSource}
                        className="registry-sro__table"
                        size="medium"
                        onRow={(record) => relocateToCard(record)}
                        rowKey={(obj) => obj.id}
                        pagination={pagination}
                        onChange={handleTableChange}
                    />
                </div>
            </Content>
        </>
    );
};
