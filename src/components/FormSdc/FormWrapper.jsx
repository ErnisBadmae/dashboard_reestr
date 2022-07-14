import { useDispatch, useSelector } from 'react-redux';
import { useCallback } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useForm, Controller } from 'react-hook-form';

import { getFormData, sendData } from './formHelpers.js';

import { ExpertInputs } from './FormInputs/ExpertInputs.jsx';
import { SdcInputs } from './FormInputs/SdcInputs.jsx';
import { OsInputs } from './FormInputs/OsInputs';
import { HolderInputs } from './FormInputs/HolderInputs';

import './form-sdc.scss';

function FormWrapper({ formType, formTitle }) {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const sdcId = useParams().id;

    const { currentOsSdcCard } = useSelector((state) => state.proposalTest);

    const oSid = currentOsSdcCard?.id;
    const {
        register,
        control,
        formState: { errors },
        handleSubmit,
    } = useForm();

    const formHandler = (data) => {
        const formData = getFormData(formType, data);

        sendData({
            formType,
            dispatch,
            navigate,
            formData,
            oSid,
            id: sdcId,
        })();
    };

    return (
        <>
            <div className="login__title">{formTitle}</div>
            <form
                onSubmit={handleSubmit(formHandler)}
                className="declaration__form__request"
            >
                {formType === 'expert' && (
                    <ExpertInputs
                        navigate={navigate}
                        register={register}
                        control={control}
                        errors={errors}
                    />
                )}
                {formType === 'newSdc' && (
                    <SdcInputs
                        navigate={navigate}
                        register={register}
                        control={control}
                        errors={errors}
                    />
                )}
                {formType === 'osSdc' && (
                    <OsInputs
                        navigate={navigate}
                        register={register}
                        control={control}
                        errors={errors}
                    />
                )}
                {formType === 'newHolder' && (
                    <HolderInputs
                        navigate={navigate}
                        register={register}
                        control={control}
                        errors={errors}
                    />
                )}

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

export default FormWrapper;
