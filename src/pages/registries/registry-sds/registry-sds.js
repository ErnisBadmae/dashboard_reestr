import React, { useEffect, useState } from 'react';
import { Table, Pagination } from 'antd';
import { useLocation, useNavigate, useOutletContext } from 'react-router-dom';
import { getData } from '../../../store/registry/actions';
import { useDispatch, useSelector } from 'react-redux';
import { relocateToCard } from '../../../helpers/utils';
import { sdsTableColumns } from '../../../helpers/columnsTableConstants';

import './registry-sds.scss';

export const RegistrySds = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { pathname } = useLocation();
    const [filterValues] = useOutletContext();

    const [pageIndex, setPageIndex] = useState(0);
    const [pageSize, setPageSize] = useState(10);

    const { data } = useSelector((state) => state.registries.entries);
    const { totalElements } = useSelector((state) => state.registries.entries);

    useEffect(() => {
        dispatch(
            getData({
                row_page: pageSize,
                page: pageIndex,
                pathname,
                filterValues: filterValues ? { ...filterValues } : {},
            })
        );
    }, [pageIndex, pageSize, pathname, filterValues, dispatch]);

    return (
        <div>
            <Table
                columns={sdsTableColumns}
                dataSource={data}
                className="registry-sro__table"
                size="medium"
                filterSearch={true}
                pagination={false}
                onRow={(record) => relocateToCard(record, pathname, navigate)}
                rowKey={(obj) => obj.id}
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
    );
};
