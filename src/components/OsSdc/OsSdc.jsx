import React, { useEffect } from 'react';
import { ButtonRegistry } from '../Buttons/button-registry/button-registry';
import { useNavigate, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getOrganSertifications } from '../../store/proposal/actions';

function OsSdc(props) {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { organSertificationSdc } = useSelector(
        (state) => state.proposalTest
    );
    const { id } = useSelector(
        (state) => state.proposalTest.currentProposalSdc
    );

    useEffect(() => {
        dispatch(getOrganSertifications(id));
    }, [dispatch, id]);
    return (
        <>
            <div className="card__body">
                <div className="card__title">
                    <strong>ОС СДС</strong>
                </div>
                <div className="btn__edit">
                    <ButtonRegistry
                        text={'Добавить ОС'}
                        onClick={() => navigate(`/form-os-sdc`)}
                    />
                </div>

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
