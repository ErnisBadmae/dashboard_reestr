import DatePicker, { registerLocale, setDefaultLocale } from 'react-datepicker';
import ru from 'date-fns/locale/ru';
import { Controller } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import InputMask from 'react-input-mask';
import moment from 'moment';

import 'react-datepicker/dist/react-datepicker.css';

registerLocale('ru', ru);
setDefaultLocale('ru');

export function HolderInputs({ control, register, errors, formType }) {
    const { currentHolder } = useSelector((state) => state.proposalTest);

    const [registrationDate, setRegistrationDate] = useState(
        moment(currentHolder?.registration_date).toDate()
    );
    const [exclusionDate, setExclusionDate] = useState(
        moment(currentHolder?.exclusion_date).toDate()
    );
    const inputs = [
        {
            id: 1,
            title: 'Полное наименование организации',
            name: 'fullName',
            type: 'text',
            required: true,
            pattern: /[а-яА-ЯёЁ]/,
            minLength: 0,
            mask: null,
            errorMessage: 'Полное наименование должно быть на кириллице',
            defaultValue: currentHolder?.full_name,
        },
        {
            id: 2,
            title: 'Сокращенное наименование',
            name: 'shortName',
            type: 'text',
            required: true,
            pattern: /[а-яА-ЯёЁ]/,
            minLength: 0,
            mask: null,
            errorMessage: 'Сокращенное наименование должно быть на кириллице',
            defaultValue: currentHolder?.short_name,
        },
        {
            id: 3,
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
            defaultValue: currentHolder?.inn,
        },
        {
            id: 4,
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
            defaultValue: currentHolder?.ogrn,
        },

        //убрать?
        {
            id: 5,
            title: 'Регистрационный номер',
            name: 'registrationNumber',
            type: 'text',
            required: true,
            pattern: null,
            minLength: {
                value: 7,
                message: 'Вы вводите некорректное количество цифр',
            },
            mask: null,
            errorMessage: 'Вы вводите некорректное количество цифр',
            defaultValue: currentHolder?.registration_number,
        },

        //убрать?
        {
            id: 6,
            title: 'Дата регистрации (в реестре Росстандата)',
            name: 'registrationDate',
            type: 'date',
            required: true,
            minLength: 0,
            mask: null,
            errorMessage: 'Введите данные',
            defaultValue: registrationDate,
            setData: (data) => {
                setRegistrationDate(data);
            },
        },

        //убрать?
        {
            id: 7,
            title: 'Дата исключения',
            name: 'exclusionDate',
            type: 'date',
            required: true,
            pattern: null,
            minLength: 0,
            mask: null,
            errorMessage: 'Введите данные',
            defaultValue: exclusionDate,
            setData: (data) => {
                setExclusionDate(data);
            },
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
            defaultValue: currentHolder?.manager_name,
        },

        {
            id: 10,
            title: 'Должность руководителя',
            name: 'managerPosition',
            type: 'text',
            required: true,
            pattern: /[а-яА-ЯёЁ]/,
            minLength: 0,
            mask: null,
            errorMessage: 'Введите данные на кириллице',
            defaultValue: currentHolder?.manager_position,
        },
        {
            id: 11,
            title: 'Юридический адрес',
            name: 'address',
            type: 'text',
            required: true,
            pattern: /[а-яА-ЯёЁ]/,
            minLength: 0,
            mask: null,
            errorMessage: 'Введите данные на кириллице',
            defaultValue: currentHolder?.address,
        },
        {
            id: 12,
            title: 'Телефон',
            name: 'phone',
            type: 'text',
            required: true,
            pattern: null,
            minLength: 0,
            mask: '+7 (999) 999-99-99',
            errorMessage: 'Введите данные',
            defaultValue: currentHolder?.phone,
        },
        {
            id: 13,
            title: 'Электронная почта',
            name: 'email',
            type: 'text',
            required: true,
            pattern:
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            minLength: 0,
            mask: null,
            errorMessage: 'Введите корректные данные',
            defaultValue: currentHolder?.email,
        },
        {
            id: 14,
            title: 'Сайт',
            name: 'site',
            type: 'text',
            required: true,
            pattern: /[a-zA-Z]/,
            minLength: 0,
            mask: null,
            errorMessage: 'Введите данные на латинице',
            defaultValue: currentHolder?.site,
        },
    ];

    return (
        <>
            {inputs.map((inputEl) => {
                if (inputEl.type === 'date') {
                    return (
                        <div className="card__edit__input" key={inputEl.id}>
                            <p className="input__title">{inputEl.title}</p>
                            <div className="card__edit__input__element">
                                <Controller
                                    control={control}
                                    name={inputEl.name}
                                    defaultValue={
                                        formType === 'editHolder'
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
                                    formType === 'editHolder'
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
                    <div className="card__edit__input" key={inputEl.id}>
                        <p className="input__title">{inputEl.title}</p>
                        <input
                            className="current__input card__edit__input__element"
                            autoComplete="off"
                            name={inputEl.name}
                            type="text"
                            required
                            autoFocus
                            defaultValue={
                                formType === 'editHolder'
                                    ? inputEl.defaultValue
                                    : null
                            }
                            id={inputEl.name}
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
