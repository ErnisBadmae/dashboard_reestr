import { Table, Layout, Pagination } from 'antd';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { PlusOutlined } from '@ant-design/icons';

import NewMessage from '../Messages/NewMessage';
import Spinner from '../Spinner/Spinner';

import { ButtonRegistry } from '../Buttons/button-registry/button-registry';
import { useGetDataSource } from '../../hooks/useGetDataSource';
import {
    getTableData,
    getFilterButtons,
    getColumns,
    relocateToCard,
    checkStatus,
} from './tableHelpers';

import './table.scss';

const { Content } = Layout;

export const TableWrapper = ({ tableType }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const message =
        'У вас имеется активная заявка, Вы пока не можете добавить заявку';

    const [checkRequest, setCheckRequest] = useState(false);
    const [pageIndex, setPageIndex] = useState(0);
    const [pageSize, setPageSize] = useState(10);
    const [currentTab, setCurrentTab] = useState({
        id: 1,
    });

    const { totalElements } = useSelector(
        (state) => state.proposal.proposalSdcList
    );
    const { loading } = useSelector((state) => state.proposal);
    const userRole = useSelector((state) => state.auth.user.roles);

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
    if (loading) {
        return <Spinner />;
    }

    const filterBtn = getFilterButtons(tableType);
    const columns = getColumns(tableType);

    const drawAddRequest = (userRole) => {
        if (userRole !== 'user_admin') {
            return (
                <ButtonRegistry
                    text="Создать заявку"
                    className={'btn__login'}
                    icon={<PlusOutlined />}
                    onClick={() =>
                        checkStatus(userRole, setCheckRequest, navigate)
                    }
                />
            );
        } else {
            return <></>;
        }
    };

    return (
        <>
            <Content style={{ padding: '25px 40px' }}>
                <div className="buttons__request">
                    {checkRequest ? (
                        <div className="check-error"> {message} </div>
                    ) : (
                        drawAddRequest(userRole)
                    )}
                </div>
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
