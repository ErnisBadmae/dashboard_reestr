// import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import axios from 'axios';

import '../../pages/register/registr.scss';
import { postSdcRequest } from '../../store/proposal/actions';
// import { createSdcProposal } from '../../store/proposal/proposalSlice';
import { useNavigate } from 'react-router-dom';
import { FileUploadInput } from '../FileUploadInput/FileUploadInput';
import { useForm, Controller } from 'react-hook-form';
import DatePicker, { registerLocale, setDefaultLocale } from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';
import ru from 'date-fns/locale/ru';
import './form-sdc.scss';

registerLocale('ru', ru);
setDefaultLocale('ru');

function FormSdc(props) {
    const navigate = useNavigate();

    const {
        register,
        control,
        formState: { errors },
        handleSubmit,
    } = useForm();

    const dispatch = useDispatch();

    const formHandler = (data) => {
        const declarationSdsData = {
            fullName: data.fullName,
            shortName: data.shortName,
            registrationNumber: data.registrationNumber,
            registrationDate: data.registrationDate.toLocaleDateString('en-CA'),
            registrationCompany: data.registrationCompany,
            area: data.area,
            myFile: data.myFile,
        };
        //    console.log(declarationSdsData, 'declarationSdsData');
        dispatch(postSdcRequest(declarationSdsData))
            .unwrap()
            .then(({ id }) => navigate(`/request_sdc/${id}`));

        //todo: переделать
    };

    return (
        <>
            <div className="login__title">Подача Заявления</div>
            <form
                onSubmit={handleSubmit(formHandler)}
                className="declaration__form__request"
            >
                <div className="card__edit__input">
                    {errors?.fullName && (
                        <div className="error-message">
                            {errors?.fullName?.message ||
                                'Полное наименование должно быть на кириллице'}
                        </div>
                    )}
                    <p>Полное наименование </p>
                    <input
                        className="current__input card__edit__input__element"
                        autoComplete="off"
                        name="fullName"
                        type="text"
                        required
                        autoFocus
                        id="fullName"
                        {...register('fullName', {
                            required: true,
                            pattern: /[а-яА-ЯёЁ]/,
                        })}
                    />
                </div>
                <div>
                    <FileUploadInput
                        className="current__input card__edit__input__element"
                        multiple
                        extensions={['.jpg', '.png']}
                        name="myFile"
                        id="myFile"
                    />
                    <div>Hello</div>
                </div>
                <div className="card__edit__input">
                    {errors?.shortName && (
                        <div className="error-message">
                            {errors?.shortName?.message ||
                                'Сокращенное наименование должно быть на кириллице'}
                        </div>
                    )}
                    <p>Сокращенное наименование </p>
                    <input
                        className="current__input card__edit__input__element"
                        name="shortName"
                        autoComplete="off"
                        type="text"
                        required
                        {...register('shortName', {
                            required: true,
                            pattern: /[а-яА-ЯёЁ]/,
                        })}
                    />
                </div>
                <div className="card__edit__input">
                    {errors?.registrationNumber && (
                        <div className="error-message">
                            {errors?.registrationNumber?.message ||
                                'Регистрационный номер должен состоять только из цифр'}
                        </div>
                    )}
                    <p>Регистрационный номер</p>
                    <input
                        className="current__input card__edit__input__element"
                        name="registrationNumber"
                        autoComplete="off"
                        type="text"
                        required
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
                </div>
                <div className="card__edit__input">
                    <p>Дата регистрации</p>
                    <div className="card__edit__input__element">
                        <Controller
                            control={control}
                            name="registrationDate"
                            render={({ field }) => (
                                <DatePicker
                                    className="current__input date"
                                    placeholderText="выберите дату"
                                    onChange={(e) => field.onChange(e)}
                                    selected={field.value}
                                    maxDate={new Date()}
                                    showDisabledMonthNavigation
                                />
                            )}
                        />
                    </div>
                </div>
                <div className="card__edit__input">
                    {errors?.registrationCompany && (
                        <div className="error-message">
                            {errors?.registrationCompany?.message ||
                                'Введите данные на кириллице'}
                        </div>
                    )}
                    <p>Держатель</p>
                    <input
                        className="current__input card__edit__input__element"
                        name="registrationCompany"
                        autoComplete="off"
                        type="text"
                        required
                        {...register('registrationCompany', {
                            required: true,
                            pattern: /[а-яА-ЯёЁ]/,
                        })}
                    />
                </div>

                <div className="card__edit__input">
                    {errors?.area && (
                        <div className="error-message">
                            {errors?.area?.message ||
                                'Введите данные на кириллице'}
                        </div>
                    )}
                    <p>Область распространения</p>
                    <input
                        className="current__input card__edit__input__element"
                        name="area"
                        autoComplete="off"
                        type="text"
                        required
                        {...register('area', {
                            required: true,
                            pattern: /[а-яА-ЯёЁ]/,
                            minLength: {
                                value: 4,
                                message: 'Введите корректные данные',
                            },
                        })}
                    />
                </div>
                <div className="declaration__buttons">
                    <button
                        className="btn__login declaration__btn"
                        //     disabled={!isValid}
                        onClick={() => navigate(-1)}
                    >
                        Отменить
                    </button>
                    <button
                        className="btn__login declaration__btn"
                        type="submit"
                        //     disabled={!isValid}
                    >
                        Отправить
                    </button>
                </div>
            </form>
        </>
    );
}

export default FormSdc;
