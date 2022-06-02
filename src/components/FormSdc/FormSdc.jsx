import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import axios from 'axios';
import '../../pages/register/registr.scss';
import './form-sdc.scss';
import { postSdcRequest } from '../../store/proposal/actions';
import { useNavigate } from 'react-router-dom';

function FormSdc(props) {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { id } = useSelector((state) => state.proposal.currentProposalSdc);

    const [formData, setFormData] = useState({
        fullName: '',
        shortName: '',
        registrationNumber: '',
        registrationDate: '',
        registrationCompany: '',
        area: '',
    });

    const {
        fullName,
        shortName,
        registrationNumber,
        registrationDate,
        registrationCompany,
        area,
    } = formData;

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    };

    const formHandler = (e) => {
        e.preventDefault();

        const declarationSdsData = {
            fullName,
            shortName,
            registrationNumber,
            registrationDate,
            registrationCompany,
            area,
        };
        dispatch(postSdcRequest(declarationSdsData));
        setTimeout(() => {
            navigate(`/request_sdc/${id}`);
        }, 100);
    };

    return (
        <>
            <div className="login__title">Подача Заявления</div>
            <form onSubmit={formHandler} className="declaration__form">
                <div className="group__input">
                    <div>
                        <p>Полное наименование </p>
                        <input
                            className="form__input"
                            autoComplete="off"
                            name="fullName"
                            type="text"
                            required
                            autoFocus
                            onChange={onChange}
                        />
                    </div>
                    <div>
                        <p>Сокращенное наименование </p>
                        <input
                            className="form__input"
                            name="shortName"
                            autoComplete="off"
                            type="text"
                            required
                            onChange={onChange}
                        />
                    </div>
                    <div>
                        <p>registrationNumber</p>
                        <input
                            className="form__input"
                            name="registrationNumber"
                            autoComplete="off"
                            type="text"
                            required
                            onChange={onChange}
                        />
                    </div>
                    <div>
                        <p>registrationDate</p>
                        <input
                            className="form__input"
                            name="registrationDate"
                            autoComplete="off"
                            type="text"
                            required
                            onChange={onChange}
                        />
                    </div>
                    <div>
                        <p>registrationCompany</p>
                        <input
                            className="form__input"
                            name="registrationCompany"
                            autoComplete="off"
                            type="text"
                            required
                            onChange={onChange}
                        />
                    </div>

                    <div>
                        <p>area</p>
                        <input
                            className="form__input"
                            name="area"
                            autoComplete="off"
                            type="text"
                            required
                            onChange={onChange}
                        />
                    </div>
                    <button className="btn__login" type="submit">
                        Отправить
                    </button>
                </div>
                <div></div>
            </form>
        </>
    );
}

export default FormSdc;
