import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getCurrentProposalSdc } from '../../store/proposal/actions';
import { ButtonRegistry } from '../Buttons/button-registry/button-registry';

import './card-item.css';

function CurrentProposalSdc(props) {
    const dispatch = useDispatch();
    const { id } = useParams();
    const [editMode, setEditMode] = useState(0);
    const { currentProposalSdc } = useSelector((state) => state.proposal);

    useEffect(() => {
        dispatch(getCurrentProposalSdc(id));
    }, [id, dispatch]);

    const cardData = [
        {
            id: 1,
            title: 'Полное имя',
            value: currentProposalSdc?.short_name,
            nameInState: 'short_name',
        },
        {
            id: 2,
            title: 'Регистрационный номер',
            value: currentProposalSdc?.registration_number,
        },
        {
            id: 3,
            title: 'Дата регистрации',
            value: currentProposalSdc?.registration_date,
        },
        {
            id: 4,
            title: 'registration_company',
            value: currentProposalSdc?.registration_company,
        },
        {
            id: 5,
            title: 'Сайт организации',
            value: currentProposalSdc?.site,
        },
        {
            id: 6,
            title: 'Область',
            value: currentProposalSdc?.area,
        },
    ];

    const formHandler = (e) => {
        e.preventDefault();
    };

    return (
        <div className="card-container">
            <div className="card">
                <div className="card__title">
                    <strong>{currentProposalSdc?.full_name}</strong>
                </div>
                <form className="card__body" onSubmit={formHandler}>
                    {cardData.map((field) => {
                        return (
                            <div key={field.id}>
                                <strong>{field.title}</strong>
                                <br />
                                {editMode === field.id ? (
                                    <input
                                        placeholder={field.title}
                                        value={field.value}
                                        onChange={(e) => e.target.value}
                                    />
                                ) : (
                                    <p className="text__current-card">
                                        {field.value}
                                    </p>
                                )}

                                <br />
                                {editMode === field.id ? (
                                    <ButtonRegistry
                                        text={`Сохранить ${field.title}`}
                                        onClick={() => {
                                            // dispatch(changeFieldSdc())
                                            setEditMode(0);
                                        }}
                                    />
                                ) : (
                                    <ButtonRegistry
                                        text={`Редактировать ${field.title}`}
                                        onClick={() => setEditMode(field.id)}
                                    />
                                )}
                            </div>
                        );
                    })}
                </form>
            </div>
        </div>
    );
}

export default CurrentProposalSdc;
