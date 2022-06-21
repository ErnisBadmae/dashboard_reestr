import React from 'react';
import { ButtonRegistry } from '../Buttons/button-registry/button-registry';
import { useNavigate } from 'react-router-dom';

function Holder(props) {
    const navigate = useNavigate();

    return (
        <div className="card__title__container">
            <div className="card__title">
                <strong>{props.holderName ? `Держатель: ${props.holderName}` : `Держатель`}</strong>
            </div>
            {props.drawBtn && (
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
