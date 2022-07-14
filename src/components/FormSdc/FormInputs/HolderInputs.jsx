import DatePicker, { registerLocale, setDefaultLocale } from 'react-datepicker';
import ru from 'date-fns/locale/ru';
import 'react-datepicker/dist/react-datepicker.css';
import { Controller } from 'react-hook-form';

registerLocale('ru', ru);
setDefaultLocale('ru');

export function HolderInputs({ control, register, errors, navigate }) {
    const inputs = [
        {
            id: 1,
            title: 'Полное наименование СДС',
            name: 'fullName',
            type: 'text',
            required: true,
            pattern: /[а-яА-ЯёЁ]/,
            minLength: 0,
            mask: null,
            errorMessage:
                'Полное наименование должно быть на кириллицеВыберите тип',
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
        },
        {
            id: 4,
            title: 'Огрн',
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
        },
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
        },
        {
            id: 6,
            title: 'Дата регистрации (в реестре Росстандата)',
            name: 'registrationDate',
            type: 'date',
            required: true,
            minLength: 0,
            mask: null,
            errorMessage: 'Введите данные',
        },

        {
            id: 77,
            title: 'Дата исключения',
            name: 'exclusionDate',
            type: 'date',
            required: true,
            pattern: null,
            minLength: 0,
            mask: null,
            errorMessage: 'Введите данные',
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
        },
        {
            id: 9,
            title: 'Область распространения системы (объекты сертификации)',
            name: 'area',
            type: 'text',
            required: true,
            pattern: /[а-яА-ЯёЁ]/,
            minLength: 0,
            mask: null,
            errorMessage: 'Введите данные на кириллице',
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
        },
        {
            id: 12,
            title: 'Телефон',
            name: 'phone',
            type: 'text',
            required: true,
            pattern: null,
            minLength: 0,
            mask: null,
            errorMessage: 'Полное наименование должно быть на кириллице',
        },
        {
            id: 13,
            title: 'Электронная почта',
            name: 'email',
            type: 'text',
            required: true,
            pattern: null,
            minLength: 0,
            mask: null,
            errorMessage: 'Полное наименование должно быть на кириллице',
        },
        {
            id: 14,
            title: 'Сайт',
            name: 'site',
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
                if (inputEl.type === 'date') {
                    return (
                        <div className="card__edit__input" key={inputEl.id}>
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
