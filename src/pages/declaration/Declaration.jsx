import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import axios from 'axios';
import '../register/registr.scss';
import { postDeclarationHolder } from '../../store/proposal/actions';
import './declaration.scss';
import { useNavigate } from 'react-router-dom';
// import { FileUploadInput } from '../../components/FileUploadInput/FileUploadInput';

function Declaration(props) {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { id } = useSelector(
        (state) => state.proposalTest.currentProposalSdc
    );
    console.log(id, 'idDeclara');
    const [formData, setFormData] = useState({
        fullName: '',
        shortName: '',
        inn: '',
        ogrn: '',
        registrationNumber: '',
        registrationDate: '',
        exclusionDate: '',
        area: '',
        managerName: '',
        managerPosition: '',
        address: '',
        phone: '',
        email: '',
        site: '',
        //    myFile: null,
    });

    const {
        fullName,
        shortName,
        inn,
        ogrn,
        registrationNumber,
        registrationDate,
        exclusionDate,
        area,
        managerName,
        managerPosition,
        address,
        site,
        phone,
        email,
        //    myFile,
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
            fullName,
            inn,
            ogrn,
            shortName,
            registrationNumber,
            registrationDate,
            exclusionDate,
            area,
            managerName,
            managerPosition,
            address,
            phone,
            email,
            site,
        };
        console.log(declarationSdsData, 'declarationSdsData');
        dispatch(postDeclarationHolder({ id, declarationSdsData }));
        navigate(-1);
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
                            name="fullName"
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
                            name="shortName"
                            autoComplete="off"
                            type="text"
                            required
                            onChange={onChange}
                        />
                    </div>
                    <div>
                        <p>Инн</p>
                        <input
                            className="form__input"
                            name="inn"
                            autoComplete="off"
                            type="text"
                            required
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
                        <p>Регистрационный номер (в реестре СДС Ростандарта)</p>
                        <input
                            className="form__input"
                            name="registrationNumber"
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
                            name="registrationDate"
                            autoComplete="off"
                            required
                            type="text"
                            //    value={phone}
                            placeholder="  +7"
                            onChange={onChange}
                        />
                    </div>
                    <div>
                        <p>exclusionDate</p>
                        <input
                            className="form__input"
                            name="exclusionDate"
                            autoComplete="off"
                            type="text"
                            placeholder="  .....@....."
                            required
                            onChange={onChange}
                        />
                    </div>
                </div>

                <div className="group__input">
                    <div>
                        <p>managerName</p>
                        <input
                            className="form__input"
                            autoComplete="off"
                            name="managerName"
                            type="text"
                            required
                            autoFocus
                            onChange={onChange}
                        />
                    </div>
                    <div>
                        <p>
                            Область распространения системы (объекты
                            сертификации)
                        </p>
                        <input
                            className="form__input"
                            name="area"
                            autoComplete="off"
                            type="text"
                            required
                            onChange={onChange}
                        />
                    </div>

                    <div>
                        <p>managerPosition</p>
                        <input
                            className="form__input"
                            name="managerPosition"
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
                            name="address"
                            value={phone}
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
                            placeholder="  .....@....."
                            required
                            onChange={onChange}
                        />
                    </div>
                    <div>
                        <p>Сайт</p>
                        <input
                            className="form__input"
                            name="site"
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
