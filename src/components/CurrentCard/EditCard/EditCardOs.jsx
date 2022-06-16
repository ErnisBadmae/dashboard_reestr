import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { getCurrentOsSdc } from '../../../store/proposal/actions';
import { editCurrentOsSdc } from '../../../store/proposal/actions';

import '../../FormSdc/form-sdc.scss';

function EditCardOs(props) {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { register, handleSubmit, reset } = useForm();
    const { id } = useParams();

    const [isEditSuccess, setIsEditSuccess] = useState(false);
    const [message, setMessage] = useState('');

    const { currentOsSdcCard } = useSelector((state) => state.proposalTest);

    useEffect(() => {
        dispatch(getCurrentOsSdc(id));
    }, [id, dispatch, message]);

    if (!currentOsSdcCard) return null;

    const onSubmit = async (data) => {
        const body = {
            certificate_number: data.certificate_number,
            certificate_date: data.certificate_date,
            decision_number: data.decision_number,
            full_name_organ_certification: data.full_name_organ_certification,
            short_name_organ_certification: data.short_name_organ_certification,
            inn: data.inn,
            ogrn: data.ogrn,
            manager_name: data.manager_name,
            address: data.address,
            email: data.email,
            site: data.site,
            area: data.area,
        };

        dispatch(editCurrentOsSdc({ id, body }));
    };

    const cardData = [
        {
            id: 1,
            title: 'Номер сертификата',
            value: currentOsSdcCard?.certificate_number,
            name: 'certificate_number',
        },
        {
            id: 2,
            title: 'Дата сертификата',
            value: currentOsSdcCard?.certificate_date,
            name: 'certificate_date',
        },
        {
            id: 3,
            title: 'Номер решения',
            value: currentOsSdcCard?.decision_number,
            name: 'decision_number',
        },
        {
            id: 4,
            title: 'Полное наименование ОС',
            value: currentOsSdcCard?.full_name_organ_certification,
            name: 'full_name_organ_certification',
        },
        {
            id: 5,
            title: 'Сокращенное наименование ОС',
            value:
                currentOsSdcCard?.short_name_organ_certification ||
                'данных нет',
            name: 'short_name_organ_certification',
        },
        {
            id: 6,
            title: 'Инн',
            value: currentOsSdcCard?.inn,
            name: 'inn',
        },
        {
            id: 7,
            title: 'Огрн',
            value: currentOsSdcCard?.ogrn,
            name: 'ogrn',
        },
        {
            id: 8,
            title: 'Имя руководителя',
            value: currentOsSdcCard?.manager_name,
            name: 'manager_name',
        },
        {
            id: 9,
            title: 'Юридический адрес',
            value: currentOsSdcCard?.address,
            name: 'address',
        },
        {
            id: 10,
            title: 'Контактный телефон',
            value: currentOsSdcCard?.phone,
            name: 'phone',
        },
        {
            id: 11,
            title: 'Электронная почта',
            value: currentOsSdcCard?.email,
            name: 'email',
        },
        {
            id: 12,
            title: 'Сайт',
            value: currentOsSdcCard?.site,
            name: 'site',
        },
        {
            id: 13,
            title: 'Область распространения',
            value: currentOsSdcCard?.area,
            name: 'area',
        },
    ];

    return isEditSuccess ? (
        <>
            <div className="message__error">{message}</div>
            <div className="edit__card-buttons">
                <button
                    className="btn__login edit__btn"
                    onClick={() => navigate('/')}
                >
                    На главную
                </button>
            </div>
        </>
    ) : (
        <>
            <div className="login__title">Редактирование ОС СДС</div>
            <form
                className="declaration__form__request"
                onSubmit={handleSubmit(onSubmit)}
            >
                {cardData.map((field) => {
                    return (
                        <div className="card__edit__input" key={field.id}>
                            <p className="input__title">{field.title}</p>
                            <input
                                className="current__input card__edit__input__element"
                                defaultValue={field.value}
                                type="text"
                                id={field.name}
                                {...register(field.name)}
                            />
                        </div>
                    );
                })}

                <div className="declaration__buttons">
                    <button
                        className="btn__login declaration__btn"
                        onClick={() => navigate(-1)}
                    >
                        Вернуться
                    </button>
                    <button
                        className="btn__login declaration__btn"
                        type="submit"
                    >
                        Сохранить
                    </button>
                </div>
            </form>
        </>
    );
}

export default EditCardOs;
