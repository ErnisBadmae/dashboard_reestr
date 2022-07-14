import DatePicker, { registerLocale, setDefaultLocale } from 'react-datepicker';
import { Controller } from 'react-hook-form';
import ru from 'date-fns/locale/ru';

import 'react-datepicker/dist/react-datepicker.css';

registerLocale('ru', ru);
setDefaultLocale('ru');

export function SdcInputs({ control, register, errors, navigate }) {
    const inputs = [
        {
            title: 'Полное наименование компании',
            name: 'fullName',
            type: 'text',
            required: true,
            pattern: /[а-яА-ЯёЁ]/,
            minLength: 0,
            mask: null,
            errorMessage: 'Полное наименование должно быть на кириллице',
        },
        {
            title: 'Сокращенное наименование',
            name: 'shortName',
            type: 'text',
            required: true,
            pattern: /[а-яА-ЯёЁ]/,
            minLength: 0,
            mask: null,
            errorMessage: 'Полное наименование должно быть на кириллице',
        },
        {
            title: 'Регистрационный номер',
            name: 'registrationNumber',
            type: 'text',
            required: true,
            pattern: /[а-яА-ЯёЁ]/,
            minLength: 0,
            mask: null,
            errorMessage: 'Сокращенное наименование должно быть на кириллице',
        },
        {
            title: 'Компания -регистратор',
            name: 'registrationCompany',
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
        },
        {
            title: 'Область распространения',
            name: 'area',
            type: 'text',
            required: true,
            pattern: null,
            minLength: 0,
            mask: null,
            errorMessage: 'Введите данные на кириллице',
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
        },
        {
            title: 'Сайт',
            name: 'site',
            type: 'text',
            required: true,
            pattern: /^\d+$/,
            minLength: {
                value: 4,
                message: 'Вы вводите некорректное значение',
            },
            mask: null,
            errorMessage: 'Введите данные на латинице',
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
            })}
        </>
    );
}
