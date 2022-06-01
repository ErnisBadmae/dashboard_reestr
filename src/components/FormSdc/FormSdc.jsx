import { useState } from 'react';
import { useDispatch } from 'react-redux';
// import axios from 'axios';
import '../../pages/register/registr.scss';
import './form-sdc.scss';
import { postSdcRequest } from '../../store/entries/actions';

function FormSdc(props) {
    const dispatch = useDispatch();

    const [formData, setFormData] = useState({
        fullName: '',
        shortName: '',
        registrationNumber: '',
        registrationData: '',
        area: '',
    });

    const { fullName, shortName, registrationNumber, registrationData, area } =
        formData;

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
            registrationData,
            area,
        };
        dispatch(postSdcRequest(declarationSdsData));
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
                        <p>ОГРН</p>
                        <input
                            className="form__input"
                            name="registrationData"
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
