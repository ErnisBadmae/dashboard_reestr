import { Table, Layout } from 'antd';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getRequestSds } from '../../store/entries/actions/getEntries';
import { requestsSdsTableColumns } from '../../helpers/requestsSds';

const { Content } = Layout;

function TableSds(props) {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getRequestSds());
    }, [dispatch]);

    const { requestsSds } = useSelector((state) => state.entries);
    //     console.log(requestsSds, 'entries');
    const dataSource = requestsSds.map((item) => ({ ...item, key: item.id }));

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
}

export default TableSds;
