import axios from 'axios';
import { useState } from 'react';
import './registr.scss';

const Registr = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        firstname: '',
        secondname: '',
        lastname: '',
        org_inn: '',
        org_ogrn: '',
        org_short_name: '',
        post: '',
        phone: '',
        userRole: '2',
    });

    const {
        username,
        email,
        firstname,
        secondname,
        lastname,
        org_inn,
        org_ogrn,
        org_short_name,
        post,
        phone,
        userRole,
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
            email,
            firstname,
            secondname,
            lastname,
            org_inn,
            org_ogrn,
            org_short_name,
            post,
            phone,
            userRole: '2',
        };
        console.log('registrData', registrData);
        //  axios.post('', registrData);
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
                        name="org_inn"
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
                        name="org_ogrn"
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
                        name="org_short_name"
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
                    <p>Наименование СДС</p>
                </div> */}
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
