import React, { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
// import $api from '../../../http';
// import Test from '../../pages/test/test';
import { getCurrentProposalSdc } from '../../../store/proposal/actions';
// import { editProposalCurrent } from '../../store/proposal/reducers/viewCurrent';
import { ButtonRegistry } from '../../Buttons/button-registry/button-registry';

import '../card-item.scss';

// const headersAxios = {
//     headers: {
//         'Content-Type': 'application/json',
//         //    'Access-Control-Allow-Origin': '*',
//     },
// };

function EditProposalCurrentSdc(props) {
    const dispatch = useDispatch();
    const { id } = useParams();
    const [editMode, setEditMode] = useState(0);

    const { currentProposalSdc } = useSelector((state) => state.proposal);
    const [formData, setFormData] = useState(currentProposalSdc);

    useEffect(() => {
        dispatch(getCurrentProposalSdc(id));
    }, [id, dispatch]);

    const {
        short_name,
        registration_number,
        registration_date,
        registration_company,
        site,
        area,
    } = formData;

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    };
    const cardData = [
        {
            id: 1,
            title: 'Полное имя',
            value: currentProposalSdc?.short_name,
            name: 'short_name',
        },
        {
            id: 2,
            title: 'Регистрационный номер',
            value: currentProposalSdc?.registration_number,
            name: 'registration_number',
        },
        {
            id: 3,
            title: 'Дата регистрации',
            value: currentProposalSdc?.registration_date,
            name: 'registration_date',
        },
        {
            id: 4,
            title: 'registration_company',
            value: currentProposalSdc?.registration_company,
            name: 'registration_company',
        },
        {
            id: 5,
            title: 'Сайт организации',
            value: currentProposalSdc?.site,
            name: 'site',
        },
        {
            id: 6,
            title: 'Область',
            value: currentProposalSdc?.area,
            name: 'area',
        },
    ];

    const formHandler = async (e) => {
        e.preventDefault();
        const registrData = {
            short_name: short_name ?? currentProposalSdc.short_name,
            registration_number:
                registration_number ?? currentProposalSdc.registration_number,
            registration_date:
                registration_date ?? currentProposalSdc.registration_date,
            registration_company:
                registration_company ?? currentProposalSdc.registration_company,
            site: site ?? currentProposalSdc.site,
            area: area ?? currentProposalSdc.area,
        };
        console.log('registrData', registrData);
        //    const res = await $api.patch(
        //    const res = await fetch.putch(
        //        `/request/request_sdc_standard_certification/edit/${id}`,
        //        myInit,
        //        registrData
        //        //   headersAxios
        //    );
        //    console.log(res, 'resresres');
        //на апи,
        //    dispatch(editProposalCurrent(registrData));

        const res = await fetch(
            `/request/request_sdc_standard_certification/edit/${id}`,
            {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                },
            }
        );
        console.log(res, 'resresres');
    };

    return (
        //    <div className="card-container">
        //    <div className="card">
        <>
            <div className="card__title">
                <strong>{currentProposalSdc?.full_name}</strong>
            </div>
            <form
                id="editForm"
                className="card__body"
                onSubmit={formHandler}

                // encType="multipart/form-data"
            >
                {cardData.map((field) => {
                    return (
                        <div key={field.id}>
                            <strong>{field.title}</strong>
                            {editMode === field.id ? (
                                <input
                                    className="current__input"
                                    defaultValue={field.value}
                                    name={field.name}
                                    onChange={onChange}
                                />
                            ) : (
                                <div className="text__current-card">
                                    {field.value}
                                </div>
                            )}
                            {editMode === field.id ? (
                                <div className="btn__edit">
                                    <ButtonRegistry
                                        className="btn__edit"
                                        text={'Сохранить'}
                                        onClick={() => {
                                            // dispatch(changeFieldSdc())
                                            setEditMode(0);
                                        }}
                                    />
                                </div>
                            ) : (
                                <div className="btn__edit">
                                    <ButtonRegistry
                                        text={'Редактировать'}
                                        onClick={() => setEditMode(field.id)}
                                    />
                                </div>
                            )}
                        </div>
                    );
                })}
            </form>
        </>

        //    </div>
    );
}

export default EditProposalCurrentSdc;
