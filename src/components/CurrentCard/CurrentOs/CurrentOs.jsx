import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentOsSdc } from '../../../store/proposal/actions';
import { useParams, useNavigate } from 'react-router-dom';

import '../card-item.scss';

function CurrentOsSdc(props) {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { id } = useParams();

    const { currentOsSdcCard } = useSelector((state) => state.proposalTest);

    const { isCardEditable } = useSelector((state) => state.proposalTest);
    const userRole = useSelector((state) => state.auth.user.roles);

    useEffect(() => {
        dispatch(getCurrentOsSdc(id));
    }, [dispatch, id]);

    const cardData = [
        {
            id: 1,
            title: 'Номер сертификата',
            value: currentOsSdcCard?.certificate_number,
            name: 'certificate_number',
        },
        {
            id: 2,
            title: 'Дата сертификации',
            value: currentOsSdcCard?.certificate_date,
            name: 'certificate_date',
        },
        {
            id: 3,
            title: 'Номер решения',
            value: currentOsSdcCard?.decision_number,
            name: 'decision_number',
        },
        {
            id: 4,
            title: 'Полное наименование ОС',
            value: currentOsSdcCard?.full_name_organ_certification,
            name: 'full_name_organ_certification',
        },
        {
            id: 5,
            title: 'Сокращенное наименование',
            value: currentOsSdcCard?.short_name_organ_certification,
            name: 'short_name_organ_certification',
        },
        {
            id: 6,
            title: 'ИНН',
            value: currentOsSdcCard?.inn,
            name: 'inn',
        },
        {
            id: 7,
            title: 'ОГРН',
            value: currentOsSdcCard?.ogrn,
            name: 'ogrn',
        },
        {
            id: 8,
            title: 'Имя руководителя',
            value: currentOsSdcCard?.manager_name,
            name: 'manager_name',
        },
        {
            id: 9,
            title: 'Адрес организации',
            value: currentOsSdcCard?.address,
            name: 'address',
        },
        {
            id: 10,
            title: 'Электронная почта',
            value: currentOsSdcCard?.email,
            name: 'email',
        },
        {
            id: 11,
            title: 'Сайт',
            value: currentOsSdcCard?.site,
            name: 'site',
        },
        {
            id: 12,
            title: 'Область распространения',
            value: currentOsSdcCard?.area,
            name: 'area',
        },
    ];

    return (
        <>
            <div className="login__title">Страница просмотра ОС</div>
            <div className="card__body">
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
                >
                    Назад
                </button>
                {props.drawBtn && userRole === 'user_admin' && (
                    <button
                        className="btn__login declaration__btn"
                        type="submit"
                        onClick={() => navigate(`/edit-card-os/${id}`)}
                    >
                        Редактировать
                    </button>
                )}
                {/* {props.drawBtn && isCardEditable && ( */}
                <button
                    className="btn__login declaration__btn"
                    type="submit"
                    onClick={() => navigate(`/edit-card-os/${id}`)}
                >
                    Редактировать
                </button>
                {/* )} */}
            </div>
        </>
    );
}

export default CurrentOsSdc;
