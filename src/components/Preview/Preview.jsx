import React, { useEffect } from 'react';
import { Collapse } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { getPreviewCurrentProposalSdc } from '../../store/proposal/actions';

import './card-item.css';
import './current-card.scss';
import EditProposalCurrentSdc from '../CurrentCard/EditCard/EditProposalCurrentSdc';

function PreviewCardSdc(props) {
    const { Panel } = Collapse;
    const dispatch = useDispatch();
    const { id } = useParams();

    const { currentProposalSdc } = useSelector((state) => state.proposal);

    useEffect(() => {
        dispatch(getPreviewCurrentProposalSdc(id));
    }, [id, dispatch]);

    const cardData = [
        {
            id: 1,
            title: 'Дата создания',
            value: currentProposalSdc?.dttm_created,
            name: 'dttm_created',
        },
        {
            id: 2,
            title: 'Дата обновления номер',
            value: currentProposalSdc?.dttm_updated,
            name: 'dttm_updated',
        },
        {
            id: 3,
            title: 'Дата принятия решени',
            value: currentProposalSdc?.dttm_desicion,
            name: 'dttm_desicion',
        },
        {
            id: 4,
            title: 'status',
            value: currentProposalSdc?.status?.title,
            name: 'status',
        },
    ];

    return (
        //    <div className="card-container">
        //   <div className="card">
        <>
            <div className="card__title">
                <strong>{currentProposalSdc?.full_name}</strong>
            </div>
            <div className="card__body">
                {cardData.map((field) => {
                    return (
                        <div key={field.id}>
                            <strong>{field.title}</strong>

                            <div className="text__current-card">
                                {field.value}
                            </div>
                        </div>
                    );
                })}
                <Collapse accordion>
                    <Panel header="Смотреть подробнее" key="1" bordered={false}>
                        <p>{<EditProposalCurrentSdc />}</p>
                    </Panel>
                </Collapse>
            </div>
            {/* </div> */}
        </>

        //    </div>
    );
}

export default PreviewCardSdc;
