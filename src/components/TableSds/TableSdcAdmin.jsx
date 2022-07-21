import { Table, Layout, Pagination } from 'antd';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getProposalSdcList } from '../../store/proposal/actions';
import { requestSdcCertifHolderTableColumn } from '../../helpers/requestsSds';
import { ButtonRegistry } from '../Buttons/button-registry/button-registry';

import './table.scss';

const { Content } = Layout;

export const TableSdcAdmin = (props) => {
    const [pageIndex, setPageIndex] = useState(0);
    const [pageSize, setPageSize] = useState(10);
    const [filterStatus, setFilterStatus] = useState(null);

    const { totalElements } = useSelector(
        (state) => state.proposal.proposalSdcList
    );

    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(
            getProposalSdcList({
                row_page: pageSize,
                page: pageIndex,
                filters: filterStatus !== null ? { status: filterStatus } : {},
            })
        );
    }, [dispatch, pageIndex, pageSize, filterStatus]);

    const { proposalSdcList } = useSelector((state) => state.proposal);

    const dataSource = proposalSdcList.data?.map((item) => ({
        ...item,

        status: item.status.title,
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

    const filterButtons = [
        {
            text: 'Отправлено на проверку документов',
            status: 4,
        },
        {
            text: 'Проверка документов',
            status: 5,
        },
        {
            text: 'Решение принято',
            status: [8, 9],
        },

        {
            text: 'Все',
            status: null,
        },
    ];

    return (
        <>
            <Content style={{ padding: '25px 40px' }}>
                {filterButtons.map((btn) => {
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
                        columns={requestSdcCertifHolderTableColumn}
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
