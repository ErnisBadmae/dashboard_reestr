import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getView } from '../../../../store/registry/actions';

function CardOs(props) {
    const navigate = useNavigate();

    const dispatch = useDispatch();
    const { pathname } = useLocation();
    const { currentCard } = useSelector((state) => state.registries);

    useEffect(() => {
        dispatch(getView(pathname));
    }, [pathname, dispatch]);

    const cardData = [
        {
            id: -1,
            title: 'Полное наименование организации',
            value: currentCard?.full_name_organ_certification,
        },
        {
            id: 0,
            title: 'Сокращенное наименование организации',
            value: currentCard?.short_name_organ_certification,
        },
        {
            id: 1,
            title: 'Номер аттестата аккредитации',
            value: currentCard?.certificate_number,
        },
        {
            id: 2,
            title: 'Дата решения об аккредитации',
            value: currentCard?.certificate_date,
        },
        {
            id: 3,
            title: 'Номер решения об аккредитации',
            value: currentCard?.decision_number,
        },
        {
            id: 4,
            title: 'ИНН',
            value: currentCard?.inn,
        },
        {
            id: 5,
            title: 'ОГРН',
            value: currentCard?.ogrn,
        },
        {
            id: 6,
            title: 'ФИО руководителя',
            value: currentCard?.manager_name,
        },
        {
            id: 7,
            title: 'Область распространения',
            value: currentCard?.area,
        },
        {
            id: 8,
            title: 'Адрес',
            value: currentCard?.address,
        },
        {
            id: 9,
            title: 'Электронная почта',
            value: currentCard?.email,
        },
        {
            id: 10,
            title: 'Сайт',
            value: currentCard?.site,
        },
        {
            id: 11,
            title: 'Область распространения',
            value: currentCard?.area,
        },
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

export default CardOs;
