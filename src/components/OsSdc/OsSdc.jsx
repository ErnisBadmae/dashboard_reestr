import React, { useEffect } from 'react';
import { ButtonRegistry } from '../Buttons/button-registry/button-registry';
import { useNavigate, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getOrganSertifications } from '../../store/proposal/actions';
import { PlusOutlined } from '@ant-design/icons';

import '../CurrentCard/card-item.scss';

function OsSdc(props) {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { isCardEditable } = useSelector((state) => state.proposalTest);
    const userRole = useSelector((state) => state.auth.user.roles);

    const { organSertificationSdc } = useSelector(
        (state) => state.proposalTest
    );
    const { id } = useSelector(
        (state) => state?.proposalTest?.currentProposalSdc
    );

    useEffect(() => {
        dispatch(getOrganSertifications(id));
    }, [dispatch, id]);
    return (
        <>
            <div className="card__body">
                <div className="card__title">
                    <strong className="strong-title">
                        Органы по сертификации{' '}
                    </strong>
                </div>

                {isCardEditable && userRole === 'user_sdc' && (
                    <div className="btn__edit">
                        <ButtonRegistry
                            text={'Добавить ОС'}
                            className={'btn__login'}
                            icon={<PlusOutlined />}
                            onClick={() =>
                                navigate(`/request_sdc/${id}/form-os-sdc`)
                            }
                        />
                    </div>
                )}

                {organSertificationSdc?.length > 0 ? (
                    organSertificationSdc.map((el) => {
                        return (
                            <Link
                                to={`/current-os/${el.id}`}
                                key={el.id}
                                className="card__field strong-title"
                            >
                                {el.full_name_organ_certification}
                            </Link>
                        );
                    })
                ) : (
                    <div>Данных не найдено</div>
                )}
            </div>
        </>
    );
}

export default OsSdc;
