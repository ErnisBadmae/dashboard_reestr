import { Table, Layout, Pagination } from 'antd';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { ButtonRegistry } from '../Buttons/button-registry/button-registry';
import {
    getTableData,
    getFilterButtons,
    getColumns,
    relocateToCard,
} from './tableHelpers';
import { useGetDataSource } from '../../hooks/useGetDataSource';
import NewMessage from '../Messages/NewMessage';

import './table.scss';

const { Content } = Layout;

export const TableWrapper = ({ tableType }) => {
    const [pageIndex, setPageIndex] = useState(0);
    const [pageSize, setPageSize] = useState(10);
    const [currentTab, setCurrentTab] = useState({
        id: 1,
    });
    const { totalElements } = useSelector(
        (state) => state.proposal.proposalSdcList
    );

    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        setCurrentTab({
            id: 1,
        });
    }, [tableType]);

    useEffect(() => {
        getTableData({
            tableType,
            dispatch,
            pageIndex,
            pageSize,
            filterStatus: currentTab.status,
            messagesType:
                currentTab.id === 1
                    ? 'inbox'
                    : currentTab.id === 2
                    ? 'outbox'
                    : 'sendMessage',
        })();
    }, [dispatch, pageIndex, pageSize, currentTab, tableType]);

    const dataSource = useGetDataSource({
        tableType,
        messagesType:
            currentTab.id === 1
                ? 'inbox'
                : currentTab.id === 2
                ? 'outbox'
                : 'sendMessage',
    });
    const filterBtn = getFilterButtons(tableType);
    const columns = getColumns(tableType);

    return (
        <>
            <Content style={{ padding: '25px 40px' }}>
                {filterBtn.map((btn) => {
                    return (
                        <ButtonRegistry
                            text={btn.text}
                            key={btn.id}
                            style={
                                btn.id === currentTab.id
                                    ? { background: '#97c4f2' }
                                    : {}
                            }
                            className={'button-registry'}
                            onClick={() => {
                                setCurrentTab(btn);
                            }}
                        />
                    );
                })}
                <div className="registry-sro__drawer-wrapper">
                    {currentTab.text === 'Написать сообщение' &&
                    tableType === 'messages' ? (
                        <NewMessage />
                    ) : (
                        <>
                            <Table
                                // bordered={false}
                                columns={columns}
                                dataSource={dataSource}
                                className="registry-sro__table"
                                size="medium"
                                onRow={(record) =>
                                    relocateToCard(record, tableType, navigate)
                                }
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
                        </>
                    )}
                </div>
            </Content>
        </>
    );
};
