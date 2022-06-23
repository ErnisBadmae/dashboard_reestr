import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { ButtonRegistry } from '../../Buttons/button-registry/button-registry';
import { correctlyDate } from '../../../helpers/utils';

import '../card-item.scss';

function CurrentHolder(props) {
    const { isCardEditable } = useSelector((state) => state.proposalTest);
    console.log(isCardEditable, 'isCardEditable');
    const userRole = useSelector((state) => state.auth.user.roles);

    const navigate = useNavigate();
    const cardData = [
        {
            id: 1,
            title: 'Сокращенное наименование',
            value: props.currentHolder?.short_name,
            name: 'short_name',
        },
        {
            id: 2,
            title: 'Инн',
            value: props.currentHolder?.inn,
            name: 'inn',
        },
        {
            id: 3,
            title: 'ОГРН',
            value: props.currentHolder?.ogrn,
            name: 'ogrn',
        },
        {
            id: 4,
            title: 'Имя руководителя',
            value: props.currentHolder?.manager_name,
            name: 'manager_name',
        },
        {
            id: 5,
            title: 'Должность руководителя',
            value: props.currentHolder?.manager_position,
            name: 'manager_position',
        },
        {
            id: 6,
            title: 'Адрес',
            value: props.currentHolder?.address,
            name: 'address',
        },
        {
            id: 7,
            title: 'Контактный телефон',
            value: props.currentHolder?.phone,
            name: 'phone',
        },
        {
            id: 8,
            title: 'электронная почта',
            value: props.currentHolder?.email,
            name: 'email',
        },
        {
            id: 9,
            title: 'Сайт организации',
            value: props.currentHolder?.site,
            name: 'site',
        },
        {
            id: 10,
            title: 'Регистрационный номер',
            value: props.currentHolder?.registration_number,
            name: 'registration_number',
        },
        {
            id: 11,
            title: 'Дата регистрации',
            value: correctlyDate(props.currentHolder?.registration_date),
            name: 'registration_date',
        },
        //    {
        //        id: 12,
        //        title: 'Документ о регистрации',
        //        value: props.currentHolder?.registration_document,
        //        name: 'registration_document',
        //    },
        {
            id: 12,
            title: 'Дата исключения',
            value: correctlyDate(props.currentHolder?.exclusion_date),
            name: 'exclusion_date',
        },

        //    {
        //        id: 14,
        //        title: 'Документ об исключении',
        //        value: props.currentHolder?.exclusion_document,
        //        name: 'exclusion_document',
        //    },
    ];

    return (
        <>
            {props.currentHolder &&
                cardData.map((field) => {
                    return (
                        <div className="card__field" key={field.id}>
                            <div className="strong-title">{field.title}</div>

                            <div className="text__current-card">
                                {field.value}
                            </div>
                        </div>
                    );
                })}
            {props.drawBtn && userRole === 'user_admin' && (
                <div className="btn__edit-holder">
                    <ButtonRegistry
                        onClick={() => {
                            navigate(`/holder/${props.currentHolder.id}`);
                        }}
                        text={'Редактировать держателя'}
                    />
                </div>
            )}
            {/* {props.drawBtn && isCardEditable && ( */}
            <div className="btn__edit-holder">
                <ButtonRegistry
                    onClick={() => {
                        navigate(`/holder/${props.currentHolder.id}`);
                    }}
                    text={'Редактировать держателя'}
                />
            </div>
            {/* )} */}
        </>
    );
}

export default CurrentHolder;
