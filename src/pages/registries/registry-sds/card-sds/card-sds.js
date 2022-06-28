import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getView } from '../../../../store/registry/actions';

function CardSds(props) {
    const { pathname } = useLocation();
    const navigate = useNavigate();

    const dispatch = useDispatch();

    const { currentCard } = useSelector((state) => state.registries);

    useEffect(() => {
        dispatch(getView(pathname));
    }, [pathname, dispatch]);

    const cardData = [
        {
            id: 1,
            title: 'Полное наименование',
            value: currentCard?.full_name,
        },
        {
            id: 2,
            title: 'Сокращенное наименование',
            value: currentCard?.short_name,
        },
        {
            id: 3,
            title: 'Регистрационный номер',
            value: currentCard?.registration_number,
        },
        {
            id: 4,
            title: 'Дата регистрации',
            value: currentCard?.registration_date,
        },
        {
            id: 5,
            title: 'Компания - регистратор',
            value: currentCard?.registration_company,
        },
        {
            id: 6,
            title: 'Сайт',
            value: currentCard?.site,
        },
        {
            id: 7,
            title: 'Область распространения',
            value: currentCard?.area,
        },
        //    {
        //        id: 8,
        //        title: 'Область распространения',
        //        value: currentCard?.area,
        //    },
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

export default CardSds;
