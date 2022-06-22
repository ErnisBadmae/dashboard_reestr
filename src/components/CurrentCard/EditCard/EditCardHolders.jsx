import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { getCurrentHolder } from '../../../store/proposal/actions';
import { changeHolder } from '../../../store/proposal/actions';
import DatePicker, { registerLocale, setDefaultLocale } from 'react-datepicker';
import ru from 'date-fns/locale/ru';
import { correctlyDate } from '../../../helpers/utils';
import moment from 'moment';

import '../../FormSdc/form-sdc.scss';
import 'react-datepicker/dist/react-datepicker.css';

registerLocale('ru', ru);
setDefaultLocale('ru');

function EditCardHolders(props) {
    const { id } = useParams();
    const navigate = useNavigate();
    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm();

    const dispatch = useDispatch();

    const { currentHolder } = useSelector((state) => state.proposalTest);

    const [registrationDate, setRegistrationDate] = useState(
        moment(currentHolder?.registration_date).toDate()
    );

    useEffect(() => {
        dispatch(getCurrentHolder(id));
    }, [id, dispatch]);

    useEffect(() => {
        setRegistrationDate(moment(currentHolder?.registration_date).toDate());
    }, [currentHolder?.registration_date]);

    if (!currentHolder) return null;

    const onSubmit = async (data) => {
        const body = {
            fullName: data.fullName,
            shortName: data.shortName,
            registrationNumber: data.registrationNumber,
            registrationDate: registrationDate.toISOString(),
            registrationCompany: data.registrationCompany,
            managerName: data.managerName,
            managerPosition: data.managerPosition,
            address: data.address,
            site: data.site,
            phone: data.phone,
            email: data.email,
            inn: data.inn,
            ogrn: data.ogrn,
        };

        dispatch(changeHolder({ id, body }));
    };

    return (
        <>
            <div className="login__title">
                Редактирование заявления {currentHolder?.full_name}
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
                        defaultValue={currentHolder.full_name}
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
                        defaultValue={currentHolder.short_name}
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
                        defaultValue={currentHolder.registration_number}
                        style={
                            !errors?.registrationNumber
                                ? {}
                                : { border: '1px solid red' }
                        }
                        {...register('registrationNumber', {
                            required: true,
                            pattern: /^\d+$/,
                            minLength: {
                                value: 5,
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
                    <p className="input__title">Сайт</p>
                    <input
                        className="current__input card__edit__input__element"
                        name="site"
                        autoComplete="off"
                        type="text"
                        defaultValue={currentHolder.site}
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
                    <p className="input__title"> Имя руководителя</p>
                    <input
                        className="current__input card__edit__input__element"
                        name="managerName"
                        autoComplete="off"
                        type="text"
                        required
                        defaultValue={currentHolder.manager_name}
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
                    <p className="input__title">Должность руководителя</p>
                    <input
                        className="current__input card__edit__input__element"
                        name="managerPosition"
                        autoComplete="off"
                        type="text"
                        required
                        defaultValue={currentHolder.manager_position}
                        style={
                            !errors?.managerPosition
                                ? {}
                                : { border: '1px solid red' }
                        }
                        {...register('managerPosition', {
                            required: true,
                            //    pattern: /[a-zA-Z]/,
                        })}
                    />
                    {/* {errors?.managerPosition && (
                        <div className="error-message">
                            {errors?.managerPosition?.message ||
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
                        defaultValue={currentHolder.inn}
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
                        defaultValue={currentHolder.ogrn}
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
                    <p className="input__title">Юридический адрес</p>
                    <input
                        className="current__input card__edit__input__element"
                        name="address"
                        autoComplete="off"
                        type="text"
                        required
                        defaultValue={currentHolder.address}
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

export default EditCardHolders;
