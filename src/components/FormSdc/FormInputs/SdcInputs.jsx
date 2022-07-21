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

export function SdcInputs({ control, register, errors, navigate, formType }) {
    const { currentProposalSdc } = useSelector((state) => state.proposalTest);
    const [registrationDate, setRegistrationDate] = useState(
        moment(currentProposalSdc?.registration_date).toDate()
    );
    const inputs = [
        {
            title: 'Наименование системы сертификации',
            name: 'fullName',
            type: 'text',
            required: true,
            pattern: /[а-яА-ЯёЁ]/,
            minLength: 0,
            mask: null,
            errorMessage: 'Полное наименование должно быть на кириллице',
            defaultValue: currentProposalSdc?.full_name,
        },

        //удалить?
        {
            title: 'Сокращенное наименование',
            name: 'shortName',
            type: 'text',
            required: true,
            pattern: /[а-яА-ЯёЁ]/,
            minLength: 0,
            mask: null,
            errorMessage: 'Введите данные на кириллице',
            defaultValue: currentProposalSdc?.short_name,
        },

        {
            title: 'Регистрационный номер',
            name: 'registrationNumber',
            type: 'text',
            required: true,
            pattern: /^\d+$/,
            minLength: 0,
            mask: 'РОСС RU.99999.99***9',
            errorMessage: 'Введите только числа',
            defaultValue: currentProposalSdc?.registration_number,
        },
        {
            title: 'Организация, представившая систему на регистрацию',
            name: 'registrationCompany',
            type: 'text',
            required: true,
            pattern: /[а-яА-ЯёЁ]/,
            minLength: {
                value: 7,
                message: 'Вы вводите некорректное данные',
            },
            mask: null,
            errorMessage: 'Введите данные на кириллице',
            defaultValue: currentProposalSdc?.registration_company,
        },
        {
            title: 'Область распространения системы (объекты сертификации)',
            name: 'area',
            type: 'text',
            required: true,
            pattern: /[а-яА-ЯёЁ]/,
            minLength: 0,
            mask: null,
            errorMessage: 'Введите данные на кириллице',
            defaultValue: currentProposalSdc?.area,
        },
        {
            title: 'Дата регистрации',
            name: 'registrationDate',
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
