import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { register } from '../../store/auth/authSlice';
import './registr.scss';

const Registr = () => {
    const dispatch = useDispatch();

    const [formData, setFormData] = useState({
        username: '',
        email: '',
        firstname: '',
        secondname: '',
        lastname: '',
        orgInn: '',
        orgOgrn: '',
        orgShortName: '',
        post: '',
        phone: '',
        userRole: '2',
        registrationNumber: '',
    });

    const {
        username,
        email,
        firstname,
        secondname,
        lastname,
        orgInn,
        orgOgrn,
        orgShortName,
        post,
        phone,
        userRole,
        registrationNumber,
    } = formData;

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    };

    const formHandler = (e) => {
        e.preventDefault();

        const registrData = {
            username: 'user_sdc3',
            email,
            firstname,
            secondname,
            lastname,
            orgInn,
            orgOgrn,
            orgShortName,
            post,
            phone,
            userRole: '2',
            registrationNumber,
        };
        console.log('registrData', registrData);
        //  axios.post('', registrData);
        dispatch(register(registrData));
    };

    return (
        <>
            <div className="login__title">Сведения о заявителе</div>
            <form onSubmit={formHandler} className="login__form">
                <div>
                    <p>Электронная почта</p>
                    <input
                        className="form__input"
                        name="email"
                        autoComplete="off"
                        type="text"
                        placeholder="  .....@....."
                        required
                        autoFocus
                        onChange={onChange}
                    />
                </div>
                <div>
                    <p> Имя</p>
                    <input
                        className="form__input"
                        autoComplete="off"
                        name="firstname"
                        type="text"
                        required
                        onChange={onChange}
                    />
                </div>
                <div>
                    <p>Фамилия</p>
                    <input
                        className="form__input"
                        autoComplete="off"
                        name="secondtname"
                        type="text"
                        required
                        onChange={onChange}
                    />
                </div>
                <div>
                    <p>Отчество</p>
                    <input
                        className="form__input"
                        autoComplete="off"
                        name="lastname"
                        type="text"
                        required
                        onChange={onChange}
                    />
                </div>
                <div>
                    <p>ИНН</p>
                    <input
                        className="form__input"
                        name="orgInn"
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
                        name="orgOgrn"
                        autoComplete="off"
                        type="text"
                        required
                        onChange={onChange}
                    />
                </div>
                <div>
                    <p>Сокращенное название организации</p>
                    <input
                        className="form__input"
                        name="orgShortName"
                        autoComplete="off"
                        type="text"
                        required
                        onChange={onChange}
                    />
                </div>
                <div>
                    <p>Должность</p>
                    <input
                        className="form__input"
                        name="post"
                        autoComplete="off"
                        type="text"
                        required
                        onChange={onChange}
                    />
                </div>
                <div>
                    <p>Телефон</p>
                    <input
                        className="form__input"
                        name="phone"
                        placeholder="  +7"
                        onChange={onChange}
                    />
                </div>
                <div>
                    <p>Регистрационный номер</p>
                    <input
                        className="form__input"
                        name="registrationNumber"
                        autoComplete="off"
                        type="text"
                        required
                        onChange={onChange}
                    />
                </div>
                {/* <div>
                    <input
                        className="form__input"
                        name="mail"
                        autoComplete="off"
                        type="text"
                        placeholder="  .....@....."
                        required
                        onChange={onChange}
                    />
                    <p>Регистрационный номер СДС</p>
                </div> */}

                <button className="btn__login" type="submit">
                    Отправить
                </button>
                <br />
            </form>
        </>
    );
};

export default Registr;

//userRole: 2  - константа

// ответ пришедший в виде уведомления что заявка зарегистрирована, дата заявка така я-то
