import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';

import { viewCurrentUser } from '../../../store/users/actions/getUsersList';
import { ButtonRegistry } from '../../Buttons/button-registry/button-registry';

import '../card-item.scss';

function CurrentUser(props) {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { id } = useParams();

    const { user } = useSelector((state) => state.users.currentUser);

    useEffect(() => {
        dispatch(viewCurrentUser(id));
    }, [id, dispatch]);

    const cardData = [
        {
            id: 1,
            title: 'Электронная почта',
            value: user?.email,
        },
        {
            id: 2,
            title: 'Тип пользователя',
            value: user?.user_role?.user_type,
        },
        {
            id: 3,
            title: 'Аккаунт',
            value: user?.user_role?.title,
        },
        {
            id: 4,
            title: 'Описание',
            value: user?.user_role?.description,
        },
    ];

    return (
        <>
            <div className="card__body">
                <div className="card__title">
                    <strong>Карточка пользователя</strong>
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

export default CurrentUser;
