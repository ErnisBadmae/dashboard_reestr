import { Table } from 'antd';
import React, { useEffect } from 'react';
import { getEntries } from '../../store/entries/actions';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { entriesTableColumns } from '../../helpers/entriesTableConstants';
import './table.scss';

export const TableRegistry = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getEntries());
    }, []);

    const { entries } = useSelector((state) => state.entries);
    const dataSource = entries.map((item) => ({ ...item, key: item.id }));

    const relocateToCard = (record) => {
        return {
            onClick: (e) => {
                e.preventDefault();
                navigate('/entry/' + record.id);
            },
        };
    };

    return (
        <Table
            columns={entriesTableColumns}
            dataSource={dataSource}
            className="registry-sro__table"
            size="medium"
          //   filterSearch={true}
            pagination={{
                // pageSize: '5',
                showSizeChanger: true,
                // itemRender: itemRender
                total: dataSource.length,
            }}
            onRow={(record) => relocateToCard(record)}
        />
    );
};
