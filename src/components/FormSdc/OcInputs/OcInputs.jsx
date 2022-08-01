import { useEffect } from 'react';
import { Controller } from 'react-hook-form';
import InputMask from 'react-input-mask';
import { useParams } from 'react-router-dom';
import DatePicker, { registerLocale, setDefaultLocale } from 'react-datepicker';
import ru from 'date-fns/locale/ru';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import moment from 'moment';
import { getCurrentProposalOs } from '../../../store/proposal/actions';

import 'react-datepicker/dist/react-datepicker.css';

registerLocale('ru', ru);
setDefaultLocale('ru');

export function OcInputs({ control, register, errors, formType }) {
    const { currentProposalOs } = useSelector((state) => state.proposalTest);

    const [registrationDate, setRegistrationDate] = useState(
        moment(
            currentProposalOs?.request_oc_organ_certification?.certificate_date
        ).toDate()
    );
    const dispatch = useDispatch();
    const { proposalOsId } = useParams();
    useEffect(() => {
        dispatch(getCurrentProposalOs(proposalOsId));
    }, [proposalOsId, dispatch]);

    const inputs = [
        {
            title: 'Полное наименование компании',
            name: 'fullNameCompany',
            type: 'text',
            required: true,
            pattern: /[а-яА-ЯёЁ]/,
            minLength: 0,
            mask: null,
            errorMessage: 'Полное наименование должно быть на кириллице',
            defaultValue:
                currentProposalOs?.request_oc_organ_certification
                    ?.full_name_company,
        },
        {
            title: 'Полное наименование ОС',
            name: 'fullNameOrganCertification',
            type: 'text',
            required: true,
            pattern: /[а-яА-ЯёЁ]/,
            minLength: 0,
            mask: null,
            errorMessage: 'Полное наименование должно быть на кириллице',
            defaultValue:
                currentProposalOs?.request_oc_organ_certification
                    ?.full_name_organ_certification,
        },
        {
            title: 'Сокращенное наименование ОС',
            name: 'shortNameOrganCertification',
            type: 'text',
            required: true,
            pattern: /[а-яА-ЯёЁ]/,
            minLength: 0,
            mask: null,
            errorMessage: 'Сокращенное наименование должно быть на кириллице',
            defaultValue:
                currentProposalOs?.request_oc_organ_certification
                    ?.short_name_organ_certification,
        },
        {
            title: 'Номер аттестата аккредитации',
            name: 'certificateNumber',
            type: 'text',
            required: true,
            pattern: /^\d+$/,
            minLength: {
                value: 7,
                message: 'Вы вводите некорректное количество цифр',
            },
            mask: null,
            errorMessage:
                'Регистрационный номер должен состоять только из цифр',
            defaultValue:
                currentProposalOs?.request_oc_organ_certification
                    ?.certificate_number,
        },
        {
            title: 'Дата решения об аккредитации',
            name: 'certificateDate',
            type: 'text',
            required: true,
            pattern: null,
            minLength: 0,
            mask: null,
            errorMessage: 'Введите данные',
            defaultValue: registrationDate,
            setData: (data) => {
                setRegistrationDate(data);
            },
        },
        {
            title: 'Номер решения об аккредитации',
            name: 'decisionNumber',
            type: 'text',
            required: true,
            pattern: /^\d+$/,
            minLength: {
                value: 4,
                message: 'Вы вводите некорректное количество цифр',
            },
            mask: null,
            errorMessage: 'Вы вводите некорректное количество цифр',
            defaultValue:
                currentProposalOs?.request_oc_organ_certification
                    ?.decision_number,
        },
        {
            title: 'Телефон',
            name: 'phone',
            type: 'text',
            required: true,
            pattern: null,
            minLength: 0,
            mask: '+7 (999) 999-99-99',
            errorMessage: 'Введите корректный номер телефона',
            defaultValue:
                currentProposalOs?.request_oc_organ_certification?.phone,
        },
        {
            title: 'ИНН',
            name: 'inn',
            type: 'text',
            required: true,
            pattern: /^\d+$/,
            minLength: {
                value: 7,
                message: 'Вы вводите некорректное количество цифр',
            },
            mask: null,
            errorMessage: 'Ввод возможен только цифр',
            defaultValue:
                currentProposalOs?.request_oc_organ_certification?.inn,
        },
        {
            title: 'ОГРН',
            name: 'ogrn',
            type: 'text',
            required: true,
            pattern: /^\d+$/,
            minLength: {
                value: 7,
                message: 'Вы вводите некорректное количество цифр',
            },
            mask: null,
            errorMessage: 'Ввод возможен только цифр',
            defaultValue:
                currentProposalOs?.request_oc_organ_certification?.ogrn,
        },
        {
            title: 'Данные руководителя',
            name: 'managerName',
            type: 'text',
            required: true,
            pattern: /[а-яА-ЯёЁ]/,
            minLength: 0,
            mask: null,
            errorMessage: 'Введите данные на кириллице',
            defaultValue:
                currentProposalOs?.request_oc_organ_certification?.manager_name,
        },
        {
            title: 'Адрес компании',
            name: 'address',
            type: 'text',
            required: true,
            pattern: /[а-яА-ЯёЁ]/,
            minLength: 0,
            mask: null,
            errorMessage: 'Введите данные на кириллице',
            defaultValue:
                currentProposalOs?.request_oc_organ_certification?.address,
        },
        {
            title: 'Электронная почта',
            name: 'email',
            type: 'text',
            required: true,
            pattern:
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            minLength: 0,
            mask: null,
            errorMessage: 'Введите корректную почту',
            defaultValue:
                currentProposalOs?.request_oc_organ_certification?.email,
        },
        {
            title: 'Сайт',
            name: 'site',
            type: 'text',
            required: true,
            pattern: /[a-zA-Z]/,
            minLength: 0,
            mask: null,
            errorMessage: 'Введите данные на латинице',
            defaultValue:
                currentProposalOs?.request_oc_organ_certification?.site,
        },
        {
            title: 'Область распространения',
            name: 'area',
            type: 'text',
            required: true,
            pattern: /[а-яА-ЯёЁ]/,
            minLength: 0,
            mask: null,
            errorMessage: 'Введите данные на кириллице',
            defaultValue:
                currentProposalOs?.request_oc_organ_certification?.area,
        },
    ];

    return (
        <>
            {inputs.map((inputEl) => {
                if (inputEl.mask) {
                    return (
                        <div className="card__edit__input" key={inputEl.title}>
                            <p className="input__title">{inputEl.title}</p>

                            <Controller
                                render={({ field }) => {
                                    return (
                                        <InputMask
                                            {...field}
                                            style={
                                                !errors[`${inputEl.name}`]
                                                    ? {}
                                                    : {
                                                          border: '1px solid red',
                                                      }
                                            }
                                            className="current__input card__edit__input__element"
                                            mask={inputEl.mask}
                                        />
                                    );
                                }}
                                control={control}
                                name={inputEl.name}
                                defaultValue={
                                    formType === 'editOc'
                                        ? inputEl.defaultValue
                                        : ''
                                }
                                required={inputEl.required}
                                autoComplete="off"
                                type={inputEl.type}
                            />
                            {errors[`${inputEl.name}`] && (
                                <div className="error-message">
                                    {errors[`${inputEl.name}`].message ||
                                        'Вы вводите некорректное количество цифр'}
                                </div>
                            )}
                        </div>
                    );
                }
                if (inputEl.name === 'certificateDate') {
                    return (
                        <div className="card__edit__input" key={inputEl.name}>
                            <p className="input__title">{inputEl.title}</p>
                            <div className="card__edit__input__element">
                                <Controller
                                    control={control}
                                    name={inputEl.name}
                                    defaultValue={
                                        formType === 'editOc'
                                            ? inputEl.defaultValue
                                            : ''
                                    }
                                    render={({ field }) => (
                                        <DatePicker
                                            dateFormat="dd/MM/yyyy"
                                            className="current__input date"
                                            placeholderText="выберите дату"
                                            onChange={(e) => field.onChange(e)}
                                            selected={field.value}
                                            maxDate={new Date()}
                                            showDisabledMonthNavigation
                                            peekNextMonth
                                            showMonthDropdown
                                            showYearDropdown
                                            dropdownMode="select"
                                            required={inputEl.required}
                                        />
                                    )}
                                />
                            </div>
                        </div>
                    );
                }
                return (
                    <div className="card__edit__input">
                        <p className="input__title">{inputEl.title}</p>
                        <input
                            className="current__input card__edit__input__element"
                            autoComplete="off"
                            name={inputEl.name}
                            type="text"
                            required
                            autoFocus
                            id={inputEl.name}
                            defaultValue={
                                formType === 'editOc'
                                    ? inputEl.defaultValue
                                    : ''
                            }
                            style={
                                !errors[`${inputEl.name}`]
                                    ? {}
                                    : { border: '1px solid red' }
                            }
                            {...register(`${inputEl.name}`, {
                                required: true,
                                pattern: inputEl.pattern,
                                minLength: inputEl.minLength,
                            })}
                        />
                        {errors[`${inputEl.name}`] && (
                            <div className="error-message">
                                {errors[`${inputEl.name}`]?.message ||
                                    inputEl.errorMessage}
                            </div>
                        )}
                    </div>
                );
            })}
        </>
    );
}
