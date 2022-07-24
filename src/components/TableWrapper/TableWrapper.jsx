import { Table, Layout, Pagination } from 'antd';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { ButtonRegistry } from '../Buttons/button-registry/button-registry';
import {
    getTableData,
    getFilterButtons,
    getColumns,
    //     relocateToCard,
} from './tableHelpers';
import { useGetDataSource } from '../../hooks/useGetDataSource';

import './table.scss';

const { Content } = Layout;

export const TableWrapper = ({ tableType }) => {
    const [pageIndex, setPageIndex] = useState(0);
    const [pageSize, setPageSize] = useState(10);
    const [filterStatus, setFilterStatus] = useState(null);

    const { totalElements } = useSelector(
        (state) => state.proposal.proposalSdcList
    );

    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        getTableData({
            tableType,
            dispatch,
            pageIndex,
            pageSize,
            filterStatus,
        })();
    }, [dispatch, pageIndex, pageSize, filterStatus, tableType]);

    const dataSource = useGetDataSource(tableType);
    const filterBtn = getFilterButtons(tableType);
    const columns = getColumns(tableType);

    const relocateToCard = (record) => {
        return {
            onClick: (e) => {
                e.preventDefault();
                // navigate('/request_sdc/' + record.id);
                navigate('/message/' + record.id);
            },
        };
    };

    return (
        <>
            <Content style={{ padding: '25px 40px' }}>
                {filterBtn.map((btn) => {
                    return (
                        <ButtonRegistry
                            text={btn.text}
                            key={btn.status}
                            style={(function () {
                                if (
                                    typeof btn.status === 'object' &&
                                    btn.status !== null &&
                                    filterStatus !== null
                                ) {
                                    if (
                                        btn.status.length ===
                                            filterStatus.length &&
                                        btn.status.every(
                                            (value, index) =>
                                                value === filterStatus[index]
                                        )
                                    ) {
                                        return {
                                            background: '#97c4f2',
                                        };
                                    }
                                } else {
                                    if (btn.status === filterStatus) {
                                        return {
                                            background: '#97c4f2',
                                        };
                                    } else {
                                        return {};
                                    }
                                }
                            })()}
                            className={'button-registry'}
                            onClick={() => {
                                setFilterStatus(btn.status);
                            }}
                        />
                    );
                })}
                <div className="registry-sro__drawer-wrapper">
                    <Table
                        // bordered={false}
                        columns={columns}
                        dataSource={dataSource}
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
