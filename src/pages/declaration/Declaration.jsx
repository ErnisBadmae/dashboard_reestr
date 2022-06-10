import { useDispatch, useSelector } from 'react-redux';
import { useForm, Controller } from 'react-hook-form';
import '../register/registr.scss';
import { postDeclarationHolder } from '../../store/proposal/actions';
import { useNavigate } from 'react-router-dom';
// import { FileUploadInput } from '../../components/FileUploadInput/FileUploadInput';
import DatePicker, { registerLocale, setDefaultLocale } from 'react-datepicker';
import ru from 'date-fns/locale/ru';

import 'react-datepicker/dist/react-datepicker.css';
import '../../components/FormSdc/form-sdc.scss';
import './declaration.scss';

registerLocale('ru', ru);
setDefaultLocale('ru');

function Declaration(props) {
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

    const formHandler = (data) => {
        const declarationSdsData = {
            fullName: data.fullName,
            shortName: data.shortName,
            inn: data.inn,
            ogrn: data.ogrn,
            registrationNumber: data.registrationNumber,
            registrationDate: data.registrationDate,
            exclusionDate: data.exclusionDate,
            area: data.area,
            managerName: data.managerName,
            managerPosition: data.managerPosition,
            address: data.address,
            phone: data.phone,
            email: data.email,
            site: data.site,
        };
        dispatch(postDeclarationHolder({ id, declarationSdsData }));
        navigate(-1);
    };

    return (
        <>
            <div className="login__title">Подача Заявления Держателя</div>
            <form
                onSubmit={handleSubmit(formHandler)}
                className="declaration__form__request"
            >
                <div className="card__edit__input">
                    <p className="input__title">Полное наименование СДС</p>
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

                <div className="card__edit__input">
                    <p className="input__title">Сокращенное наименование</p>
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
                    <p className="input__title">Инн</p>
                    <input
                        className="current__input card__edit__input__element"
                        name="inn"
                        autoComplete="off"
                        type="text"
                        required
                        style={
                            !errors?.registrationNumber
                                ? {}
                                : { border: '1px solid red' }
                        }
                        {...register('inn', {
                            required: true,
                            pattern: /^\d+$/,
                            minLength: {
                                value: 7,
                                message:
                                    'Вы вводите некорректное количество цифр',
                            },
                        })}
                    />
                    {errors?.inn && (
                        <div className="error-message">
                            {errors?.inn?.message ||
                                'Регистрационный номер должен состоять только из цифр'}
                        </div>
                    )}
                </div>

                <div className="card__edit__input">
                    <p className="input__title">Огрн </p>
                    <input
                        className="current__input card__edit__input__element"
                        name="ogrn"
                        autoComplete="off"
                        type="text"
                        required
                        style={
                            !errors?.registrationNumber
                                ? {}
                                : { border: '1px solid red' }
                        }
                        {...register('ogrn', {
                            required: true,
                            pattern: /^\d+$/,
                            minLength: {
                                value: 7,
                                message:
                                    'Вы вводите некорректное количество цифр',
                            },
                        })}
                    />
                    {errors?.ogrn && (
                        <div className="error-message">
                            {errors?.ogrn?.message ||
                                'Регистрационный номер должен состоять только из цифр'}
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
                    <p className="input__title">
                        Дата регистрации (в реестре Росстандата)
                    </p>
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
                    <p className="input__title">Дата исключения</p>
                    <div className="card__edit__input__element">
                        <Controller
                            control={control}
                            name="exclusionDate"
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
                                'Имя должно быть на кириллице'}
                        </div>
                    )}
                </div>

                <div className="card__edit__input">
                    <p className="input__title">
                        Область распространения системы (объекты сертификации)
                    </p>
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
                                'Значение должно быть на кириллице'}
                        </div>
                    )}
                </div>

                <div className="card__edit__input">
                    <p className="input__title">Должность руководителя</p>
                    <input
                        className="current__input card__edit__input__element"
                        name="managerPosition"
                        autoComplete="off"
                        type="text"
                        required
                        style={
                            !errors?.managerPosition
                                ? {}
                                : { border: '1px solid red' }
                        }
                        {...register('managerPosition', {
                            required: true,
                            pattern: /[а-яА-ЯёЁ]/,
                        })}
                    />
                    {errors?.managerPosition && (
                        <div className="error-message">
                            {errors?.managerPosition?.message ||
                                'Должность должна быть на кириллице'}
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
                            pattern: /[а-яА-ЯёЁ]/,
                        })}
                    />
                    {errors?.address && (
                        <div className="error-message">
                            {errors?.address?.message ||
                                'Адрес должен быть на кириллице'}
                        </div>
                    )}
                </div>

                <div className="card__edit__input">
                    <p className="input__title">Телефон</p>
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
                                value: 7,
                                message:
                                    'Вы вводите некорректное количество цифр',
                            },
                        })}
                    />
                    {errors?.phone && (
                        <div className="error-message">
                            {errors?.phone?.message ||
                                'Регистрационный номер должен состоять только из цифр'}
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
                            pattern: /^\d+$/,
                            minLength: {
                                value: 7,
                                message:
                                    'Вы вводите некорректное количество цифр',
                            },
                        })}
                    />
                    {errors?.site && (
                        <div className="error-message">
                            {errors?.site?.message ||
                                'Регистрационный номер должен состоять только из цифр'}
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

export default Declaration;
