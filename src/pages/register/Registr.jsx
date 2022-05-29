import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { register } from '../../store/auth/authSlice';
import ReactDadataBox from 'react-dadata-box';
import RegisterSuccess from './RegisterSuccess';

import './registr.scss';

const Registr = () => {
    const testToken = 'aa29b21595947db61a4e85cd92ad24cf5877542f';

    const dispatch = useDispatch();

    const [isRegisterSuccess, setIsRegisterSuccess] = useState(false);

    const [formData, setFormData] = useState({
        email: '',
        firstname: '',
        secondname: '',
        lastname: '',
        orgInn: '',
        orgOgrn: '',
        orgShortName: '',
        post: '',
        phone: '',
        userRole: '',
        registrationNumber: '',
    });

    const {
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
    //     console.log(email, 'email');

    const onChange = (e) => {
        //    console.log(
        //        { [e.target.name]: e.target.value },
        //        ' [e.target.name]: e.target.value'
        //    );
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
            orgInn,
            orgOgrn,
            orgShortName,
            post,
            phone,
            userRole: '2',
            registrationNumber,
        };
        //    console.log('registrData', registrData);
        dispatch(register(registrData));
        setIsRegisterSuccess(true);
    };

    return isRegisterSuccess ? (
        <RegisterSuccess />
    ) : (
        <>
            <div className="login__title">Сведения о заявителе</div>
            <form onSubmit={formHandler} className="login__form">
                <div>
                    <p>Электронная почта</p>
                    <input
                        className="form__input"
                        name="email"
                        autoComplete="off"
                        type="email"
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
                        name="secondname"
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
                    <p>ИНН или наименование организации</p>
                    <ReactDadataBox
                        token={testToken}
                        type="party"
                        //     value={orgInn}
                        name="orgInn"
                        className="form__input"
                        onChange={(suggestion) => {
                            setFormData({
                                ...formData,
                                orgInn: suggestion?.data?.inn,
                                orgOgrn: suggestion?.data?.ogrn || '',
                            });
                        }}
                    />
                </div>
                <div>
                    <p>ОГРН</p>
                    <input
                        className="form__input"
                        name="orgOgrn"
                        autoComplete="off"
                        type="text"
                        value={orgOgrn}
                        required
                        onChange={onChange}
                        //     onChange={(e) => setFormData(e.target.value)}
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
                    <p>
                        Уже зарегистрированы?
                        <br />
                        <span className="line">
                            <a href="/login">Войти в систему</a>
                        </span>
                    </p>
                </div>

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
