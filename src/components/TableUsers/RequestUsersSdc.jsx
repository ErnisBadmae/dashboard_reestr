import { Table, Layout, Pagination } from 'antd';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getRequestUserSdc } from '../../store/users/actions';
import { requestsUsersSdcTableColumn } from '../../helpers/usersTableColumns';

import '../TableSds/table.scss';

const { Content } = Layout;

export const RequestUsersSdc = (props) => {
    const [pageIndex, setPageIndex] = useState(0);
    const [pageSize, setPageSize] = useState(10);

    const { totalElements } = useSelector(
        (state) => state.users.requestsListSdc
    );
    const { data } = useSelector((state) => state.users.requestsListSdc);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(
            getRequestUserSdc({
                row_page: pageSize,
                page: pageIndex,
            })
        );
    }, [dispatch, pageIndex, pageSize]);

    const relocateToCard = (record) => {
        return {
            onClick: (e) => {
                e.preventDefault();
                navigate('/current-request-sdc-reg/' + record.id);
            },
        };
    };

    return (
        <>
            <Content style={{ padding: '25px 40px' }}>
                <div className="registry-sro__drawer-wrapper">
                    <Table
                        // bordered={false}
                        columns={requestsUsersSdcTableColumn}
                        dataSource={data}
                        className="registry-sro__table"
                        size="medium"
                        onRow={(record) => relocateToCard(record)}
                        rowKey={(obj) => obj.id}
                        pagination={false}
                    />
                    <Pagination
                        key={'pagination'}
                        showSizeChanger={true}
                        current={pageIndex}
                        total={totalElements}
                        pageSize={pageSize}
                        onChange={(page) => setPageIndex(page)}
                        onShowSizeChange={(current, newPageSize) =>
                            setPageSize(newPageSize)
                        }
                    />
                </div>
            </Content>
        </>
    );
};
