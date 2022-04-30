import { useState } from 'react';
import '../register/registr.scss';

function Declaration(props) {
  const [phone, setPhone] = useState('');

  const formHandler = (e) => {
    e.preventDefault();
    console.log(e.target.inn.value);
    console.log(phone);
  };
  return (
    <>
      <div className="login__title">Подача Заявления СДС</div>
      <form onSubmit={formHandler} className="declaration__form">
        <div className="group__input">
          <div>
            <p>Полное наименование СДС</p>
            <input
              autoComplete="off"
              name="name"
              type="text"
              // placeholder="Имя"
              required
              autoFocus
            />
          </div>
          <div>
            <p>Сокращенное наименование СДС</p>
            <input
              name="inn"
              autoComplete="off"
              type="text"
              // placeholder="Имя"
              required
            />
          </div>
          <div>
            <p>Регистрационный номер (в реестре СДС Ростандарта)</p>
            <input
              name="func"
              autoComplete="off"
              type="text"
              // placeholder="Имя"
              required
            />
          </div>
          <div>
            <p>Дата регистрации (в реестре СДС Ростандарта)</p>
            <input
              name="phone"
              value={phone}
              placeholder="  +7"
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div>
            <p>Область распространения системы (обьекты сертификации)</p>
            <input
              name="mail"
              autoComplete="off"
              type="text"
              placeholder="  .....@....."
              required
            />
          </div>
          <div>
            <p>сайт СДС</p>
            <input name="sds" autoComplete="off" type="text" required />
          </div>
        </div>

        <div className="group__input">
          <div>
            <p>ИНН</p>
            <input
              autoComplete="off"
              name="name"
              type="text"
              // placeholder="Имя"
              required
              autoFocus
            />
          </div>
          <div>
            <p>ОГРН</p>
            <input
              name="inn"
              autoComplete="off"
              type="text"
              // placeholder="Имя"
              required
            />
          </div>
          <div>
            <p>Наименование</p>
            <input
              name="func"
              autoComplete="off"
              type="text"
              // placeholder="Имя"
              required
            />
          </div>
          <div>
            <p>Юр. Адрес</p>
            <input
              name="phone"
              value={phone}
              placeholder="  +7"
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div>
            <p>Телефон</p>
            <input
              name="mail"
              autoComplete="off"
              type="text"
              placeholder="  .....@....."
              required
            />
          </div>
          <div>
            <p>E-mail</p>
            <input name="sds" autoComplete="off" type="text" required />
          </div>
          <button className="btn__login" type="submit">
            Отправить
          </button>
        </div>
        <div>
        </div>
      </form>
    </>
  );
}

export default Declaration;
