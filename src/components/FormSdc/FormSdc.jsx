import { useDispatch } from 'react-redux';

import { postSdcRequest } from '../../store/proposal/actions';
import { useNavigate } from 'react-router-dom';
// import { FileUploadInput } from '../FileUploadInput/FileUploadInput';
import { useForm, Controller } from 'react-hook-form';
import DatePicker, { registerLocale, setDefaultLocale } from 'react-datepicker';
import ru from 'date-fns/locale/ru';

import 'react-datepicker/dist/react-datepicker.css';
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

        dispatch(postSdcRequest(declarationSdsData))
            .unwrap()
            .then(({ id }) => navigate(`/request_sdc/${id}`));
    };

    return (
        <>
            <div className="login__title">Подача Заявления</div>
            <form
                onSubmit={handleSubmit(formHandler)}
                className="declaration__form__request"
            >
                <div className="card__edit__input">
                    <p className="input__title">Полное наименование </p>
                    <input
                        className="current__input card__edit__input__element"
                        autoComplete="off"
                        name="fullName"
                        type="text"
                        required
                        autoFocus
                        id="fullName"
                        style={
                            !errors?.fullName ? {} : { border: '1px solid red' }
                        }
                        {...register('fullName', {
                            required: true,
                            pattern: /[а-яА-ЯёЁ]/,
                        })}
                    />
                    {errors?.fullName && (
                        <div className="error-message">
                            {errors?.fullName?.message ||
                                'Полное наименование должно быть на кириллице'}
                        </div>
                    )}
                </div>
                {/* <div>
                    <FileUploadInput
                        className="current__input card__edit__input__element"
                        multiple
                        extensions={['.jpg', '.png']}
                        name="myFile"
                        id="myFile"
                    />
                    <div>Hello</div>
                </div> */}
                <div className="card__edit__input">
                    <p className="input__title">Сокращенное наименование </p>
                    <input
                        className="current__input card__edit__input__element"
                        name="shortName"
                        autoComplete="off"
                        type="text"
                        required
                        style={
                            !errors?.shortName
                                ? {}
                                : { border: '1px solid red' }
                        }
                        {...register('shortName', {
                            required: true,
                            pattern: /[а-яА-ЯёЁ]/,
                        })}
                    />
                    {errors?.shortName && (
                        <div className="error-message">
                            {errors?.shortName?.message ||
                                'Сокращенное наименование должно быть на кириллице'}
                        </div>
                    )}
                </div>
                <div className="card__edit__input">
                    <p className="input__title">Регистрационный номер</p>
                    <input
                        className="current__input card__edit__input__element"
                        name="registrationNumber"
                        autoComplete="off"
                        type="text"
                        required
                        style={
                            !errors?.registrationNumber
                                ? {}
                                : { border: '1px solid red' }
                        }
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
                                'Регистрационный номер должен состоять только из цифр'}
                        </div>
                    )}
                </div>
                <div className="card__edit__input">
                    <p className="input__title">Дата регистрации</p>
                    <div className="card__edit__input__element">
                        <Controller
                            control={control}
                            name="registrationDate"
                            render={({ field }) => (
                                <DatePicker
                                    dateFormat="dd/MM/yyyy"
                                    className="current__input date"
                                    placeholderText="выберите дату"
                                    onChange={(e) => field.onChange(e)}
                                    selected={field.value}
                                    maxDate={new Date()}
                                    showDisabledMonthNavigation
                                    required
                                />
                            )}
                        />
                    </div>
                </div>
                <div className="card__edit__input">
                    <p className="input__title">Держатель</p>
                    <input
                        className="current__input card__edit__input__element"
                        name="registrationCompany"
                        autoComplete="off"
                        type="text"
                        required
                        style={
                            !errors?.registrationCompany
                                ? {}
                                : { border: '1px solid red' }
                        }
                        {...register('registrationCompany', {
                            required: true,
                            pattern: /[а-яА-ЯёЁ]/,
                        })}
                    />
                    {errors?.registrationCompany && (
                        <div className="error-message">
                            {errors?.registrationCompany?.message ||
                                'Введите данные на кириллице'}
                        </div>
                    )}
                </div>

                <div className="card__edit__input">
                    <p className="input__title">Область распространения</p>
                    <input
                        className="current__input card__edit__input__element"
                        name="area"
                        autoComplete="off"
                        type="text"
                        required
                        style={!errors?.area ? {} : { border: '1px solid red' }}
                        {...register('area', {
                            required: true,
                            pattern: /[а-яА-ЯёЁ]/,
                            minLength: {
                                value: 4,
                                message: 'Введите корректные данные',
                            },
                        })}
                    />
                    {errors?.area && (
                        <div className="error-message">
                            {errors?.area?.message ||
                                'Введите данные на кириллице'}
                        </div>
                    )}
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
