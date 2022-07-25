import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { viewCurrentMessage } from '../../../store/messages/actions';
import { useParams, useNavigate } from 'react-router-dom';
import { correctlyDate } from '../../../helpers/utils';
import { ButtonRegistry } from '../../Buttons/button-registry/button-registry';

import '../card-item.scss';

function CurrentMessage(props) {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { messageId } = useParams();

    const { message } = useSelector((state) => state.messages?.currentMessage);

    useEffect(() => {
        dispatch(viewCurrentMessage(messageId));
    }, [dispatch, messageId]);

    const cardData = [
        {
            id: 1,
            title: 'Тема письма',
            value: message?.subject,
            name: 'certificate_number',
        },
        {
            id: 2,
            title: 'Сообщение',
            value: message?.body,
            name: 'certificate_date',
        },
        {
            id: 3,
            title: 'Отправитель',
            value: message?.sender?.email,
            name: 'decision_number',
        },
        {
            id: 4,
            title: 'Получатель',
            value: message?.recipient?.email,
            name: 'full_name_organ_certification',
        },
        {
            id: 5,
            title: 'Дата просмотра сообщения',
            value: correctlyDate(message?.view_date),
            name: 'short_name_organ_certification',
        },
        {
            id: 6,
            title: 'Дата создания',
            value: correctlyDate(message?.date_created),
            name: 'inn',
        },
    ];

    return (
        <>
            <div className="login__title">Страница просмотра сообщения</div>
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
            </div>
        </>
    );
}

export default CurrentMessage;
