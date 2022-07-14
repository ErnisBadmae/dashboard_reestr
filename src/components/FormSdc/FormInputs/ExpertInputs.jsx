import DatePicker, { registerLocale, setDefaultLocale } from 'react-datepicker';
import ru from 'date-fns/locale/ru';
import 'react-datepicker/dist/react-datepicker.css';
import { Controller } from 'react-hook-form';

registerLocale('ru', ru);
setDefaultLocale('ru');

export function ExpertInputs({ control, register, errors, navigate }) {
    const inputs = [
        {
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
        },
        {
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
        },
        {
            title: 'Имя эксперта',
            name: 'expertName',
            type: 'text',
            required: true,
            pattern: /[а-яА-ЯёЁ]/,
            minLength: 0,
            mask: null,
            errorMessage: 'Имя должно быть на кириллице',
        },
        {
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
        },
        {
            title: 'Дата регистрации',
            name: 'valid',
            type: 'date',
            required: true,
            pattern: null,
            minLength: 0,
            mask: null,
            errorMessage: 'Полное наименование должно быть на кириллице',
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
        },
        {
            title: 'Опыт',
            name: 'experience',
            type: 'text',
            required: true,
            pattern: /[a-zA-Z]/,
            minLength: 0,
            mask: null,
            errorMessage: 'Введите данные на латинице',
        },
        {
            title: 'Дата вступления',
            name: 'introductionDate',
            type: 'date',
            required: true,
            pattern: null,
            minLength: 0,
            mask: null,
            errorMessage: 'Полное наименование должно быть на кириллице',
        },
        {
            title: 'Дата исключения',
            name: 'exclusionDate',
            type: 'date',
            required: true,
            pattern: null,
            minLength: 0,
            mask: null,
            errorMessage: 'Полное наименование должно быть на кириллице',
        },

        {
            title: 'Снилс',
            name: 'snils',
            type: 'text',
            required: true,
            pattern: null,
            minLength: 0,
            mask: null,
            errorMessage: 'Полное наименование должно быть на кириллице',
        },
        {
            title: 'Должность на момент исключения',
            name: 'exclusionPosition',
            type: 'text',
            required: true,
            pattern: null,
            minLength: 0,
            mask: null,
            errorMessage: 'Полное наименование должно быть на кириллице',
        },
        {
            title: 'Образование',
            name: 'education',
            type: 'text',
            required: true,
            pattern: null,
            minLength: 0,
            mask: null,
            errorMessage: 'Полное наименование должно быть на кириллице',
        },
        {
            title: 'Специализация',
            name: 'educationSpeciality',
            type: 'text',
            required: true,
            pattern: null,
            minLength: 0,
            mask: null,
            errorMessage: 'Полное наименование должно быть на кириллице',
        },
        {
            title: 'Дата получения образования',
            name: 'educationDate',
            type: 'date',
            required: true,
            pattern: null,
            minLength: 0,
            mask: null,
            errorMessage: 'Полное наименование должно быть на кириллице',
        },
        {
            title: 'Образовательная организация',
            name: 'educationOrganization',
            type: 'text',
            required: true,
            pattern: null,
            minLength: 0,
            mask: null,
            errorMessage: 'Полное наименование должно быть на кириллице',
        },
    ];

    return (
        <>
            {inputs.map((inputEl) => {
                if (inputEl.type === 'options') {
                    return (
                        <div className="card__edit__input">
                            <p className="input__title">{inputEl.title}</p>
                            <select
                                className="current__input card__edit__input__element"
                                autoComplete="off"
                                name={inputEl.name}
                                type="options"
                                required
                                id={inputEl.name}
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
                        <div className="card__edit__input">
                            <p className="input__title">{inputEl.title}</p>
                            <div className="card__edit__input__element">
                                <Controller
                                    control={control}
                                    name={inputEl.name}
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
