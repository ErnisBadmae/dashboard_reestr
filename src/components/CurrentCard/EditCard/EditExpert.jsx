import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { editCurrentExpertOs } from '../../../store/proposal/actions';

import moment from 'moment';
import DatePicker, { registerLocale, setDefaultLocale } from 'react-datepicker';
import ru from 'date-fns/locale/ru';

import '../../FormSdc/form-sdc.scss';
import 'react-datepicker/dist/react-datepicker.css';

registerLocale('ru', ru);
setDefaultLocale('ru');

function EditExpert(props) {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { id } = useSelector(
        (state) => state.proposalTest.currentProposalSdc
    );
    const { currentExpertOs } = useSelector((state) => state.proposalTest);
    const expertId = currentExpertOs.id;

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

    const {
        register,

        formState: { errors },
        handleSubmit,
    } = useForm();

    const formHandler = (data) => {
        const body = {
            contractType: data.contractType,
            educationType: data.educationType,
            expertName: data.expertName,
            certificateNumber: data.certificateNumber,
            valid: validDate.toISOString(),
            area: data.area,
            experience: data.experience,
            introductionDate: introductionDate.toISOString(),
            exclusionDate: exclusionDate.toISOString(),
            exclusionPosition: data.exclusionPosition,
            snils: data.snils,
            education: data.education,
            educationSpeciality: data.educationSpeciality,
            educationDate: educationDate.toISOString(),
            educationOrganization: data.educationOrganization,
        };

        dispatch(editCurrentExpertOs({ expertId, body }))
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
                        defaultValue={currentExpertOs?.contract_type?.title}
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
                        defaultValue={currentExpertOs?.education_type?.title}
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
                        defaultValue={currentExpertOs?.expert_name}
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
                        defaultValue={currentExpertOs.certificate_number}
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
                        <DatePicker
                            dateFormat="dd/MM/yyyy"
                            className="current__input date"
                            onChange={(date) => {
                                setValidDate(date);
                            }}
                            selected={validDate}
                            maxDate={new Date()}
                            showDisabledMonthNavigation
                            required
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
                        defaultValue={currentExpertOs.area}
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
                        defaultValue={currentExpertOs.experience}
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
                        <DatePicker
                            dateFormat="dd/MM/yyyy"
                            className="current__input date"
                            onChange={(date) => {
                                setIntroductionDate(date);
                            }}
                            selected={introductionDate}
                            maxDate={new Date()}
                            showDisabledMonthNavigation
                            required
                        />
                    </div>
                </div>

                <div className="card__edit__input">
                    <p className="input__title">Дата исключения</p>
                    <div className="card__edit__input__element">
                        <DatePicker
                            dateFormat="dd/MM/yyyy"
                            className="current__input date"
                            onChange={(date) => {
                                setExclusionDate(date);
                            }}
                            selected={exclusionDate}
                            maxDate={new Date()}
                            showDisabledMonthNavigation
                            required
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
                        defaultValue={currentExpertOs.exclusion_position}
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
                        defaultValue={currentExpertOs.snils}
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
                        defaultValue={currentExpertOs.education}
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
                        defaultValue={currentExpertOs.education_speciality}
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
                        <DatePicker
                            dateFormat="dd/MM/yyyy"
                            className="current__input date"
                            onChange={(date) => {
                                setEducationDate(date);
                            }}
                            selected={educationDate}
                            maxDate={new Date()}
                            showDisabledMonthNavigation
                            required
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
                        defaultValue={currentExpertOs.education_organization}
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

export default EditExpert;
