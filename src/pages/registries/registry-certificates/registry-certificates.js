import React, { useEffect } from 'react';
import { Table } from 'antd';
import { getData } from '../../../store/registry/actions';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate, useOutletContext } from 'react-router-dom';
import { relocateToCard } from '../../../helpers/utils';
import { certifacatesTableColumn } from '../../../helpers/columnsTableConstants';

import './registry-certificates.scss';

export const RegistryCertificates = () => {
    const { entries } = useSelector((state) => state.registries);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { pathname } = useLocation();
    const [filterValues] = useOutletContext();

    useEffect(() => {
        dispatch(getData({ pathname, filterValues }));
    }, [pathname, filterValues, dispatch]);

    return (
        <div>
            <Table
                columns={certifacatesTableColumn}
                dataSource={entries}
                className="registry-sro__table"
                size="medium"
                filterSearch={true}
                pagination={{
                    // pageSize: '5',
                    showSizeChanger: true,
                    // itemRender: itemRender
                    total: entries.length,
                }}
                onRow={(record) => relocateToCard(record, pathname, navigate)}
                rowKey={(obj) => obj.id}
            />
        </div>
    );
};
