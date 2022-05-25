import './registr.scss';

function RegisterSuccess(props) {
    return (
        <div className="success__container">
            Спасибо за регистрацию, Ваша заявка отправлена на рассмотрение.
            Данные для входа в систему будут отправлены на указанную электронную
            почту.
            <div className="success__backlogin">
                <a href="/login">Вернуться на страницу входа</a>
            </div>
        </div>
    );
}

export default RegisterSuccess;
