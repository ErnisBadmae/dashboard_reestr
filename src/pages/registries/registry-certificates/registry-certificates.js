import React, { useEffect } from 'react';
import { Table } from 'antd';
import { getEntries } from '../../store/entries/actions';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate, useOutletContext } from 'react-router-dom';
import { relocateToCard } from '../../helpers/utils';
import { certifacatesTableColumn } from '../../helpers/columnsTableConstants';

import './registry-certificates.scss';

export const RegistryCertificates = () => {
    const { entries } = useSelector((state) => state.entries);

    //     const newEnt = entries.map(({ el }) => {
    //         //    if (Object.prototype.toString.call(el) === '[object Date]') {
    //         //        correctlyDate(el.certificate_date);
    //         //    }
    //         if ({ el } instanceof Date) {
    //             correctlyDate(el);
    //         }
    //         return el;
    //         //    console.log(entries, 'after');
    //     });
    //     console.log(newEntries, 'newEntries');

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { pathname } = useLocation();
    const [filterValues] = useOutletContext();

    useEffect(() => {
        dispatch(getEntries({ pathname, filterValues }));
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
