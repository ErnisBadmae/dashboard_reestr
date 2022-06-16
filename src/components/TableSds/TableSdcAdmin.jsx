import { Table, Layout, Pagination } from 'antd';
import React, { useEffect, useState, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getProposalSdcList } from '../../store/proposal/actions';
import { requestSdcCertifHolderTableColumn } from '../../helpers/requestsSds';
import { ButtonRegistry } from '../Buttons/button-registry/button-registry';
import $api from '../../http';

import './table.scss';

const { Content } = Layout;

export const TableSdcAdmin = (props) => {
    const [pageIndex, setPageIndex] = useState(0);
    const [pageSize, setPageSize] = useState(10);
    const [filters, setFilters] = useState({});

    const { totalElements } = useSelector(
        (state) => state.proposal.proposalSdcList
    );

    // debugger;
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(
            getProposalSdcList({
                row_page: pageSize,
                page: pageIndex,
                filters: filters,
            })
        );
    }, [dispatch, pageIndex, pageSize, filters]);

    const { proposalSdcList } = useSelector((state) => state.proposal);

    const dataSource = proposalSdcList.data?.map((item) => ({
        ...item,
        //копируем и перезаписываем поля у объектов
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
            text: 'Отправлено на модерацию',
            status: 6,
        },
        {
            text: 'Модерация',
            status: 7,
        },
    ];

    return (
        <>
            <Content style={{ padding: '0 40px' }}>
                {filterButtons.map((btn) => {
                    return (
                        <ButtonRegistry
                            text={btn.text}
                            key={btn.status}
                            //     path={'/new-request-sdc'}
                            onClick={() => {
                                setFilters({ status: btn.status });
                            }}
                        />
                    );
                })}

                {/* <ButtonRegistry
                    text="Отправлено на проверку документов"
                    //     path={'/new-request-sdc'}
                    onClick={() => checkStatus()}
                />
                <ButtonRegistry
                    text="Проверка документов"
                    //     path={'/new-request-sdc'}
                    onClick={() => checkStatus()}
                />
                <ButtonRegistry
                    text="Отправлено на модерацию"
                    //     path={'/new-request-sdc'}
                    onClick={() => checkStatus()}
                />
                <ButtonRegistry
                    text="Модерация"
                    //     path={'/new-request-sdc'}
                    onClick={() => checkStatus()}
                /> */}
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
