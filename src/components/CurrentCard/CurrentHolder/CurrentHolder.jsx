import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { useNavigate, useParams } from 'react-router-dom';
import { getHolders } from '../../../store/proposal/actions';
// import { ButtonRegistry } from '../../Buttons/button-registry/button-registry';
// import Holder from '../../Holders/Holder';

import '../card-item.scss';

function CurrentHolder(props) {
    //     const navigate = useNavigate();

    const dispatch = useDispatch();
    const { id } = useSelector(
        (state) => state.proposalTest.currentProposalSdc
    );

    const { holders } = useSelector((state) => state.proposalTest);

    const currentHolder = holders?.reduce((acc, el) => {
        return { ...acc, ...el };
    }, {});
    //TODO: отрисовать каждый объект

    //     console.log(card, 'cardcardcard');

    useEffect(() => {
        dispatch(getHolders(id));
    }, [id, dispatch]);

    const cardData = [
        {
            id: 1,
            title: 'Сокращенное наименование',
            value: currentHolder?.short_name,
            name: 'short_name',
        },
        {
            id: 2,
            title: 'Инн',
            value: currentHolder?.inn,
            name: 'inn',
        },
        {
            id: 3,
            title: 'ОГРН',
            value: currentHolder?.ogrn,
            name: 'ogrn',
        },
        {
            id: 4,
            title: 'Имя руководителя',
            value: currentHolder?.manager_name,
            name: 'manager_name',
        },
        {
            id: 5,
            title: 'Должность руководителя',
            value: currentHolder?.manager_position,
            name: 'manager_position',
        },
        {
            id: 6,
            title: 'Адрес',
            value: currentHolder?.address,
            name: 'address',
        },
        {
            id: 7,
            title: 'Контактный телефон',
            value: currentHolder?.phone,
            name: 'phone',
        },
        {
            id: 8,
            title: 'электронная почта',
            value: currentHolder?.email,
            name: 'email',
        },
        {
            id: 9,
            title: 'Сайт организации',
            value: currentHolder?.site,
            name: 'site',
        },
        {
            id: 10,
            title: 'Регистрационный номер',
            value: currentHolder?.registration_number,
            name: 'registration_number',
        },
        {
            id: 11,
            title: 'Дата регистрации',
            value: currentHolder?.registration_date,
            name: 'registration_date',
        },
        {
            id: 12,
            title: 'Документ о регистрации',
            value: currentHolder?.registration_document,
            name: 'registration_document',
        },
        {
            id: 13,
            title: 'Дата исключения',
            value: currentHolder?.exclusion_date,
            name: 'exclusion_date',
        },

        {
            id: 14,
            title: 'Документ об исключении',
            value: currentHolder?.exclusion_document,
            name: 'exclusion_document',
        },
    ];

    return (
        <>
            {/* <div className="card__body"> */}
            {holders.length === 0 ? (
                <></>
            ) : (
                cardData.map((field) => {
                    return (
                        <div className="card__field" key={field.id}>
                            <div className="strong-title">{field.title}</div>

                            <div className="text__current-card">
                                {field.value}
                            </div>
                        </div>
                    );
                })
            )}
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
