import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { getCurrentProposalSdc } from '../../../store/proposal/actions';
import { editProposalCurrent } from '../../../store/proposal/proposalSlice';

import '../card-item.scss';

function EditProposalCard(props) {
    const navigate = useNavigate();
    const { register, handleSubmit, reset } = useForm();
    const [isEditSuccess, setIsEditSuccess] = useState(false);
    const [message, setMessage] = useState('');

    const dispatch = useDispatch();
    const { id } = useParams();

    const { currentProposalSdc } = useSelector((state) => state.proposalTest);

    useEffect(() => {
        dispatch(getCurrentProposalSdc(id));
    }, [id, dispatch, message]);

    if (!currentProposalSdc) return null;

    const onSubmit = async (data) => {
        const body = {
            full_name: data.full_name,
            short_name: data.short_name,
            registration_number: data.registration_number,
            registration_date: data.registration_date,
            registration_company: data.registration_company,
            site: data.site,
            area: data.area,
            logo: data.logo,
        };

        const res = await fetch(
            `/request/request_sdc_standard_certification/edit/${id}`,
            {
                method: 'PATCH',
                body: JSON.stringify(body),
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                },
            }
        );
        if (res.status === 403) {
            setMessage('Ошибка! Редактирование заявки запрещено.');
            setIsEditSuccess(true);
        }
        console.log(res, 'resresresres');
        //    dispatch(editProposalCurrent(res));
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
            value: currentProposalSdc?.site || 'данных нет',
            name: 'site',
        },
        {
            id: 6,
            title: 'Область',
            value: currentProposalSdc?.area,
            name: 'area',
        },
    ];

    return isEditSuccess ? (
        <>
            <div className="message__error">{message}</div>
            <div className="edit__card-buttons">
                <button
                    className="btn__login edit__btn"
                    //     disabled={!isValid}
                    onClick={() => navigate('/')}
                >
                    На главную
                </button>
            </div>
        </>
    ) : (
        <div className="card-container">
            <div className="card">
                <div className="edit__card-title">
                    <strong>
                        Редактирование заявления {currentProposalSdc?.full_name}
                    </strong>
                </div>
                <form className="edit-form" onSubmit={handleSubmit(onSubmit)}>
                    {cardData.map((field) => {
                        return (
                            <div className="edit__current-input" key={field.id}>
                                <div className="edit__title-input">
                                    {field.title}
                                </div>
                                <br />
                                <input
                                    className="current__input"
                                    defaultValue={field.value}
                                    type="text"
                                    id={field.name}
                                    {...register(field.name)}
                                />
                            </div>
                        );
                    })}

                    <div className="edit__card-buttons">
                        <button
                            className="btn__login edit__btn"
                            //     disabled={!isValid}
                            onClick={() => navigate(-1)}
                        >
                            Отменить
                        </button>
                        <button
                            className="btn__login edit__btn"
                            type="submit"
                            //     disabled={!isValid}
                        >
                            Отправить
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default EditProposalCard;
