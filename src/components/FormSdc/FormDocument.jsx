import { useDispatch, useSelector } from 'react-redux';
import { postOrganSertificationSdc } from '../../store/proposal/actions';
import { useNavigate } from 'react-router-dom';
import { FileUploadInput } from '../FileUploadInput/FileUploadInput';
import { useForm, Controller } from 'react-hook-form';

import './form-sdc.scss';

function FormOsSdc(props) {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { id } = useSelector(
        (state) => state.proposalTest.currentProposalSdc
    );
    const { register, handleSubmit } = useForm();

    const formHandler = (data) => {
        //    const osSdsData = {
        //        fileType: data.fileType,
        //        description: data.description,
        //    };
        // dispatch(postOrganSertificationSdc({ id, osSdsData }))
        //     .unwrap()
        //     .then(() => {
        //         navigate(`/request_sdc/${id}`);
        //     });
    };

    return (
        <>
            <div className="login__title">Добавление документа</div>
            <form
                onSubmit={handleSubmit(formHandler)}
                className="declaration__form__request"
            >
                <div className="card__edit__input">
                    <p className="input__title">Тип документа</p>
                    <input
                        className="current__input card__edit__input__element"
                        autoComplete="off"
                        name="fileType"
                        type="text"
                        required
                        autoFocus
                        id="fileType"
                        {...register('fileType', {
                            required: true,
                        })}
                    />
                </div>

                <div className="card__edit__input">
                    <p className="input__title">Описание документа</p>
                    <input
                        className="current__input card__edit__input__element"
                        autoComplete="off"
                        name="description"
                        type="text"
                        required
                        autoFocus
                        id="description"
                        {...register('description', {
                            required: true,
                        })}
                    />
                </div>
                <div>
                    <FileUploadInput
                        className="current__input card__edit__input__element"
                        multiple
                        extensions={['.jpg', '.png']}
                        name="myFile"
                        id="myFile"
                    />
                    <div>Hello</div>
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
