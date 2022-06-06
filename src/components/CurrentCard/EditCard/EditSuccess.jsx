import '../../../pages/register/registr.scss';

function EditSuccess(props) {
    return (
        <div className="success__container">
            Ошибка! Редактирование заявки запрещено
            <div className="success__backlogin">
                <a href="/">Вернуться на главную</a>
            </div>
        </div>
    );
}

export default EditSuccess;
