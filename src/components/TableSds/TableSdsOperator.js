import { Table, Layout } from 'antd';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getProposalSdcList } from '../../store/proposal/actions';
import { requestSdcCertifHolderTableColumn } from '../../helpers/requestsSds';
import { ButtonRegistry } from '../Buttons/button-registry/button-registry';
import $api from '../../http';

import './table.scss';

const { Content } = Layout;

export const TableSdsOperator = (props) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const message =
        'У вас имеется активная заявка, Вы пока не можете добавить заявку';
    const [checkRequest, setCheckRequest] = useState(false);

    useEffect(() => {
        dispatch(getProposalSdcList());
    }, [dispatch]);

    const { proposalSdcList } = useSelector((state) => state.proposal);
    //    console.log(proposalSdcList, 'proposalSdc');

    const dataSource = proposalSdcList.map((item) => ({
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

    const checkStatus = async () => {
        let res = await $api.get(
            '/request/request_sdc_standard_certification/get/active_request_sdc_header'
        );
        console.log(res, 'responseFromcheckstatus');
        if (res.data.data?.requestSdcHeader?.status.code === 'created') {
            setCheckRequest(true);
        } else {
            navigate('/new-request-sdc');
        }
    };

    return (
        <>
            <Content style={{ padding: '0 40px' }}>
                <div className="buttons__request">
                    {checkRequest ? (
                        message
                    ) : (
                        <ButtonRegistry
                            text="Добавить заявку"
                            //     path={'/new-request-sdc'}
                            onClick={() => checkStatus()}
                        />
                    )}
                </div>

                <div className="registry-sro__drawer-wrapper">
                    <Table
                        // bordered={false}
                        columns={requestSdcCertifHolderTableColumn}
                        dataSource={dataSource}
                        className="registry-sro__table"
                        size="medium"
                        onRow={(record) => relocateToCard(record)}
                        rowKey={(obj) => obj.id}
                    />
                </div>
            </Content>
        </>
    );
};
