import React, { useEffect } from 'react';
import { Table } from 'antd';
import { getEntries } from '../../store/entries/actions';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate, useOutletContext } from 'react-router-dom';
import { relocateToCard } from '../../helpers/utils';
import { certificateExpertsTable } from '../../helpers/columnsTableConstants';

import './registry-certificate-expert.scss';

export const RegistryCertificationExperts = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { entries } = useSelector((state) => state.entries);

    //     console.log(newEntries, 'entries');
    const { pathname } = useLocation();
    const [filterValues] = useOutletContext();

    useEffect(() => {
        dispatch(getEntries({ pathname, filterValues }));
    }, [pathname, filterValues, dispatch]);

    return (
        <div>
            <Table
                columns={certificateExpertsTable}
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
