import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { getCurrentOsSdc } from '../../../store/proposal/actions';
import { editCurrentOsSdc } from '../../../store/proposal/actions';
import DatePicker, { registerLocale, setDefaultLocale } from 'react-datepicker';
import ru from 'date-fns/locale/ru';
import moment from 'moment';

import '../../FormSdc/form-sdc.scss';

import 'react-datepicker/dist/react-datepicker.css';

registerLocale('ru', ru);
setDefaultLocale('ru');

function EditCardOs(props) {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {
        register,

        formState: { errors },
        handleSubmit,
    } = useForm();

    const { id } = useParams();

    const { currentOsSdcCard } = useSelector((state) => state.proposalTest);

    const [registrationDate, setRegistrationDate] = useState(
        moment(currentOsSdcCard?.certificate_date).toDate()
    );
    useEffect(() => {
        dispatch(getCurrentOsSdc(id));
    }, [id, dispatch]);

    useEffect(() => {
        setRegistrationDate(
            moment(currentOsSdcCard?.registration_date).toDate()
        );
    }, [currentOsSdcCard?.certificate_date]);

    if (!currentOsSdcCard) return null;

    const onSubmit = async (data) => {
        const body = {
            certificateNumber: data.certificateNumber,
            certificateDate: registrationDate.toISOString(),
            decisionNumber: data.decisionNumber,
            fullNameOrganCertification: data.fullNameOrganCertification,
            shortNameOrganCertification: data.shortNameOrganCertification,
            inn: data.inn,
            ogrn: data.ogrn,
            managerName: data.managerName,
            address: data.address,
            email: data.email,
            site: data.site,
            area: data.area,
        };

        dispatch(editCurrentOsSdc({ id, body }));
    };

    return (
        <>
            <div className="login__title">Редактирование заявления ОС</div>
            <form
                className="declaration__form__request"
                onSubmit={handleSubmit(onSubmit)}
            >
                <div className="card__edit__input">
                    <p className="input__title">Номер сертификата</p>
                    <input
                        className="current__input card__edit__input__element"
                        autoComplete="off"
                        name="certificateNumber"
                        defaultValue={currentOsSdcCard.certificate_number}
                        type="text"
                        required
                        autoFocus
                        id="certificateNumber"
                        style={
                            !errors?.certificateNumber
                                ? {}
                                : { border: '1px solid red' }
                        }
                        {...register('certificateNumber', {
                            required: true,
                            pattern: /^\d+$/,
                            minLength: {
                                value: 5,
                                message:
                                    'Вы вводите некорректное количество цифр',
                            },
                        })}
                    />
                    {errors?.certificateNumber && (
                        <div className="error-message">
                            {errors?.certificateNumber?.message ||
                                'Введите корректный номер'}
                        </div>
                    )}
                </div>

                <div className="card__edit__input">
                    <p className="input__title">Дата регистрации сертификата</p>
                    <div className="card__edit__input__element">
                        <DatePicker
                            dateFormat="dd/MM/yyyy"
                            className="current__input date"
                            onChange={(date) => {
                                setRegistrationDate(date);
                            }}
                            selected={registrationDate}
                            maxDate={new Date()}
                            showDisabledMonthNavigation
                            required
                        />
                    </div>
                </div>

                <div className="card__edit__input">
                    <p className="input__title"> Полное наименование ОС</p>
                    <input
                        className="current__input card__edit__input__element"
                        name="fullNameOrganCertification"
                        autoComplete="off"
                        type="text"
                        required
                        defaultValue={
                            currentOsSdcCard.full_name_organ_certification
                        }
                        style={
                            !errors?.fullNameOrganCertification
                                ? {}
                                : { border: '1px solid red' }
                        }
                        {...register('fullNameOrganCertification', {
                            required: true,
                            //    pattern: /[a-zA-Z]/,
                        })}
                    />
                    {/* {errors?.fullNameOrganCertification && (
                        <div className="error-message">
                            {errors?.fullNameOrganCertification?.message ||
                                'Адрес сайта указывается латинским буквами'}
                        </div>
                    )} */}
                </div>

                <div className="card__edit__input">
                    <p className="input__title"> Сокращенное наименование ОС</p>
                    <input
                        className="current__input card__edit__input__element"
                        name="shortNameOrganCertification"
                        autoComplete="off"
                        type="text"
                        required
                        defaultValue={
                            currentOsSdcCard.short_name_organ_certification
                        }
                        style={
                            !errors?.shortNameOrganCertification
                                ? {}
                                : { border: '1px solid red' }
                        }
                        {...register('shortNameOrganCertification', {
                            required: true,
                            //    pattern: /[a-zA-Z]/,
                        })}
                    />
                    {/* {errors?.shortNameOrganCertification && (
                        <div className="error-message">
                            {errors?.shortNameOrganCertification?.message ||
                                'Адрес сайта указывается латинским буквами'}
                        </div>
                    )} */}
                </div>

                <div className="card__edit__input">
                    <p className="input__title">Инн</p>
                    <input
                        className="current__input card__edit__input__element"
                        name="inn"
                        autoComplete="off"
                        type="text"
                        required
                        defaultValue={currentOsSdcCard.inn}
                        style={!errors?.inn ? {} : { border: '1px solid red' }}
                        {...register('inn', {
                            required: true,
                            //    pattern: /[a-zA-Z]/,
                        })}
                    />
                    {/* {errors?.inn && (
                        <div className="error-message">
                            {errors?.inn?.message ||
                                'Адрес сайта указывается латинским буквами'}
                        </div>
                    )} */}
                </div>

                <div className="card__edit__input">
                    <p className="input__title">Огрн</p>
                    <input
                        className="current__input card__edit__input__element"
                        name="ogrn"
                        autoComplete="off"
                        type="text"
                        required
                        defaultValue={currentOsSdcCard.ogrn}
                        style={!errors?.ogrn ? {} : { border: '1px solid red' }}
                        {...register('ogrn', {
                            required: true,
                            //    pattern: /[a-zA-Z]/,
                        })}
                    />
                    {/* {errors?.ogrn && (
                        <div className="error-message">
                            {errors?.ogrn?.message ||
                                'Адрес сайта указывается латинским буквами'}
                        </div>
                    )} */}
                </div>

                <div className="card__edit__input">
                    <p className="input__title"> Имя руководителя</p>
                    <input
                        className="current__input card__edit__input__element"
                        name="managerName"
                        autoComplete="off"
                        type="text"
                        required
                        defaultValue={currentOsSdcCard.manager_name}
                        style={
                            !errors?.managerName
                                ? {}
                                : { border: '1px solid red' }
                        }
                        {...register('managerName', {
                            required: true,
                            //    pattern: /[a-zA-Z]/,
                        })}
                    />
                    {/* {errors?.managerName && (
                        <div className="error-message">
                            {errors?.managerName?.message ||
                                'Адрес сайта указывается латинским буквами'}
                        </div>
                    )} */}
                </div>

                <div className="card__edit__input">
                    <p className="input__title">Юридический адрес</p>
                    <input
                        className="current__input card__edit__input__element"
                        name="address"
                        autoComplete="off"
                        type="text"
                        required
                        defaultValue={currentOsSdcCard.address}
                        style={
                            !errors?.address ? {} : { border: '1px solid red' }
                        }
                        {...register('address', {
                            required: true,
                            //    pattern: /[a-zA-Z]/,
                        })}
                    />
                    {/* {errors?.address && (
                        <div className="error-message">
                            {errors?.address?.message ||
                                'Адрес сайта указывается латинским буквами'}
                        </div>
                    )} */}
                </div>

                <div className="card__edit__input">
                    <p className="input__title">Электронная почта</p>
                    <input
                        className="current__input card__edit__input__element"
                        name="email"
                        autoComplete="off"
                        type="text"
                        required
                        defaultValue={currentOsSdcCard.email}
                        style={
                            !errors?.email ? {} : { border: '1px solid red' }
                        }
                        {...register('email', {
                            required: true,
                            //    pattern: /[a-zA-Z]/,
                        })}
                    />
                    {/* {errors?.email && (
                        <div className="error-message">
                            {errors?.email?.message ||
                                'Адрес сайта указывается латинским буквами'}
                        </div>
                    )} */}
                </div>

                <div className="card__edit__input">
                    <p className="input__title">Сайт</p>
                    <input
                        className="current__input card__edit__input__element"
                        name="site"
                        autoComplete="off"
                        type="text"
                        required
                        defaultValue={currentOsSdcCard.site}
                        style={!errors?.site ? {} : { border: '1px solid red' }}
                        {...register('site', {
                            required: true,
                            //    pattern: /[a-zA-Z]/,
                        })}
                    />
                    {/* {errors?.site && (
                        <div className="error-message">
                            {errors?.site?.message ||
                                'Адрес сайта указывается латинским буквами'}
                        </div>
                    )} */}
                </div>

                <div className="card__edit__input">
                    <p className="input__title">Область распространения</p>
                    <input
                        className="current__input card__edit__input__element"
                        name="area"
                        autoComplete="off"
                        type="text"
                        required
                        defaultValue={currentOsSdcCard.area}
                        style={!errors?.area ? {} : { border: '1px solid red' }}
                        {...register('area', {
                            required: true,
                            //    pattern: /[a-zA-Z]/,
                        })}
                    />
                    {/* {errors?.area && (
                        <div className="error-message">
                            {errors?.area?.message ||
                                'Адрес сайта указывается латинским буквами'}
                        </div>
                    )} */}
                </div>

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
