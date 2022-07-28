import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import { getFormData, sendData } from './formHelpers.js';
import { ExpertInputs } from './FormInputs/ExpertInputs.jsx';
import { SdcInputs } from './FormInputs/SdcInputs.jsx';
import { OsInputs } from './FormInputs/OsInputs';
import { HolderInputs } from './FormInputs/HolderInputs';

import { OcInputs } from './OcInputs/OcInputs';

import './form-sdc.scss';

function FormWrapper({ formType, formTitle }) {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { sdcId, expertId, holderId, proposalOsId } = useParams();

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
            sdcId,
            expertId,
            holderId,
            proposalOsId,
        })();
    };

    return (
        <>
            <div className="login__title">{formTitle}</div>
            <form
                onSubmit={handleSubmit(formHandler)}
                className="declaration__form__request"
            >
                {(formType === 'expert' || formType === 'editExpert') && (
                    <ExpertInputs
                        navigate={navigate}
                        register={register}
                        control={control}
                        errors={errors}
                        formType={formType}
                    />
                )}
                {(formType === 'newSdc' || formType === 'editSdc') && (
                    <SdcInputs
                        navigate={navigate}
                        register={register}
                        control={control}
                        errors={errors}
                        formType={formType}
                    />
                )}
                {(formType === 'osSdc' || formType === 'editOs') && (
                    <OsInputs
                        navigate={navigate}
                        register={register}
                        control={control}
                        errors={errors}
                        formType={formType}
                    />
                )}
                {(formType === 'newHolder' || formType === 'editHolder') && (
                    <HolderInputs
                        navigate={navigate}
                        register={register}
                        control={control}
                        errors={errors}
                        formType={formType}
                    />
                )}

                {(formType === 'newOc' || formType === 'editOc') && (
                    <OcInputs
                        navigate={navigate}
                        register={register}
                        control={control}
                        errors={errors}
                        formType={formType}
                    />
                )}

                <div className="declaration__buttons">
                    <button
                        className="btn__login"
                        type="button"
                        onClick={() => navigate(-1)}
                    >
                        Отменить
                    </button>
                    <button className="btn__login" type="submit">
                        Отправить
                    </button>
                </div>
            </form>
        </>
    );
}

export default FormWrapper;
