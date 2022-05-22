/* eslint-disable no-unreachable */
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { reset, login } from '../../store/auth/authSlice';
import './login.scss';

function Login(props) {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const { email, password } = formData;
    const { user, isLoading, isError, isSuccess, message } = useSelector(
        (state) => state.auth
    );

    useEffect(() => {
        if (isError) {
            console.log('ошибка авторизации');
        }

        if (isSuccess || user) {
            navigate('/admin');
        }

        // dispatch(reset());
    }, [user, isError, isSuccess, message, navigate, dispatch]);

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    };
    const formHandler = async (e) => {
        e.preventDefault();

        const userData = {
            email,
            password,
        };
        dispatch(login(userData));
        //    navigate('/admin');
    };

    return (
        <section>
            <div className="login__title">Войти в систему</div>
            <form onSubmit={formHandler} className="login__form">
                <div>
                    <p>Электронная почта</p>
                    <input
                        className="form__input"
                        autoComplete="off"
                        name="email"
                        type="text"
                        required
                        autoFocus
                        onChange={onChange}
                    />
                    <p>Пароль</p>
                    {/* <p>ИНН</p> */}
                </div>
                <div>
                    <input
                        className="form__input"
                        name="password"
                        autoComplete="off"
                        type="password"
                        required
                        onChange={onChange}
                    />
                    <p>
                        Нет аккаунта? Зарегистрируйтесь
                        <br />
                        <span className="line">
                            {/*put router link here*/}
                            <a href="/register">Зарегистрироваться</a>
                        </span>
                    </p>
                </div>

                <button className="btn__login" type="submit">
                    Отправить
                </button>
            </form>
        </section>
    );
}

export default Login;
