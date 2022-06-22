import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { useForm, Controller } from 'react-hook-form';
import { getCurrentOsSdc } from '../../../store/proposal/actions';
import { editCurrentOsSdc } from '../../../store/proposal/actions';
import DatePicker, { registerLocale, setDefaultLocale } from 'react-datepicker';
import ru from 'date-fns/locale/ru';

import '../../FormSdc/form-sdc.scss';

import 'react-datepicker/dist/react-datepicker.css';

registerLocale('ru', ru);
setDefaultLocale('ru');

function EditCardOs(props) {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {
        register,
        control,
        formState: { errors },
        handleSubmit,
    } = useForm();

    const { id } = useParams();

    const { currentOsSdcCard } = useSelector((state) => state.proposalTest);

    useEffect(() => {
        dispatch(getCurrentOsSdc(id));
    }, [id, dispatch]);

    if (!currentOsSdcCard) return null;

    const onSubmit = async (data) => {
        const body = {
            certificateNumber: data.certificate_number,
            certificateDate: data.certificate_date,
            decisionNumber: data.decision_number,
            fullNameOrganCertification: data.full_name_organ_certification,
            shortNameOrganCertification: data.short_name_organ_certification,
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
            name: 'certificateNumber',
        },
        {
            id: 2,
            title: 'Дата сертификата',
            value: currentOsSdcCard?.certificate_date,
            name: 'certificateDate',
        },
        {
            id: 3,
            title: 'Номер решения',
            value: currentOsSdcCard?.decision_number,
            name: 'decisionNumber',
        },
        {
            id: 4,
            title: 'Полное наименование ОС',
            value: currentOsSdcCard?.full_name_organ_certification,
            name: 'fullNameOrganCertification',
        },
        {
            id: 5,
            title: 'Сокращенное наименование ОС',
            value:
                currentOsSdcCard?.short_name_organ_certification ||
                'данных нет',
            name: 'shortNameOrganCertification',
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

    return (
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
                        type="button"
                    >
                        Назад
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
