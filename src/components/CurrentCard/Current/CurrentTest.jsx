import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
// import Test from '../../../pages/test/test';
import { useForm } from 'react-hook-form';
import { getCurrentProposalSdc } from '../../../store/proposal/actions';
import '../card-item.scss';
import { editProposalCurrent } from '../../../store/proposal/reducers/viewCurrent';

function CurrentTest(props) {
    const { register, handleSubmit, reset } = useForm();
    const [isEditSuccess, setIsEditSuccess] = useState(false);
    const [message, setMessage] = useState('');

    const dispatch = useDispatch();
    const { id } = useParams();

    const { currentProposalSdc } = useSelector((state) => state.proposal);

    useEffect(() => {
        dispatch(getCurrentProposalSdc(id));
    }, [id, dispatch, message]);

    if (!currentProposalSdc) return <></>;

    const onSubmit = async (data) => {
        console.log(data, 'body');

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
        if (res.status == 403) {
            setMessage('Ошибка! Редактирование заявки запрещено.');
            setIsEditSuccess(true);
        }

        //  dispatch(editProposalCurrent(res));
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
        <div className="message__error">{message}</div>
    ) : (
        <div className="card-container">
            <div className="card">
                <div className="card__title">
                    <strong>{currentProposalSdc?.full_name}</strong>
                </div>
                <form className="edit-form" onSubmit={handleSubmit(onSubmit)}>
                    {cardData.map((field) => {
                        return (
                            <div key={field.id}>
                                <strong>{field.title}</strong>
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

                    <button className="btn-submit" type="submit">
                        Сохранить
                    </button>
                </form>
            </div>
            {/* <Test /> */}
        </div>
    );
}

export default CurrentTest;
