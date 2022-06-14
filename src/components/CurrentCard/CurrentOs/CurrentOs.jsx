import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getOrganSertifications } from '../../../store/proposal/actions';

import '../card-item.scss';

function CurrentOsSdc(props) {
    const dispatch = useDispatch();
    const { id } = useSelector(
        (state) => state.proposalTest.currentProposalSdc
    );

    console.log(id, 'idFromCurrentOrganSertificationSdc');

    const { organSertificationSdc } = useSelector(
        (state) => state.proposalTest
    );

    const currentOrganSertificationSdc = organSertificationSdc?.reduce(
        (acc, el) => {
            return { ...acc, ...el };
        },
        {}
    );
    //TODO: отрисовать каждый объект

    useEffect(() => {
        dispatch(getOrganSertifications(id));
    }, [id]);

    const cardData = [
        {
            id: 1,
            title: 'Номер сертификата',
            value: currentOrganSertificationSdc?.certificate_number,
            name: 'certificate_number',
        },
        {
            id: 2,
            title: 'Дата сертификации',
            value: currentOrganSertificationSdc?.certificate_date,
            name: 'certificate_date',
        },
        {
            id: 3,
            title: 'Номер решения',
            value: currentOrganSertificationSdc?.decision_number,
            name: 'decision_number',
        },
        {
            id: 4,
            title: 'Полное наименование ОС',
            value: currentOrganSertificationSdc?.full_name_organ_certification,
            name: 'full_name_organ_certification',
        },
        {
            id: 5,
            title: 'Сокращенное наименование',
            value: currentOrganSertificationSdc?.short_name_organ_certification,
            name: 'short_name_organ_certification',
        },
        {
            id: 6,
            title: 'ИНН',
            value: currentOrganSertificationSdc?.inn,
            name: 'inn',
        },
        {
            id: 7,
            title: 'ОГРН',
            value: currentOrganSertificationSdc?.ogrn,
            name: 'ogrn',
        },
        {
            id: 8,
            title: 'Имя руководителя',
            value: currentOrganSertificationSdc?.manager_name,
            name: 'manager_name',
        },
        {
            id: 9,
            title: 'Адрес организации',
            value: currentOrganSertificationSdc?.address,
            name: 'address',
        },
        {
            id: 10,
            title: 'Электронная почта',
            value: currentOrganSertificationSdc?.email,
            name: 'email',
        },
        {
            id: 11,
            title: 'Сайт',
            value: currentOrganSertificationSdc?.site,
            name: 'site',
        },
        {
            id: 12,
            title: 'Область распространения',
            value: currentOrganSertificationSdc?.area,
            name: 'area',
        },
    ];

    return (
        <>
            {organSertificationSdc?.length === 0 ? (
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
        </>
    );
}

export default CurrentOsSdc;
