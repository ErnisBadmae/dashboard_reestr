import DatePicker, { registerLocale, setDefaultLocale } from 'react-datepicker';
import ru from 'date-fns/locale/ru';
import { Controller } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import moment from 'moment';

import 'react-datepicker/dist/react-datepicker.css';

registerLocale('ru', ru);
setDefaultLocale('ru');

export function ExpertInputs({ control, register, errors, formType }) {
    const { currentExpertOs } = useSelector((state) => state.proposalTest);

    const [validDate, setValidDate] = useState(
        moment(currentExpertOs?.valid).toDate()
    );
    const [introductionDate, setIntroductionDate] = useState(
        moment(currentExpertOs?.introduction_date).toDate()
    );
    const [exclusionDate, setExclusionDate] = useState(
        moment(currentExpertOs?.exclusion_date).toDate()
    );
    const [educationDate, setEducationDate] = useState(
        moment(currentExpertOs?.education_date).toDate()
    );

    const inputs = [
        {
            id: 1,
            title: 'Выберите тип контракта',
            name: 'contractType',
            type: 'options',
            required: true,
            pattern: /[а-яА-ЯёЁ]/,
            minLength: 0,
            mask: null,
            errorMessage: 'Выберите тип',
            selectValue1: 'трудовой договор',
            selectValue2: 'проектная занятость',
            defaultValue: currentExpertOs?.contract_type?.title,
        },
        {
            id: 2,
            title: 'Тип образования',
            name: 'educationType',
            type: 'options',
            required: true,
            pattern: /[а-яА-ЯёЁ]/,
            minLength: 0,
            mask: null,
            errorMessage: 'Выберите тип',
            selectValue1: 'Высшее',
            selectValue2: 'Среднее',
            defaultValue: currentExpertOs?.education_type?.title,
        },
        {
            id: 3,
            title: 'Имя эксперта',
            name: 'expertName',
            type: 'text',
            required: true,
            pattern: /[а-яА-ЯёЁ]/,
            minLength: 0,
            mask: null,
            errorMessage: 'Имя должно быть на кириллице',
            defaultValue: currentExpertOs?.expert_name,
        },
        {
            id: 4,
            title: 'Номер сертификата',
            name: 'certificateNumber',
            type: 'text',
            required: true,
            pattern: /^\d+$/,
            minLength: {
                value: 7,
                message: 'Вы вводите некорректное количество цифр',
            },
            mask: null,
            errorMessage: 'номер должен состоять только из цифр',
            defaultValue: currentExpertOs?.certificate_number,
        },
        {
            id: 5,
            title: 'Дата регистрации',
            name: 'valid',
            type: 'date',
            required: true,
            pattern: null,
            minLength: 0,
            mask: null,
            errorMessage: 'Полное наименование должно быть на кириллице',
            defaultValue: validDate,
            setData: (data) => {
                setValidDate(data);
            },
        },
        {
            id: 6,
            title: 'Область распространения',
            name: 'area',
            type: 'text',
            required: true,
            pattern: /[а-яА-ЯёЁ]/,
            minLength: 0,
            mask: null,
            errorMessage: 'Введите данные на кириллице',
            defaultValue: currentExpertOs?.area,
        },
        {
            id: 7,
            title: 'Опыт',
            name: 'experience',
            type: 'text',
            required: true,
            pattern: /[a-zA-Z]/,
            minLength: 0,
            mask: null,
            errorMessage: 'Введите данные на латинице',
            defaultValue: currentExpertOs?.experience,
        },
        {
            id: 8,
            title: 'Дата вступления',
            name: 'introductionDate',
            type: 'date',
            required: true,
            pattern: null,
            minLength: 0,
            mask: null,
            errorMessage: 'Полное наименование должно быть на кириллице',
            defaultValue: introductionDate,
            setData: (data) => {
                setIntroductionDate(data);
            },
        },
        {
            id: 9,
            title: 'Дата исключения',
            name: 'exclusionDate',
            type: 'date',
            required: true,
            pattern: null,
            minLength: 0,
            mask: null,
            errorMessage: 'Полное наименование должно быть на кириллице',
            defaultValue: exclusionDate,
            setData: (data) => {
                setExclusionDate(data);
            },
        },

        {
            id: 10,
            title: 'Снилс',
            name: 'snils',
            type: 'text',
            required: true,
            pattern: null,
            minLength: 0,
            mask: null,
            errorMessage: 'Полное наименование должно быть на кириллице',
            defaultValue: currentExpertOs?.snils,
        },
        {
            id: 11,
            title: 'Должность на момент исключения',
            name: 'exclusionPosition',
            type: 'text',
            required: true,
            pattern: null,
            minLength: 0,
            mask: null,
            errorMessage: 'Полное наименование должно быть на кириллице',
            defaultValue: currentExpertOs?.exclusion_position,
        },
        {
            id: 12,
            title: 'Образование',
            name: 'education',
            type: 'text',
            required: true,
            pattern: null,
            minLength: 0,
            mask: null,
            errorMessage: 'Полное наименование должно быть на кириллице',
            defaultValue: currentExpertOs?.education,
        },
        {
            id: 13,
            title: 'Специализация',
            name: 'educationSpeciality',
            type: 'text',
            required: true,
            pattern: null,
            minLength: 0,
            mask: null,
            errorMessage: 'Полное наименование должно быть на кириллице',
            defaultValue: currentExpertOs?.education_speciality,
        },
        {
            id: 14,
            title: 'Дата получения образования',
            name: 'educationDate',
            type: 'date',
            required: true,
            pattern: null,
            minLength: 0,
            mask: null,
            errorMessage: 'Полное наименование должно быть на кириллице',
            defaultValue: educationDate,
            setData: (data) => {
                setEducationDate(data);
            },
        },
        {
            id: 15,
            title: 'Образовательная организация',
            name: 'educationOrganization',
            type: 'text',
            required: true,
            pattern: null,
            minLength: 0,
            mask: null,
            errorMessage: 'Полное наименование должно быть на кириллице',
            defaultValue: currentExpertOs?.education_organization,
        },
    ];

    return (
        <>
            {inputs.map((inputEl) => {
                if (inputEl.type === 'options') {
                    return (
                        <div className="card__edit__input" key={inputEl.id}>
                            <p className="input__title">{inputEl.title}</p>
                            <select
                                className="current__input card__edit__input__element"
                                autoComplete="off"
                                name={inputEl.name}
                                type="options"
                                required
                                id={inputEl.name}
                                defaultValue={
                                    formType === 'editExpert'
                                        ? inputEl.defaultValue
                                        : null
                                }
                                style={
                                    !errors?.[`${inputEl.name}`]
                                        ? {}
                                        : { border: '1px solid red' }
                                }
                                {...register(`${inputEl.name}`, {
                                    required: true,
                                })}
                            >
                                <option value="1">
                                    {inputEl.selectValue1}
                                </option>
                                <option value="2">
                                    {inputEl.selectValue2}
                                </option>
                            </select>
                            {errors?.[`${inputEl.name}`] && (
                                <div className="error-message">
                                    {errors?.[`${inputEl.name}`]?.message ||
                                        'Выберите тип'}
                                </div>
                            )}
                        </div>
                    );
                }
                if (inputEl.type === 'date') {
                    return (
                        <div className="card__edit__input" key={inputEl.id}>
                            <p className="input__title">{inputEl.title}</p>
                            <div className="card__edit__input__element">
                                <Controller
                                    control={control}
                                    name={inputEl.name}
                                    defaultValue={
                                        formType === 'editExpert'
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
                            id={inputEl.name}
                            defaultValue={
                                formType === 'editExpert'
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
