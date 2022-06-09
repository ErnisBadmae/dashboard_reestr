import React from 'react';
import { ButtonRegistry } from '../Buttons/button-registry/button-registry';
import { useNavigate } from 'react-router-dom';

function Holder(props) {
    const navigate = useNavigate();

    return (
        <>
            <div className="card__title">
                <strong>Держатель</strong>
            </div>
            <div className="btn__edit">
                <ButtonRegistry
                    text={'Добавить держателя'}
                    onClick={() => navigate(`/declaration`)}
                />
            </div>
        </>
    );
}

export default Holder;
