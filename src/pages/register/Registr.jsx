import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { register } from '../../store/auth/authSlice';
import ReactDadataBox from 'react-dadata-box';
import RegisterSuccess from './RegisterSuccess';
import { useForm, Controller } from 'react-hook-form';

import './registr.scss';
import '../../components/FormSdc/form-sdc.scss';
import { useNavigate } from 'react-router-dom';

const Registr = () => {
    const testToken = 'aa29b21595947db61a4e85cd92ad24cf5877542f';

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [isRegisterSuccess, setIsRegisterSuccess] = useState(false);
    const [inn, setInn] = useState('');

    const {
        register,
        watch,
        control,
        formState: { errors },
        handleSubmit,
    } = useForm();

    const watchFields = watch(['orgInn', 'orgOgrn']);
    console.log(watchFields, 'watchFields');

    const formHandler = (data) => {
        const registrData = {
            post: data.post,
            lastname: data.lastname,
            secondname: data.secondname,
            firstname: data.firstname,
            orgInn: data.orgInn,
            orgOgrn: data.orgOgrn,
            orgShortName: data.orgShortName,
            email: data.email,
            phone: data.phone,
        };
        console.log('registrData', registrData);
        //    dispatch(register(registrData));
        //    setIsRegisterSuccess(true);
    };

    return isRegisterSuccess ? (
        <RegisterSuccess
            text={
                'Спасибо за регистрацию, Ваша заявка отправлена на рассмотрение. Данные для входа в систему будут отправлены на указанную электронную почту.'
            }
            redirect={'/login'}
            textRedirect={'Вернуться на страницу авторизации'}
        />
    ) : (
        <>
            <div className="login__title">Сведения о заявителе</div>
            <form
                onSubmit={handleSubmit(formHandler)}
                className="declaration__form__request"
            >
                <div className="card__edit__input">
                    <p className="input__title">Электронная почта</p>
                    <input
                        className="current__input card__edit__input__element"
                        name="email"
                        autoComplete="off"
                        type="email"
                        placeholder="  .....@....."
                        required
                        autoFocus
                        id="email"
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
                    <p className="input__title"> Имя</p>
                    <input
                        className="current__input card__edit__input__element"
                        autoComplete="off"
                        name="firstname"
                        type="text"
                        id="firstname"
                        required
                        style={
                            !errors?.firstname
                                ? {}
                                : { border: '1px solid red' }
                        }
                        {...register('firstname', {
                            required: true,
                            pattern: /[а-яА-ЯёЁ]/,
                        })}
                    />
                    {errors?.firstname && (
                        <div className="error-message">
                            {errors?.firstname?.message ||
                                'Имя должно быть на кириллице'}
                        </div>
                    )}
                </div>

                <div className="card__edit__input">
                    <p className="input__title">Фамилия</p>
                    <input
                        className="current__input card__edit__input__element"
                        autoComplete="off"
                        name="secondname"
                        id="secondname"
                        type="text"
                        required
                        style={
                            !errors?.secondname
                                ? {}
                                : { border: '1px solid red' }
                        }
                        {...register('secondname', {
                            required: true,
                            pattern: /[а-яА-ЯёЁ]/,
                        })}
                    />
                    {errors?.secondname && (
                        <div className="error-message">
                            {errors?.secondname?.message ||
                                'Фамилия должна быть на кириллице'}
                        </div>
                    )}
                </div>

                <div className="card__edit__input">
                    <p className="input__title">Отчество</p>
                    <input
                        className="current__input card__edit__input__element"
                        autoComplete="off"
                        name="lastname"
                        id="lastname"
                        type="text"
                        required
                        style={
                            !errors?.lastname ? {} : { border: '1px solid red' }
                        }
                        {...register('lastname', {
                            required: true,
                            pattern: /[а-яА-ЯёЁ]/,
                        })}
                    />
                    {errors?.lastname && (
                        <div className="error-message">
                            {errors?.lastname?.message ||
                                'Отчество должно быть на кириллице'}
                        </div>
                    )}
                </div>

                <div className="card__edit__input">
                    <p className="input__title">
                        ИНН или наименование организации
                    </p>
                    <Controller
                        control={control}
                        name="orgInn"
                        id="orgInn"
                        render={({ field }) => (
                            <ReactDadataBox
                                token={testToken}
                                type="party"
                                value={{ field }}
                                className="current__input card__edit__input__element"
                                onChange={(suggestion) => {
                                    field.onChange(suggestion?.data?.inn);
                                    setInn(suggestion?.data?.ogrn);
                                    console.log(suggestion?.data);
                                }}
                            />
                        )}
                    />
                </div>

                {/* onChange={(suggestion) => {
                                        setFormData({
                                            ...formData,
                                            orgInn: suggestion?.data?.inn,
                                            orgOgrn: suggestion?.data?.ogrn || '',
                                        });
                                    }} */}

                <div className="card__edit__input">
                    <p className="input__title">ОГРН</p>
                    <input
                        className="current__input card__edit__input__element"
                        autoComplete="off"
                        type="text"
                        {...register('orgOgrn')}
                        required
                        value={inn}
                        onChange={formHandler}
                        //     onChange={(e) => setFormData(e.target.value)}
                    />
                </div>

                <div className="card__edit__input">
                    <p className="input__title">
                        Сокращенное название организации
                    </p>
                    <input
                        className="current__input card__edit__input__element"
                        name="orgShortName"
                        autoComplete="off"
                        type="text"
                        id="orgShortName"
                        required
                        style={
                            !errors?.orgShortName
                                ? {}
                                : { border: '1px solid red' }
                        }
                        {...register('orgShortName', {
                            required: true,
                            pattern: /[а-яА-ЯёЁ]/,
                        })}
                    />
                    {errors?.orgShortName && (
                        <div className="error-message">
                            {errors?.orgShortName?.message ||
                                'Сокращенное наименование должно быть на кириллице'}
                        </div>
                    )}
                </div>

                <div className="card__edit__input">
                    <p className="input__title">Должность</p>
                    <input
                        className="current__input card__edit__input__element"
                        name="post"
                        autoComplete="off"
                        type="text"
                        id="post"
                        required
                        style={!errors?.post ? {} : { border: '1px solid red' }}
                        {...register('post', {
                            required: true,
                            pattern: /[а-яА-ЯёЁ]/,
                        })}
                    />
                    {errors?.post && (
                        <div className="error-message">
                            {errors?.post?.message ||
                                'Должность должна быть на кириллице'}
                        </div>
                    )}
                </div>

                <div className="card__edit__input">
                    <p className="input__title">Телефон</p>
                    <input
                        className="current__input card__edit__input__element"
                        name="phone"
                        id="phone"
                        placeholder="  +7"
                        style={
                            !errors?.phone ? {} : { border: '1px solid red' }
                        }
                        {...register('phone', {
                            required: true,
                            pattern: /[а-яА-ЯёЁ]/,
                        })}
                    />
                    {errors?.phone && (
                        <div className="error-message">
                            {errors?.phone?.message ||
                                'Полное наименование должно быть на кириллице'}
                        </div>
                    )}
                </div>

                <div className="card__edit__input">
                    <p className="input__title">Регистрационный номер</p>
                    <input
                        className="current__input card__edit__input__element"
                        name="registrationNumber"
                        id="registrationNumber"
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
                            pattern: /[а-яА-ЯёЁ]/,
                        })}
                    />
                    {errors?.registrationNumber && (
                        <div className="error-message">
                            {errors?.registrationNumber?.message ||
                                'Полное наименование должно быть на кириллице'}
                        </div>
                    )}

                    <p className="input__title">
                        Уже зарегистрированы?
                        <br />
                        <span className="line">
                            <a href="/login">Войти в систему</a>
                        </span>
                    </p>
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
};

export default Registr;

//userRole: 2  - константа
// ответ пришедший в виде уведомления что заявка зарегистрирована, дата заявка така я-то
