// import { useRef } from 'react';
// import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import './registr.scss';
// function Registr(props) {
//   const navigate = useNavigate();

//   const nameInput = useRef();
//   const innInput = useRef();
//   const funcInput = useRef();
//   const phoneInput = useRef();
//   const mailInput = useRef();
//   const sdsInput = useRef();

//   const newUser = {
//     name: nameInput.current.value,
//     inn: innInput.current.value,
//     func: funcInput.current.value,
//     phone: phoneInput.current.value,
//     mail: mailInput.current.value,
//     sds: sdsInput.current.value,
//   };

//   const formHandler = (e) => {
//     e.preventDefault();
//   };

//   return;
//   <div>
//     <h1>Сведения о заявителе</h1>
//     <form onSubmit={formHandler} className="login-form">
//       <div>
//         <input
//           autoComplete="off"
//           // ref={nameInput}
//           id="name"
//           type="text"
//           placeholder="Имя"
//           required
//           autoFocus
//           ref={nameInput}
//           // id="name"
//         />
//       </div>
//       <div>
//         <input ref={innInput} id="inn" />
//       </div>
//       <div>
//         <input ref={funcInput} id="func" />
//       </div>
//       <div>
//         <input ref={phoneInput} id="phone" />
//       </div>
//       <div>
//         <input ref={mailInput} id="mail" />
//       </div>
//       <div>
//         <input ref={sdsInput} id="sds" />
//       </div>
//     </form>
//   </div>;
// }

// export default Registr;

// import Form from '../../components/Form/Form';
// import { useDispatch } from 'react-redux';
// import {setUser} from '../../store/slices/userSlice'

// function Registr(props) {

//   const dispatch = useDispatch()
//   const handleLogin = () => {

//   }
//   return (
//     <div>

//     </div>
//   );
// }

// export default Registr;

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
            autoComplete="off"
            name="name"
            type="text"
            // placeholder="Имя"
            required
            autoFocus
          />
          <p>ИНН</p>
        </div>
        <div>
          <input
            name="inn"
            autoComplete="off"
            type="text"
            // placeholder="Имя"
            required
          />
          <p>Должность</p>
        </div>
        <div>
          <input
            name="func"
            autoComplete="off"
            type="text"
            // placeholder="Имя"
            required
          />
          <p>Телефон</p>
        </div>
        <div>
          <input
            name="phone"
            value={phone}
            placeholder="  +7"
            onChange={(e) => setPhone(e.target.value)}
          />
          <p>E-mail</p>
        </div>
        <div>
          <input
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
