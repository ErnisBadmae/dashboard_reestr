import { Table, Layout, Button } from 'antd';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { getRequestSdcProposal } from '../../store/entries/actions/getEntries';
import { requestSdcCertifHolderTableColumn } from '../../helpers/requestsSds';
import { ButtonRegistry } from '../Buttons/button-registry/button-registry';

import './table.scss';

const { Content } = Layout;

export const TableSdsOperator = (props) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getRequestSdcProposal());
    }, [dispatch]);

    const { proposalSdc } = useSelector((state) => state.entries);

    const dataSource = proposalSdc.map((item) => ({
        ...item,
        //@todo:забрать статус из объекта
        //    status:title,
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

    return (
        <>
            <Content style={{ padding: '0 40px' }}>
                <div className="buttons__request">
                    <ButtonRegistry
                        text="Добавить заявку"
                        path={'/new-request-sdc'}
                    />
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
                    />
                </div>
            </Content>
        </>
    );
};
