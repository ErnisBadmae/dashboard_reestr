import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { getCurrentProposalSdc } from '../../../store/proposal/actions';
import { changeProposal } from '../../../store/proposal/actions';
import DatePicker, { registerLocale, setDefaultLocale } from 'react-datepicker';
import ru from 'date-fns/locale/ru';
import moment from 'moment';

import '../../FormSdc/form-sdc.scss';
import 'react-datepicker/dist/react-datepicker.css';

registerLocale('ru', ru);
setDefaultLocale('ru');

function EditProposalCard(props) {
    const navigate = useNavigate();
    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm();

    const dispatch = useDispatch();
    const { id } = useParams();

    const { currentProposalSdc } = useSelector((state) => state.proposalTest);
    const [registrationDate, setRegistrationDate] = useState(
        moment(currentProposalSdc?.registration_date).toDate()
    );

    useEffect(() => {
        dispatch(getCurrentProposalSdc(id));
    }, [id, dispatch]);

    useEffect(() => {
        setRegistrationDate(
            moment(currentProposalSdc?.registration_date).toDate()
        );
    }, [currentProposalSdc?.registration_date]);

    if (!currentProposalSdc) return null;

    const onSubmit = async (data) => {
        const body = {
            fullName: data.fullName,
            shortName: data.shortName,
            registrationNumber: data.registrationNumber,
            registrationDate: registrationDate.toISOString(),
            registrationCompany: data.registrationCompany,
            site: data.site,
            area: data.area,
            logo: data.logo,
        };

        dispatch(changeProposal({ id, body }));
    };

    return (
        <>
            <div className="login__title">
                Редактирование заявления {currentProposalSdc?.full_name}
            </div>
            <form
                className="declaration__form__request"
                onSubmit={handleSubmit(onSubmit)}
            >
                <div className="card__edit__input">
                    <p className="input__title">Полное наименование компании</p>
                    <input
                        className="current__input card__edit__input__element"
                        autoComplete="off"
                        name="fullName"
                        defaultValue={currentProposalSdc.full_name}
                        type="text"
                        required
                        autoFocus
                        id="fullName"
                        style={
                            !errors?.fullName ? {} : { border: '1px solid red' }
                        }
                        {...register('fullName', {
                            required: true,
                            pattern: /[а-яА-ЯёЁ]/,
                        })}
                    />
                    {errors?.fullName && (
                        <div className="error-message">
                            {errors?.fullName?.message ||
                                'Полное наименование должно быть на кириллице'}
                        </div>
                    )}
                </div>

                <div className="card__edit__input">
                    <p className="input__title">Сокращенное наименование </p>
                    <input
                        className="current__input card__edit__input__element"
                        name="shortName"
                        autoComplete="off"
                        type="text"
                        required
                        defaultValue={currentProposalSdc.short_name}
                        style={
                            !errors?.shortName
                                ? {}
                                : { border: '1px solid red' }
                        }
                        {...register('shortName', {
                            required: true,
                            pattern: /[а-яА-ЯёЁ]/,
                        })}
                    />
                    {errors?.shortName && (
                        <div className="error-message">
                            {errors?.shortName?.message ||
                                'Сокращенное наименование должно быть на кириллице'}
                        </div>
                    )}
                </div>

                <div className="card__edit__input">
                    <p className="input__title">Регистрационный номер</p>
                    <input
                        className="current__input card__edit__input__element"
                        name="registrationNumber"
                        autoComplete="off"
                        type="text"
                        required
                        defaultValue={currentProposalSdc.registration_number}
                        style={
                            !errors?.registrationNumber
                                ? {}
                                : { border: '1px solid red' }
                        }
                        {...register('registrationNumber', {
                            required: true,
                            pattern: /^\d+$/,
                            minLength: {
                                value: 7,
                                message:
                                    'Вы вводите некорректное количество цифр',
                            },
                        })}
                    />
                    {errors?.registrationNumber && (
                        <div className="error-message">
                            {errors?.registrationNumber?.message ||
                                'Регистрационный номер должен состоять только из цифр'}
                        </div>
                    )}
                </div>

                <div className="card__edit__input">
                    <p className="input__title">Дата регистрации</p>
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
                    <p className="input__title">Компания - регистратор</p>
                    <input
                        className="current__input card__edit__input__element"
                        name="registration_company"
                        autoComplete="off"
                        type="text"
                        required
                        defaultValue={currentProposalSdc.registration_company}
                        style={
                            !errors?.registration_company
                                ? {}
                                : { border: '1px solid red' }
                        }
                        {...register('registration_company', {
                            required: true,
                            pattern: /[а-яА-ЯёЁ]/,
                        })}
                    />
                    {errors?.registration_company && (
                        <div className="error-message">
                            {errors?.registration_company?.message ||
                                'Сокращенное наименование должно быть на кириллице'}
                        </div>
                    )}
                </div>

                <div className="card__edit__input">
                    <p className="input__title">Сайт</p>
                    <input
                        className="current__input card__edit__input__element"
                        name="site"
                        autoComplete="off"
                        type="text"
                        defaultValue={currentProposalSdc.site}
                        required
                        style={!errors?.site ? {} : { border: '1px solid red' }}
                        {...register('site', {
                            required: true,
                            pattern: /[a-zA-Z]/,
                        })}
                    />
                    {errors?.site && (
                        <div className="error-message">
                            {errors?.site?.message ||
                                'Адрес сайта указывается латинским буквами'}
                        </div>
                    )}
                </div>

                <div className="card__edit__input">
                    <p className="input__title">Область</p>
                    <input
                        className="current__input card__edit__input__element"
                        name="area"
                        autoComplete="off"
                        type="text"
                        required
                        defaultValue={currentProposalSdc.area}
                        style={!errors?.area ? {} : { border: '1px solid red' }}
                        {...register('area', {
                            required: true,
                            pattern: /[а-яА-ЯёЁ]/,
                        })}
                    />
                    {errors?.area && (
                        <div className="error-message">
                            {errors?.area?.message ||
                                'Укажите корректные данные'}
                        </div>
                    )}
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

export default EditProposalCard;
