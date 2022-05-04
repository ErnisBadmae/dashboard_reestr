import { useState } from 'react';
import './registr.scss';

const Registr = () => {
    const [phone, setPhone] = useState('');

    const formHandler = (e) => {
        e.preventDefault();
        console.log(e.target.inn.value);
        console.log(phone);
    };

    return (
        <>
            <div className="login__title">Сведения о заявителе</div>
            <form onSubmit={formHandler} className="login__form">
                <div>
                    <p>ФИО</p>
                    <input
                        className="form__input"
                        autoComplete="off"
                        name="name"
                        type="text"
                        required
                        autoFocus
                    />
                    <p>ИНН</p>
                </div>
                <div>
                    <input
                        className="form__input"
                        name="inn"
                        autoComplete="off"
                        type="text"
                        required
                    />
                    <p>Должность</p>
                </div>
                <div>
                    <input
                        className="form__input"
                        name="func"
                        autoComplete="off"
                        type="text"
                        required
                    />
                    <p>Телефон</p>
                </div>
                <div>
                    <input
                        className="form__input"
                        name="phone"
                        value={phone}
                        placeholder="  +7"
                        onChange={(e) => setPhone(e.target.value)}
                    />
                    <p>E-mail</p>
                </div>
                <div>
                    <input
                        className="form__input"
                        name="mail"
                        autoComplete="off"
                        type="text"
                        placeholder="  .....@....."
                        required
                    />
                    <p>СДС</p>
                </div>
                <div>
                    <input
                        className="form__input"
                        name="sds"
                        autoComplete="off"
                        type="text"
                        required
                    />
                </div>
                <button className="btn__login" type="submit">
                    Отправить
                </button>
            </form>
        </>
    );
};

export default Registr;
