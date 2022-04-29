import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

function Registr(props) {
  
  const navigate = useNavigate();

  const nameInput = useRef();
  const innInput = useRef();
  const funcInput = useRef();
  const phoneInput = useRef();
  const mailInput = useRef();
  const sdsInput = useRef();

  const formHandler = {
    name: nameInput.current.value,
    inn: innInput.current.value,
    func: funcInput.current.value,
    phone: phoneInput.current.value,
    mail: mailInput.current.value,
    sds: sdsInput.current.value,
  };

  return;
  <div>
    <h1>Сведения о заявителе</h1>
    <form>
      <div>
        <input />
      </div>
      <div>
        <input />
      </div>
      <div>
        <input />
      </div>
      <div>
        <input />
      </div>
      <div>
        <input />
      </div>
      <div>
        <input />
      </div>
    </form>
  </div>;
}

export default Registr;
