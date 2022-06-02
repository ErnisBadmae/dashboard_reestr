import { Table, Layout } from 'antd';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getRequestSdsList } from '../../store/entries/actions/getEntries';
import { requestsSdsTableColumns } from '../../helpers/requestsSds';
import $api from '../../http';

const { Content } = Layout;

export const TableSds = (props) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getRequestSdsList());
    }, [dispatch]);

    const { requestsSds } = useSelector((state) => state.entries);
    //     console.log(requestsSds, 'entries');
    const dataSource = requestsSds.map((item) => ({ ...item, key: item.id }));

    const checkStatus = async (id) => {
        let res = await $api.get(
            '/request/request_sdc_standard_certification/get/active_request_sdc_header'
        );
        console.log(res, 'responseFromcheckstatus');
    };

    const relocateToCard = (record) => {
        return {
            onClick: (e) => {
                e.preventDefault();
                navigate('/declaration/' + record.id);
            },
        };
    };

    return (
        <>
            <Content style={{ padding: '0 40px' }}>
                <div className="registry-sro__drawer-wrapper">
                    <Table
                        // bordered={false}
                        columns={requestsSdsTableColumns}
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
