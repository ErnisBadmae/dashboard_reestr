import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';

import { viewCurrentRequestSdcUser } from '../../store/users/actions';
import { ButtonRegistry } from '../../components/Buttons/button-registry/button-registry';
import { correctlyDate } from '../../helpers/utils';

import './card-item.scss';

function CurrentRequestSdcUser(props) {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { id } = useParams();

    const { currentRequestSdcUser } = useSelector((state) => state.users);

    useEffect(() => {
        dispatch(viewCurrentRequestSdcUser(id));
    }, [id, dispatch]);

    const cardData = [
        {
            id: 1,
            title: 'Логин пользователя',
            value: currentRequestSdcUser?.inclusionRequest?.username,
        },
        {
            id: 2,
            title: 'Электронная почта',
            value: currentRequestSdcUser?.inclusionRequest?.email,
        },
        {
            id: 3,
            title: 'Имя',
            value: currentRequestSdcUser?.inclusionRequest?.firstname,
        },
        {
            id: 4,
            title: 'Фамилия',
            value: currentRequestSdcUser?.inclusionRequest?.secondname,
        },
        {
            id: 5,
            title: 'Отчество',
            value: currentRequestSdcUser?.inclusionRequest?.lastname,
        },
        {
            id: 6,
            title: 'Инн организации',
            value: currentRequestSdcUser?.inclusionRequest?.org_inn,
        },
        {
            id: 7,
            title: 'Огрн организации',
            value: currentRequestSdcUser?.inclusionRequest?.org_ogrn,
        },
        {
            id: 8,
            title: 'Сокращенное наименование организации',
            value: currentRequestSdcUser?.inclusionRequest?.org_short_name,
        },
        {
            id: 9,
            title: 'Комментарий',
            value: currentRequestSdcUser?.inclusionRequest?.post,
        },
        {
            id: 10,
            title: 'Телефон',
            value: currentRequestSdcUser?.inclusionRequest?.phone,
        },
        {
            id: 11,
            title: 'Дата создания заявки',
            value: correctlyDate(
                currentRequestSdcUser?.inclusionRequest?.dttm_created
            ),
        },
        {
            id: 12,
            title: 'Дата принятия решения',
            value: correctlyDate(
                currentRequestSdcUser?.inclusionRequest?.dttm_desicion
            ),
        },
        {
            id: 13,
            title: 'Комментарий модератора',
            value: currentRequestSdcUser?.inclusionRequest
                ?.comment_decision_admin,
        },
        //    {
        //        id: 14,
        //        title: 'Инн организации',
        //        value: currentRequestSdcUser?.org_inn,
        //    },
        //    {
        //        id: 15,
        //        title: 'Инн организации',
        //        value: user?.org_inn,
        //    },
        //    {
        //        id: 16,
        //        title: 'Инн организации',
        //        value: user?.org_inn,
        //    },
        //    {
        //        id: 6,
        //        title: 'Инн организации',
        //        value: user?.org_inn,
        //    },
    ];

    return (
        <>
            <div className="card__body">
                <div className="card__title">
                    <strong>Карточка просмотра заявления</strong>
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
            <div className="btn__card">
                <ButtonRegistry text="Назад" onClick={() => navigate(-1)} />
            </div>
        </>
    );
}

export default CurrentRequestSdcUser;
