import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { getCurrentProposalSdc } from '../../../store/proposal/actions';
import { ButtonRegistry } from '../../Buttons/button-registry/button-registry';
import Holder from '../../Holders/Holder';

import '../card-item.scss';

function CurrentHolder(props) {
    //     const navigate = useNavigate();

    //     const dispatch = useDispatch();
    //     const { id } = useParams();

    const { holders } = useSelector((state) => state.proposalTest);

    //     useEffect(() => {
    //         dispatch(getCurrentProposalSdc(id));
    //     }, [id, dispatch]);

    const cardData = [
        {
            id: 1,
            title: 'Сокращенное наименование',
            value: holders?.short_name,
            name: 'short_name',
        },
        {
            id: 2,
            title: 'Инн',
            value: holders?.inn,
            name: 'inn',
        },
        {
            id: 3,
            title: 'ОГРН',
            value: holders?.ogrn,
            name: 'ogrn',
        },
        {
            id: 4,
            title: 'Имя руководителя',
            value: holders?.manager_name,
            name: 'manager_name',
        },
        {
            id: 5,
            title: 'Должность руководителя',
            value: holders?.manager_position,
            name: 'manager_position',
        },
        {
            id: 6,
            title: 'Адрес',
            value: holders?.address,
            name: 'address',
        },
        {
            id: 7,
            title: 'Контактный телефон',
            value: holders?.phone,
            name: 'phone',
        },
        {
            id: 8,
            title: 'электронная почта',
            value: holders?.email,
            name: 'email',
        },
        {
            id: 9,
            title: 'Сайт организации',
            value: holders?.site,
            name: 'site',
        },
        {
            id: 10,
            title: 'Регистрационный номер',
            value: holders?.registration_number,
            name: 'registration_number',
        },
        {
            id: 11,
            title: 'Дата регистрации',
            value: holders?.registration_date,
            name: 'registration_date',
        },
        {
            id: 12,
            title: 'Документ о регистрации',
            value: holders?.registration_document,
            name: 'registration_document',
        },
        {
            id: 13,
            title: 'Дата исключения',
            value: holders?.exclusion_date,
            name: 'exclusion_date',
        },

        {
            id: 14,
            title: 'Документ об исключении',
            value: holders?.exclusion_document,
            name: 'exclusion_document',
        },
    ];

    return (
        <>
            {/* <div className="card__body"> */}

            {cardData.map((field) => {
                return (
                    <div className="card__field" key={field.id}>
                        <div className="strong-title">{field.title}</div>

                        <div className="text__current-card">{field.value}</div>
                    </div>
                );
            })}
            {/* <div className="btn__edit">
                    <ButtonRegistry
                        text={'Редактировать держателя'}
                        onClick={() => navigate(`/edit-card/${id}`)}
                    />
                </div> */}
            {/* <div className="card__field"></div> */}
            {/* </div> */}
        </>
    );
}

export default CurrentHolder;
