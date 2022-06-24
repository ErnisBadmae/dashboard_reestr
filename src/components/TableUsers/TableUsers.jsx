import { Table, Layout } from 'antd';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getUsersList } from '../../store/users/actions';
import { usersTableColumns } from '../../helpers/usersTableColumns';

const { Content } = Layout;

export const TableUsers = (props) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUsersList());
    }, [dispatch]);

    const { requestsSds } = useSelector((state) => state.entries);

    const dataSource = requestsSds.map((item) => ({ ...item, key: item.id }));

    const relocateToCard = (record) => {
        return {
            onClick: (e) => {
                e.preventDefault();
                navigate('/user/' + record.id);
            },
        };
    };

    return (
        <>
            <Content style={{ padding: '0 40px' }}>
                <div className="registry-sro__drawer-wrapper">
                    <Table
                        // bordered={false}
                        columns={usersTableColumns}
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
