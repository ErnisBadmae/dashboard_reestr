import { useDispatch, useSelector } from 'react-redux';
import { postOrganSertificationSdc } from '../../store/proposal/actions';
import { useNavigate } from 'react-router-dom';
// import { FileUploadInput } from '../FileUploadInput/FileUploadInput';
import { useForm, Controller } from 'react-hook-form';
import DatePicker, { registerLocale, setDefaultLocale } from 'react-datepicker';
import ru from 'date-fns/locale/ru';

import { useState } from 'react';
// import RegisterSuccess from '../../pages/register/RegisterSuccess';

import './form-sdc.scss';
import 'react-datepicker/dist/react-datepicker.css';

registerLocale('ru', ru);
setDefaultLocale('ru');

function FormOsSdc(props) {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { id } = useSelector(
        (state) => state.proposalTest.currentProposalSdc
    );
    const {
        register,
        control,
        formState: { errors },
        handleSubmit,
    } = useForm();

    //     const [isRegisterSuccess, setIsRegisterSuccess] = useState(false);

    const formHandler = (data) => {
        const osSdsData = {
            fullNameCompany: data.fullNameCompany,
            fullNameOrganCertification: data.fullNameOrganCertification,
            shortNameOrganCertification: data.shortNameOrganCertification,
            certificateNumber: data.certificateNumber,
            certificateDate: data.certificateDate.toLocaleDateString('en-CA'),
            decisionNumber: data.decisionNumber,
            inn: data.inn,
            ogrn: data.ogrn,
            managerName: data.managerName,
            address: data.address,
            email: data.email,
            phone: data.phone,
            site: data.site,
            area: data.area,
        };

        dispatch(postOrganSertificationSdc({ id, osSdsData }));
        //    navigate(-1);
        // .unwrap()
        // .then(({ osId }) => {
        navigate(`/request_sdc/${id}`);
        // });
        //     setIsRegisterSuccess(true);
    };

    return (
        //     isRegisterSuccess ? (
        //         <RegisterSuccess
        //             text={'Ваше заявление успешно отредактировано.'}
        //             redirect={'/'}
        //             textRedirect={'На главную'}
        //         />
        //     ) : (
        <>
            <div className="login__title">Подача Заявления</div>
            <form
                onSubmit={handleSubmit(formHandler)}
                className="declaration__form__request"
            >
                <div className="card__edit__input">
                    <p className="input__title">Полное наименование компании</p>
                    <input
                        className="current__input card__edit__input__element"
                        autoComplete="off"
                        name="fullNameCompany"
                        type="text"
                        required
                        autoFocus
                        id="fullNameCompany"
                        style={
                            !errors?.fullNameCompany
                                ? {}
                                : { border: '1px solid red' }
                        }
                        {...register('fullNameCompany', {
                            required: true,
                            pattern: /[а-яА-ЯёЁ]/,
                        })}
                    />
                    {errors?.fullNameCompany && (
                        <div className="error-message">
                            {errors?.fullNameCompany?.message ||
                                'Полное наименование должно быть на кириллице'}
                        </div>
                    )}
                </div>

                <div className="card__edit__input">
                    <p className="input__title">Полное наименование ОС</p>
                    <input
                        className="current__input card__edit__input__element"
                        autoComplete="off"
                        name="fullNameOrganCertification"
                        type="text"
                        required
                        autoFocus
                        id="fullNameOrganCertification"
                        style={
                            !errors?.fullNameOrganCertification
                                ? {}
                                : { border: '1px solid red' }
                        }
                        {...register('fullNameOrganCertification', {
                            required: true,
                            pattern: /[а-яА-ЯёЁ]/,
                        })}
                    />
                    {errors?.fullNameOrganCertification && (
                        <div className="error-message">
                            {errors?.fullNameOrganCertification?.message ||
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
                        name="shortNameOrganCertification"
                        autoComplete="off"
                        type="text"
                        required
                        style={
                            !errors?.shortNameOrganCertification
                                ? {}
                                : { border: '1px solid red' }
                        }
                        {...register('shortNameOrganCertification', {
                            required: true,
                            pattern: /[а-яА-ЯёЁ]/,
                        })}
                    />
                    {errors?.shortNameOrganCertification && (
                        <div className="error-message">
                            {errors?.shortNameOrganCertification?.message ||
                                'Сокращенное наименование должно быть на кириллице'}
                        </div>
                    )}
                </div>

                <div className="card__edit__input">
                    <p className="input__title">Регистрационный номер</p>
                    <input
                        className="current__input card__edit__input__element"
                        name="certificateNumber"
                        autoComplete="off"
                        type="text"
                        required
                        style={
                            !errors?.certificateNumber
                                ? {}
                                : { border: '1px solid red' }
                        }
                        {...register('certificateNumber', {
                            required: true,
                            pattern: /^\d+$/,
                            minLength: {
                                value: 7,
                                message:
                                    'Вы вводите некорректное количество цифр',
                            },
                        })}
                    />
                    {errors?.certificateNumber && (
                        <div className="error-message">
                            {errors?.certificateNumber?.message ||
                                'Регистрационный номер должен состоять только из цифр'}
                        </div>
                    )}
                </div>

                <div className="card__edit__input">
                    <p className="input__title">Дата регистрации</p>
                    <div className="card__edit__input__element">
                        <Controller
                            control={control}
                            name="certificateDate"
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
                    <p className="input__title">Номер решения</p>
                    <input
                        className="current__input card__edit__input__element"
                        name="decisionNumber"
                        autoComplete="off"
                        type="text"
                        required
                        style={
                            !errors?.decisionNumber
                                ? {}
                                : { border: '1px solid red' }
                        }
                        {...register('decisionNumber', {
                            required: true,
                            pattern: /^\d+$/,
                            minLength: {
                                value: 4,
                                message:
                                    'Вы вводите некорректное количество цифр',
                            },
                        })}
                    />
                    {errors?.decisionNumber && (
                        <div className="error-message">
                            {errors?.decisionNumber?.message ||
                                'Вы вводите некорректное количество цифр'}
                        </div>
                    )}
                </div>

                <div className="card__edit__input">
                    <p className="input__title">ИНН</p>
                    <input
                        className="current__input card__edit__input__element"
                        name="inn"
                        autoComplete="off"
                        type="text"
                        required
                        style={!errors?.inn ? {} : { border: '1px solid red' }}
                        {...register('inn', {
                            required: true,
                            pattern: /^\d+$/,
                            minLength: {
                                value: 4,
                                message:
                                    'Вы вводите некорректное количество цифр',
                            },
                        })}
                    />
                    {errors?.inn && (
                        <div className="error-message">
                            {errors?.inn?.message ||
                                'Вы вводите некорректное количество цифр'}
                        </div>
                    )}
                </div>

                <div className="card__edit__input">
                    <p className="input__title">ОГРН</p>
                    <input
                        className="current__input card__edit__input__element"
                        name="ogrn"
                        autoComplete="off"
                        type="text"
                        required
                        style={!errors?.ogrn ? {} : { border: '1px solid red' }}
                        {...register('ogrn', {
                            required: true,
                            pattern: /^\d+$/,
                            minLength: {
                                value: 4,
                                message:
                                    'Вы вводите некорректное количество цифр',
                            },
                        })}
                    />
                    {errors?.ogrn && (
                        <div className="error-message">
                            {errors?.ogrn?.message ||
                                'Вы вводите некорректное количество цифр'}
                        </div>
                    )}
                </div>

                <div className="card__edit__input">
                    <p className="input__title">Имя руководителя</p>
                    <input
                        className="current__input card__edit__input__element"
                        name="managerName"
                        autoComplete="off"
                        type="text"
                        required
                        style={
                            !errors?.managerName
                                ? {}
                                : { border: '1px solid red' }
                        }
                        {...register('managerName', {
                            required: true,
                            pattern: /[а-яА-ЯёЁ]/,
                        })}
                    />
                    {errors?.managerName && (
                        <div className="error-message">
                            {errors?.managerName?.message ||
                                'Введите имя руководителя на кириллице'}
                        </div>
                    )}
                </div>

                <div className="card__edit__input">
                    <p className="input__title">Юридический адрес</p>
                    <input
                        className="current__input card__edit__input__element"
                        name="address"
                        autoComplete="off"
                        type="text"
                        required
                        style={
                            !errors?.address ? {} : { border: '1px solid red' }
                        }
                        {...register('address', {
                            required: true,
                            minLength: {
                                value: 5,
                                message: 'Вы вводите некорректный адрес',
                            },
                        })}
                    />
                    {errors?.address && (
                        <div className="error-message">
                            {errors?.address?.message ||
                                'Введите корректный адрес'}
                        </div>
                    )}
                </div>

                <div className="card__edit__input">
                    <p className="input__title">Электронная почта</p>
                    <input
                        className="current__input card__edit__input__element"
                        name="email"
                        autoComplete="off"
                        type="text"
                        required
                        style={
                            !errors?.email ? {} : { border: '1px solid red' }
                        }
                        {...register('email', {
                            required: true,
                            pattern:
                                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                        })}
                    />
                    {errors?.email && (
                        <div className="error-message">
                            {errors?.email?.message ||
                                'Введите корректный email'}
                        </div>
                    )}
                </div>

                <div className="card__edit__input">
                    <p className="input__title">Введите телефон</p>
                    <input
                        className="current__input card__edit__input__element"
                        name="phone"
                        autoComplete="off"
                        type="text"
                        required
                        style={
                            !errors?.phone ? {} : { border: '1px solid red' }
                        }
                        {...register('phone', {
                            required: true,
                            pattern: /^\d+$/,
                            minLength: {
                                value: 4,
                                message:
                                    'Вы вводите некорректное количество цифр',
                            },
                        })}
                    />
                    {errors?.phone && (
                        <div className="error-message">
                            {errors?.phone?.message ||
                                'Вы вводите некорректное количество цифр'}
                        </div>
                    )}
                </div>

                <div className="card__edit__input">
                    <p className="input__title">Сайт</p>
                    <input
                        className="current__input card__edit__input__element"
                        name="site"
                        autoComplete="off"
                        type="text"
                        required
                        style={!errors?.site ? {} : { border: '1px solid red' }}
                        {...register('site', {
                            required: true,
                            pattern: /[a-zA-Z]/,
                        })}
                    />
                    {errors?.site && (
                        <div className="error-message">
                            {errors?.site?.message ||
                                'Адрес сайта указывается латинским буквами'}
                        </div>
                    )}
                </div>

                <div className="card__edit__input">
                    <p className="input__title">Область распространения </p>
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
                        })}
                    />
                    {errors?.area && (
                        <div className="error-message">
                            {errors?.area?.message ||
                                'Сокращенное наименование должно быть на кириллице'}
                        </div>
                    )}
                </div>

                <div className="declaration__buttons">
                    <button
                        className="btn__login declaration__btn"
                        //     disabled={!isValid}
                        type="button"
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

export default FormOsSdc;
