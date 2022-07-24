import { Table, Layout } from 'antd';
import React, { useEffect } from 'react';
import { getEntries } from '../../store/entries/actions';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { entriesTableColumns } from '../../helpers/entriesTableConstants';

import { Filter } from '../Filter/Filter';

import './tableRegistry.scss';

const { Content } = Layout;

export const TableRegistry = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getEntries());
    }, [dispatch]);

    const { entries } = useSelector((state) => state.entries);
    //     console.log(entries, 'entries');
    const dataSource = entries.map((item) => ({ ...item, key: item.id }));
    console.log(dataSource, 'datasourec');
    console.log(entriesTableColumns, 'tabledata');

    const relocateToCard = (record) => {
        return {
            onClick: (e) => {
                e.preventDefault();
                navigate('/entry/' + record.id);
            },
        };
    };

    return (
        <>
            {/* <LayoutContent> */}
            <Content style={{ padding: '0 40px' }}>
                {/* <Col xs={12} md={{ span: 1, offset: 1 }}> */}
                <div className="registry-sro__drawer-wrapper">
                    <Filter />
                    <Table
                        // bordered={false}
                        columns={entriesTableColumns}
                        dataSource={dataSource}
                        className="registry-sro__table"
                        size="medium"
                        //   filterSearch={true}
                        pagination={{
                            defaultPageSize: '15',
                            showSizeChanger: true,
                            // itemRender: itemRender
                            total: dataSource.length,
                            pageSizeOptions: [15, 30, 50],
                        }}
                        onRow={(record) => relocateToCard(record)}
                    />
                    {/* </Col> */}
                </div>
            </Content>

            {/* </LayoutContent> */}
        </>
    );
};
