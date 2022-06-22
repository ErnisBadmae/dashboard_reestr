import React from 'react';
import { ButtonRegistry } from '../Buttons/button-registry/button-registry';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Holder(props) {
    const navigate = useNavigate();

    const { isCardEditable } = useSelector(
        (state) => state.proposalTest.isCardEditable
    );
    const userRole = useSelector((state) => state.auth.user.roles);

    return (
        <div className="card__title__container">
            <div className="card__title">
                <strong>
                    {props.holderName
                        ? `Держатель: ${props.holderName}`
                        : `Держатель`}
                </strong>
            </div>
            {props.drawBtn && isCardEditable && (
                <div className="btn__edit">
                    <ButtonRegistry
                        text={'Добавить держателя'}
                        onClick={() => navigate(`/declaration`)}
                    />
                </div>
            )}
            {props.drawBtn && userRole === 'user_admin' && (
                <div className="btn__edit">
                    <ButtonRegistry
                        text={'Добавить держателя'}
                        onClick={() => navigate(`/declaration`)}
                    />
                </div>
            )}
        </div>
    );
}

export default Holder;
