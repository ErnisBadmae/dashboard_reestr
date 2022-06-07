import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import axios from 'axios';
import '../../pages/register/registr.scss';
import './form-sdc.scss';
import { postSdcRequest } from '../../store/proposal/actions';
import { useNavigate } from 'react-router-dom';
import { FileUploadInput } from '../FileUploadInput/FileUploadInput';
import { useForm, Controller } from 'react-hook-form';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';

function FormSdc(props) {
    const [selectedDate, setSelectedDate] = useState(new Date());

    const {
        register,
        control,
        formState: { errors },
        handleSubmit,
    } = useForm();

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { id } = useSelector((state) => state.proposal.currentProposalSdc);

    const formHandler = (data) => {
        const declarationSdsData = {
            fullName: data.fullName,
            shortName: data.shortName,
            registrationNumber: data.registrationNumber,
            registrationDate: data.registrationDate,
            registrationCompany: data.registrationCompany,
            area: data.area,
            ReactDatepicker: data.ReactDatepicker,
            //   myFile,
        };
        console.log(declarationSdsData, 'declarationSdsData');
        //    dispatch(postSdcRequest(declarationSdsData));
        //    setTimeout(() => {
        //        navigate(`/request_sdc/${id}`);
        //    }, 200);
        //todo: переделать
    };

    return (
        <>
            <div className="login__title">Подача Заявления</div>
            <form
                onSubmit={handleSubmit(formHandler)}
                className="declaration__form"
            >
                <div className="group__input">
                    <div>
                        {errors?.fullName && (
                            <div className="error-message">
                                {errors?.fullName?.message ||
                                    'Полное наименование должно быть на кириллице, не должно содержать цифр и спецсимволов'}
                            </div>
                        )}
                        <p>Полное наименование </p>
                        <input
                            className="form__input"
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
                    {/* <div>
                        <FileUploadInput
                            multiple
                            extensions={['.jpg', '.png']}
                            name={'myFile'}
                            onChange={onChange}
                        />
                        <div>Hello</div>
                    </div> */}
                    <div>
                        {errors?.shortName && (
                            <div className="error-message">
                                {errors?.shortName?.message ||
                                    'Полное наименование должно быть на кириллице, не должно содержать цифр и спецсимволов'}
                            </div>
                        )}
                        <p>Сокращенное наименование </p>
                        <input
                            className="form__input"
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
                    <div>
                        {errors?.registrationNumber && (
                            <div className="error-message">
                                {errors?.registrationNumber?.message ||
                                    'Регистрационный номер должен состоять только из цифр'}
                            </div>
                        )}
                        <p>registrationNumber</p>
                        <input
                            className="form__input"
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
                        {errors?.registrationNumber && (
                            <div className="error-message">
                                {errors?.registrationNumber?.message ||
                                    'Введите корректные данные'}
                            </div>
                        )}
                    </div>
                    <div>
                        <p>registrationDate</p>
                        <Controller
                            control={control}
                            name="registrationDate"
                            render={({ field }) => (
                                <DatePicker
                                    className="form__input"
                                    required
                                    placeholderText="Select date"
                                    onChange={(e) => field.onChange(e)}
                                    selected={field.value}
                                />
                            )}
                        />
                    </div>
                    <div>
                        <p>registrationCompany</p>
                        <input
                            className="form__input"
                            name="registrationCompany"
                            autoComplete="off"
                            type="text"
                            required
                            {...register('registrationCompany', {
                                required: true,
                                minLength: {
                                    value: 4,
                                    message: 'Введите корректные данные',
                                },
                            })}
                        />
                        {errors?.registrationCompany && (
                            <div className="error-message">
                                {errors?.registrationCompany?.message ||
                                    'Введите корректные данные'}
                            </div>
                        )}
                    </div>

                    <div>
                        <p>area</p>
                        <input
                            className="form__input"
                            name="area"
                            autoComplete="off"
                            type="text"
                            required
                            {...register('area', {
                                required: true,
                                minLength: {
                                    value: 4,
                                    message: 'Введите корректные данные',
                                },
                            })}
                        />
                        {errors?.area && (
                            <div className="error-message">
                                {errors?.area?.message ||
                                    'Введите корректные данные'}
                            </div>
                        )}
                    </div>
                    <button
                        className="btn__login"
                        type="submit"
                        //     disabled={!isValid}
                    >
                        Отправить
                    </button>
                </div>
                <div></div>
            </form>
        </>
    );
}

export default FormSdc;
