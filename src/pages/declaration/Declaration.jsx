import { useState } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import '../register/registr.scss';
import './declaration.scss';
import { postDeclarations } from '../../store/entries/actions';

function Declaration(props) {
    const dispatch = useDispatch();

    const [formData, setFormData] = useState({
        full: '',
        short: '',
        func: '',
        date: '',
        mail: '',
        sds: '',
        inn: '',
        ogrn: '',
        description: '',
        phone: '',
        email: '',
    });

    const {
        full,
        short,
        func,
        date,
        mail,
        sds,
        inn,
        ogrn,
        description,
        phone,
        email,
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
            full,
            short,
            func,
            date,
            mail,
            sds,
            inn,
            ogrn,
            description,
            phone,
            email,
        };
        dispatch(postDeclarations(declarationSdsData));
    };

    return (
        <>
            <div className="login__title">Подача Заявления СДС</div>
            <form onSubmit={formHandler} className="declaration__form">
                <div className="group__input">
                    <div>
                        <p>Полное наименование СДС</p>
                        <input
                            className="form__input"
                            autoComplete="off"
                            name="full"
                            type="text"
                            required
                            autoFocus
                            onChange={onChange}
                        />
                    </div>
                    <div>
                        <p>Сокращенное наименование СДС</p>
                        <input
                            className="form__input"
                            name="short"
                            autoComplete="off"
                            type="text"
                            required
                            onChange={onChange}
                        />
                    </div>
                    <div>
                        <p>Регистрационный номер (в реестре СДС Ростандарта)</p>
                        <input
                            className="form__input"
                            name="func"
                            autoComplete="off"
                            type="text"
                            required
                            onChange={onChange}
                        />
                    </div>
                    <div>
                        <p>Дата регистрации (в реестре СДС Ростандарта)</p>
                        <input
                            className="form__input"
                            name="date"
                            autoComplete="off"
                            required
                            type="text"
                            //    value={phone}
                            placeholder="  +7"
                            onChange={onChange}
                        />
                    </div>
                    <div>
                        <p>
                            Область распространения системы (обьекты
                            сертификации)
                        </p>
                        <input
                            className="form__input"
                            name="mail"
                            autoComplete="off"
                            type="text"
                            placeholder="  .....@....."
                            required
                            onChange={onChange}
                        />
                    </div>
                    <div>
                        <p>сайт СДС</p>
                        <input
                            className="form__input"
                            name="sds"
                            autoComplete="off"
                            type="text"
                            required
                            onChange={onChange}
                        />
                    </div>
                </div>

                <div className="group__input">
                    <div>
                        <p>ИНН</p>
                        <input
                            className="form__input"
                            autoComplete="off"
                            name="inn"
                            type="text"
                            required
                            autoFocus
                            onChange={onChange}
                        />
                    </div>
                    <div>
                        <p>ОГРН</p>
                        <input
                            className="form__input"
                            name="ogrn"
                            autoComplete="off"
                            type="text"
                            required
                            onChange={onChange}
                        />
                    </div>
                    <div>
                        <p>Наименование</p>
                        <input
                            className="form__input"
                            name="description"
                            autoComplete="off"
                            type="text"
                            required
                            onChange={onChange}
                        />
                    </div>
                    <div>
                        <p>Юр. Адрес</p>
                        <input
                            className="form__input"
                            name="phone"
                            value={phone}
                            placeholder="  +7"
                            onChange={onChange}
                        />
                    </div>
                    <div>
                        <p>Телефон</p>
                        <input
                            className="form__input"
                            name="phone"
                            autoComplete="off"
                            type="text"
                            placeholder="  .....@....."
                            required
                            onChange={onChange}
                        />
                    </div>
                    <div>
                        <p>E-mail</p>
                        <input
                            className="form__input"
                            name="email"
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

export default Declaration;
