import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getView } from '../../../../store/registry/actions';

function CardSertificate(props) {
    const navigate = useNavigate();

    const dispatch = useDispatch();
    const { pathname } = useLocation();
    const { currentCard } = useSelector((state) => state.registries);

    useEffect(() => {
        dispatch(getView(pathname));
    }, [pathname, dispatch]);

    const cardData = [
        {
            id: 0,
            title: 'Полное наименование организации',
            value: currentCard?.company_name,
        },
        {
            id: 1,
            title: '№ выданного сертификата',
            value: currentCard?.number,
        },
        {
            id: 2,
            title: 'ИНН получателя',
            value: currentCard?.company_inn,
        },
        {
            id: 3,
            title: '№ бланка',
            value: currentCard?.certificate_form,
        },
        {
            id: 4,
            title: 'Дата выдачи',
            value: currentCard?.certificate_date,
        },
        {
            id: 5,
            title: 'Срок действия сертификата',
            value: currentCard?.valid_date,
        },
        {
            id: 6,
            title: 'Соответствие требованиям (например, стандарт)',
            value: currentCard?.certificate_conformity,
        },
        //    {
        //        id: 7,
        //        title: 'Область распространения',
        //        value: currentCard?.area,
        //    },
        {
            id: 8,
            title: 'ОГРН',
            value: currentCard?.company_ogrn,
        },
        {
            id: 9,
            title: 'Особые отметки (например, оценка при наличии)',
            value: currentCard?.comment,
        },
        {
            id: 10,
            title: 'Скан-копия сертификата',
            value: currentCard?.certificate_scan,
        },
        // {
        //     id: 11,
        //     title: 'Область распространения',
        //     value: currentCard?.area,
        // },
    ];

    return (
        <>
            <div className="card__body">
                <div className="card__title">
                    <strong>Карточка компании</strong>
                </div>
                {cardData.map((field) => {
                    return (
                        <div className="card__field" key={field.id}>
                            <div className="strong-title">{field.title}</div>
                            <div className="text__current-card">
                                {field.value}
                            </div>
                        </div>
                    );
                })}
            </div>
            <div className="declaration__buttons">
                <button
                    className="btn__login declaration__btn"
                    onClick={() => navigate(-1)}
                    type="button"
                >
                    Назад
                </button>
            </div>
        </>
    );
}

export default CardSertificate;
