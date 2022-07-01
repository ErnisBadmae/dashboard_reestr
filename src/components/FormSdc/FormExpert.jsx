import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useForm, Controller } from 'react-hook-form';
import { postExpertOsSdc } from '../../store/proposal/actions';

import DatePicker, { registerLocale, setDefaultLocale } from 'react-datepicker';
import ru from 'date-fns/locale/ru';

import './form-sdc.scss';
import 'react-datepicker/dist/react-datepicker.css';

registerLocale('ru', ru);
setDefaultLocale('ru');

function FormExpert(props) {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { id } = useSelector(
        (state) => state.proposalTest.currentProposalSdc
    );
    const { currentOsSdcCard } = useSelector((state) => state.proposalTest);
    const oSid = currentOsSdcCard?.id;

    const {
        register,
        control,
        formState: { errors },
        handleSubmit,
    } = useForm();

    const formHandler = (data) => {
        const expertData = {
            contractType: data.contractType,
            educationType: data.educationType,
            expertName: data.expertName,
            certificateNumber: data.certificateNumber,
            valid: data.valid.toLocaleDateString('en-CA'),
            area: data.area,
            experience: data.experience,
            introductionDate: data.introductionDate.toLocaleDateString('en-CA'),
            exclusionDate: data.exclusionDate.toLocaleDateString('en-CA'),
            exclusionPosition: data.exclusionPosition,
            snils: data.snils,
            education: data.education,
            educationSpeciality: data.educationSpeciality,
            educationDate: data.educationDate.toLocaleDateString('en-CA'),
            educationOrganization: data.educationOrganization,
        };

        dispatch(postExpertOsSdc({ oSid, expertData }))
            .unwrap()
            .then(() => {
                navigate(`/request_sdc/${id}`);
            });
    };

    return (
        <>
            <div className="login__title">Сведения об эксперте</div>
            <form
                onSubmit={handleSubmit(formHandler)}
                className="declaration__form__request"
            >
                <div className="card__edit__input">
                    <p className="input__title">Тип контракта</p>
                    <input
                        className="current__input card__edit__input__element"
                        autoComplete="off"
                        name="contractType"
                        type="text"
                        required
                        autoFocus
                        id="contractType"
                        style={
                            !errors?.contractType
                                ? {}
                                : { border: '1px solid red' }
                        }
                        {...register('contractType', {
                            required: true,
                        })}
                    />
                    {errors?.contractType && (
                        <div className="error-message">
                            {errors?.contractType?.message || 'Выберите тип'}
                        </div>
                    )}
                </div>

                <div className="card__edit__input">
                    <p className="input__title">Тип образования</p>
                    <input
                        className="current__input card__edit__input__element"
                        autoComplete="off"
                        name="educationType"
                        type="text"
                        required
                        id="educationType"
                        style={
                            !errors?.educationType
                                ? {}
                                : { border: '1px solid red' }
                        }
                        {...register('educationType', {
                            required: true,
                        })}
                    />
                    {errors?.educationType && (
                        <div className="error-message">
                            {errors?.educationType?.message || 'Выберите тип'}
                        </div>
                    )}
                </div>

                <div className="card__edit__input">
                    <p className="input__title">Имя эксперта</p>
                    <input
                        className="current__input card__edit__input__element"
                        name="expertName"
                        autoComplete="off"
                        type="text"
                        required
                        style={
                            !errors?.expertName
                                ? {}
                                : { border: '1px solid red' }
                        }
                        {...register('expertName', {
                            required: true,
                            pattern: /[а-яА-ЯёЁ]/,
                        })}
                    />
                    {errors?.expertName && (
                        <div className="error-message">
                            {errors?.expertName?.message ||
                                'Имя должно быть на кириллице'}
                        </div>
                    )}
                </div>

                <div className="card__edit__input">
                    <p className="input__title">Номер сертификата</p>
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
                                'номер должен состоять только из цифр'}
                        </div>
                    )}
                </div>

                <div className="card__edit__input">
                    <p className="input__title">
                        Дата окончания действия сертификата
                    </p>
                    <div className="card__edit__input__element">
                        <Controller
                            control={control}
                            name="valid"
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
                        })}
                    />
                    {errors?.area && (
                        <div className="error-message">
                            {errors?.area?.message || 'Введите данные'}
                        </div>
                    )}
                </div>

                <div className="card__edit__input">
                    <p className="input__title">Опыт</p>
                    <input
                        className="current__input card__edit__input__element"
                        name="experience"
                        autoComplete="off"
                        type="text"
                        required
                        style={
                            !errors?.experience
                                ? {}
                                : { border: '1px solid red' }
                        }
                        {...register('experience', {
                            required: true,
                        })}
                    />
                    {errors?.experience && (
                        <div className="error-message">
                            {errors?.experience?.message || 'Введите данные'}
                        </div>
                    )}
                </div>

                <div className="card__edit__input">
                    <p className="input__title">Дата вступления</p>
                    <div className="card__edit__input__element">
                        <Controller
                            control={control}
                            name="introductionDate"
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
                    <p className="input__title">
                        Должность на момент исключения
                    </p>
                    <input
                        className="current__input card__edit__input__element"
                        name="exclusionPosition"
                        autoComplete="off"
                        type="text"
                        required
                        style={
                            !errors?.exclusionPosition
                                ? {}
                                : { border: '1px solid red' }
                        }
                        {...register('exclusionPosition', {
                            required: true,
                        })}
                    />
                    {errors?.exclusionPosition && (
                        <div className="error-message">
                            {errors?.exclusionPosition?.message ||
                                'Введите данные'}
                        </div>
                    )}
                </div>

                <div className="card__edit__input">
                    <p className="input__title">Снилс</p>
                    <input
                        className="current__input card__edit__input__element"
                        name="snils"
                        autoComplete="off"
                        type="text"
                        required
                        style={
                            !errors?.snils ? {} : { border: '1px solid red' }
                        }
                        {...register('snils', {
                            required: true,
                            pattern: /^\d+$/,
                            minLength: {
                                value: 4,
                                message:
                                    'Вы вводите некорректное количество цифр',
                            },
                        })}
                    />
                    {errors?.snils && (
                        <div className="error-message">
                            {errors?.snils?.message ||
                                'Вы вводите некорректное количество цифр'}
                        </div>
                    )}
                </div>

                <div className="card__edit__input">
                    <p className="input__title">Образование</p>
                    <input
                        className="current__input card__edit__input__element"
                        name="education"
                        autoComplete="off"
                        type="text"
                        required
                        style={
                            !errors?.education
                                ? {}
                                : { border: '1px solid red' }
                        }
                        {...register('education', {
                            required: true,
                            pattern: /[а-яА-ЯёЁ]/,
                        })}
                    />
                    {errors?.education && (
                        <div className="error-message">
                            {errors?.education?.message ||
                                'Введите данные на кириллице'}
                        </div>
                    )}
                </div>

                <div className="card__edit__input">
                    <p className="input__title">Специализация</p>
                    <input
                        className="current__input card__edit__input__element"
                        name="educationSpeciality"
                        autoComplete="off"
                        type="text"
                        required
                        style={
                            !errors?.educationSpeciality
                                ? {}
                                : { border: '1px solid red' }
                        }
                        {...register('educationSpeciality', {
                            required: true,
                            minLength: {
                                value: 5,
                                message: 'Вы вводите некорректные данные',
                            },
                        })}
                    />
                    {errors?.educationSpeciality && (
                        <div className="error-message">
                            {errors?.educationSpeciality?.message ||
                                'Введите данные'}
                        </div>
                    )}
                </div>

                <div className="card__edit__input">
                    <p className="input__title">Дата образования</p>
                    <div className="card__edit__input__element">
                        <Controller
                            control={control}
                            name="educationDate"
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
                    <p className="input__title">Образовательная организация</p>
                    <input
                        className="current__input card__edit__input__element"
                        name="educationOrganization"
                        autoComplete="off"
                        type="text"
                        required
                        style={
                            !errors?.educationOrganization
                                ? {}
                                : { border: '1px solid red' }
                        }
                        {...register('educationOrganization', {
                            required: true,
                        })}
                    />
                    {errors?.educationOrganization && (
                        <div className="error-message">
                            {errors?.educationOrganization?.message ||
                                'Введите данные'}
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
                    >
                        Отправить
                    </button>
                </div>
            </form>
        </>
    );
}

export default FormExpert;
