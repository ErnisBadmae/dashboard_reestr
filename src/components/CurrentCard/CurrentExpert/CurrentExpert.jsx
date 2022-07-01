import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentExpertOs } from '../../../store/proposal/actions';
import { useParams, useNavigate } from 'react-router-dom';
import { correctlyDate } from '../../../helpers/utils';

import '../card-item.scss';

function CurrentExpert(props) {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { id } = useParams();

    const { currentExpertOs } = useSelector((state) => state.proposalTest);
    const { isCardEditable } = useSelector((state) => state.proposalTest);

    const userRole = useSelector((state) => state.auth.user.roles);

    useEffect(() => {
        dispatch(getCurrentExpertOs(id));
    }, [dispatch, id]);

    const cardData = [
        {
            id: 1,
            title: 'Имя эксперта',
            value: currentExpertOs?.expert_name,
            name: 'expert_name',
        },
        {
            id: 2,
            title: 'Номер сертификата',
            value: currentExpertOs?.certificate_number,
            name: 'certificate_number',
        },
        {
            id: 3,
            title: 'Номер решения',
            value: currentExpertOs?.decision_number,
            name: 'decision_number',
        },
        {
            id: 4,
            title: 'Срок действия сертификата',
            value: correctlyDate(currentExpertOs?.valid),
            name: 'valid',
        },
        {
            id: 5,
            title: 'Сокращенное наименование',
            value: currentExpertOs?.short_name_organ_certification,
            name: 'short_name_organ_certification',
        },
        {
            id: 6,
            title: 'Область распространения',
            value: currentExpertOs?.area,
            name: 'area',
        },
        {
            id: 7,
            title: 'Опыт',
            value: currentExpertOs?.experience,
            name: 'experience',
        },
        {
            id: 8,
            title: 'Дата вступления',
            value: correctlyDate(currentExpertOs?.introduction_date),
            name: 'introduction_date',
        },
        {
            id: 9,
            title: 'Дата исключения',
            value: correctlyDate(currentExpertOs?.exclusion_date),
            name: 'exclusion_date',
        },
        {
            id: 10,
            title: 'Должность на дату исключения',
            value: currentExpertOs?.exclusion_position,
            name: 'exclusion_position',
        },
        {
            id: 11,
            title: 'Документ, подтверждающий вступление',
            value: currentExpertOs?.inclusion_document,
            name: 'inclusion_document',
        },
        {
            id: 12,
            title: 'Скан-документ',
            value: currentExpertOs?.contract_scan,
            name: 'contract_scan',
        },
        {
            id: 13,
            title: 'Снилс',
            value: currentExpertOs?.snils,
            name: 'snils',
        },
        {
            id: 14,
            title: 'Образование',
            value: currentExpertOs?.education,
            name: 'education',
        },
        {
            id: 15,
            title: 'Специализация',
            value: currentExpertOs?.education_speciality,
            name: 'education_speciality',
        },
        {
            id: 16,
            title: 'Дата образования',
            value: correctlyDate(currentExpertOs?.education_date),
            name: 'education_date',
        },
        {
            id: 17,
            title: 'Образовательная организация',
            value: currentExpertOs?.education_organization,
            name: 'education_organization',
        },
    ];

    return (
        <>
            <div className="login__title">Страница просмотра эксперта</div>
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
                        //     onClick={() => navigate(`/edit-card-os/${id}`)}
                    >
                        Редактировать
                    </button>
                )}

                {/* <button
                    className="btn__login declaration__btn"
                    type="submit"
                    // onClick={() => navigate(`/edit-card-os/${id}`)}
                >
                    Редактировать
                </button> */}
            </div>
        </>
    );
}

export default CurrentExpert;
