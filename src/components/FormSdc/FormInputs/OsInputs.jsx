import DatePicker, { registerLocale, setDefaultLocale } from 'react-datepicker';
import { Controller } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import ru from 'date-fns/locale/ru';
import InputMask from 'react-input-mask';
import moment from 'moment';

import 'react-datepicker/dist/react-datepicker.css';

registerLocale('ru', ru);
setDefaultLocale('ru');

export function OsInputs({ control, register, errors, navigate, formType }) {
    const { currentProposalSdc } = useSelector((state) => state.proposalTest);
    const [certificateDate, setCertificateDate] = useState(
        moment(currentProposalSdc?.certificate_date).toDate()
    );
    const inputs = [
        {
            id: 0,
            title: 'Наименование компании',
            name: 'fullNameCompany',
            type: 'text',
            required: true,
            pattern: /[а-яА-ЯёЁ]/,
            minLength: 0,
            mask: null,
            errorMessage: 'Полное наименование должно быть на кириллице',
            defaultValue: currentProposalSdc?.full_name_company,
        },
        {
            id: 1,
            title: 'Наименование',
            name: 'fullNameOrganCertification',
            type: 'text',
            required: true,
            pattern: /[а-яА-ЯёЁ]/,
            minLength: 0,
            mask: null,
            errorMessage: 'Полное наименование должно быть на кириллице',
            defaultValue: currentProposalSdc?.full_name_organ_certification,
        },

        {
            id: 2,
            title: 'Сокращенное наименование',
            name: 'shortNameOrganCertification',
            type: 'text',
            required: true,
            pattern: /[а-яА-ЯёЁ]/,
            minLength: 0,
            mask: null,
            errorMessage: 'Введите данные на кириллице',
            defaultValue: currentProposalSdc?.short_name_organ_certification,
        },

        {
            id: 3,
            title: 'Номер сертификата',
            name: 'certificateNumber',
            type: 'text',
            required: true,
            pattern: /^\d+$/,
            minLength: 0,
            mask: 'РОСС RU.99999.99***9',
            errorMessage: 'Введите только числа',
            defaultValue: currentProposalSdc?.certificate_number,
        },
        {
            id: 4,
            title: 'Дата сертификации',
            name: 'certificateDate',
            type: 'text',
            required: true,
            pattern: null,
            minLength: 0,
            mask: null,
            errorMessage: 'Введите данные',
            defaultValue: certificateDate,
            setData: (data) => {
                setCertificateDate(data);
            },
        },
        {
            id: 5,
            title: 'Номер решения',
            name: 'decisionNumber',
            type: 'text',
            required: true,
            pattern: /^\d+$/,
            minLength: 0,
            mask: 'РОСС RU.99999.99***9',
            errorMessage: 'Введите только числа',
            defaultValue: currentProposalSdc?.decision_number,
        },

        {
            id: 6,
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
            errorMessage: 'номер должен состоять только из цифр',
            defaultValue: currentProposalSdc?.inn,
        },
        {
            id: 7,
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
            errorMessage: 'номер должен состоять только из цифр',
            defaultValue: currentProposalSdc?.ogrn,
        },
        {
            id: 8,
            title: 'Имя руководителя',
            name: 'managerName',
            type: 'text',
            required: true,
            pattern: /[а-яА-ЯёЁ]/,
            minLength: 0,
            mask: null,
            errorMessage: 'Введите данные на кириллице',
            defaultValue: currentProposalSdc?.manager_name,
        },
        {
            id: 9,
            title: 'Адрес',
            name: 'address',
            type: 'text',
            required: true,
            pattern: /[а-яА-ЯёЁ]/,
            minLength: 0,
            mask: null,
            errorMessage: 'Введите данные на кириллице',
            defaultValue: currentProposalSdc?.address,
        },
        {
            id: 10,
            title: 'Номер телефона',
            name: 'phone',
            type: 'text',
            required: true,
            pattern: null,
            minLength: 0,
            mask: '+7 (999) 999-99-99',
            errorMessage: 'Введите данные',
            defaultValue: currentProposalSdc?.phone,
        },
        {
            id: 11,
            title: 'E-mail',
            name: 'email',
            type: 'text',
            required: true,
            pattern:
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            minLength: 0,
            mask: null,
            errorMessage: 'Введите корректные данные',
            defaultValue: currentProposalSdc?.phone,
        },
        {
            id: 12,
            title: 'Сайт',
            name: 'site',
            type: 'text',
            required: true,
            pattern: /[a-zA-Z]/,
            minLength: {
                value: 4,
                message: 'Вы вводите некорректное значение',
            },
            mask: null,
            errorMessage: 'Введите данные на латинице',
            defaultValue: currentProposalSdc?.site,
        },
        {
            id: 13,
            title: 'Область распространения',
            name: 'area',
            type: 'text',
            required: true,
            pattern: /[а-яА-ЯёЁ]/,
            minLength: 0,
            mask: null,
            errorMessage: 'Введите данные на кириллице',
            defaultValue: currentProposalSdc?.area,
        },
    ];

    return (
        <>
            {inputs.map((inputEl) => {
                if (inputEl.name === 'registrationDate') {
                    return (
                        <div className="card__edit__input">
                            <p className="input__title">Дата регистрации</p>
                            <div className="card__edit__input__element">
                                <Controller
                                    control={control}
                                    name={inputEl.name}
                                    defaultValue={
                                        formType === 'editSdc'
                                            ? inputEl.defaultValue
                                            : null
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
                                            required={inputEl.required}
                                        />
                                    )}
                                />
                            </div>
                        </div>
                    );
                }
                if (inputEl.mask) {
                    return (
                        <div className="card__edit__input" key={inputEl.title}>
                            <p className="input__title">{inputEl.title}</p>

                            <Controller
                                render={({ field }) => {
                                    return (
                                        <InputMask
                                            {...field}
                                            formatChars={{
                                                9: '[0-9]',
                                                a: '[A-Za-z]',
                                                '*': '[А-Яа-яЁёA-Za-z]',
                                            }}
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
                                    formType === 'editSdc'
                                        ? inputEl.defaultValue
                                        : null
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
                                formType === 'editSdc'
                                    ? inputEl.defaultValue
                                    : null
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
