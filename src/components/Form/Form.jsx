import { useState } from 'react';

function Form({ title, handleClick }) {
  const [mail, setMail] = useState('');
  const [phone, setPhone] = useState('');

  return (
    <div>
      <input
        type="text"
        value={mail}
        onChange={(e) => setMail(e.target.value)}
      />

      <input
        type="text"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <button onClick={handleClick}>{title}</button>
    </div>
  );
}

export default Form;
