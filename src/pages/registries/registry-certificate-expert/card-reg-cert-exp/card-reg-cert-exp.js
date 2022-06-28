import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getView } from '../../../../store/registry/actions';

function CardExpert(props) {
    const navigate = useNavigate();

    const { pathname } = useLocation();

    const dispatch = useDispatch();

    const { currentCard } = useSelector((state) => state.registries);

    //     const currentItem = currentCard ?? Object.assign({}, currentCard);
    //     const currentItem = entries.find((el) => el.id_sds === id);

    useEffect(() => {
        dispatch(getView(pathname));
    }, [pathname, dispatch]);

    const cardData = [
        {
            id: 0,
            title: 'ФИО эксперта',
            value: currentCard?.expert_name,
        },
        {
            id: 1,
            title: '№ аттестата',
            value: currentCard?.certificate_number,
        },
        {
            id: 2,
            title: 'Сертификат (скан)',
            value: currentCard?.certificate_scan || 'данных нет',
        },

        {
            id: 4,
            title: 'Действителен до',
            value: currentCard?.valid,
        },
        {
            id: 5,
            title: 'Область распространения',
            value: currentCard?.area,
        },
        {
            id: 6,
            title: 'Опыт',
            value: currentCard?.experience,
        },
        {
            id: 7,
            title: 'Дата вступления в организацию',
            value: currentCard?.introduction_date,
        },
        {
            id: 8,
            title: 'Дата исключения из организации',
            value: currentCard?.exclusion_date,
        },
        {
            id: 9,
            title: 'Должность на дату исключения',
            value: currentCard?.exclusion_position,
        },
        {
            id: 10,
            title: 'Основание для привлечения',
            value: currentCard?.inclusion_document,
        },
        {
            id: 11,
            title: 'Дата обучения',
            value: currentCard?.education_date,
        },
        {
            id: 12,
            title: 'Образовательная организация ',
            value: currentCard?.education_organization,
        },
    ];

    return (
        <>
            <div className="card__body">
                <div className="card__title">
                    <strong>Карточка эксперта</strong>
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

export default CardExpert;
