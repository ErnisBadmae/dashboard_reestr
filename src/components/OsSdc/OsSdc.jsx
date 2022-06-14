import React from 'react';
import { ButtonRegistry } from '../Buttons/button-registry/button-registry';
import { useNavigate } from 'react-router-dom';

function OsSdc(props) {
    const navigate = useNavigate();

    return (
        <>
            <div className="card__title">
                <strong>ОС СДС</strong>
            </div>
            <div className="btn__edit">
                <ButtonRegistry
                    text={'Добавить ОС'}
                    onClick={() => navigate(`/form-os-sdc`)}
                />
            </div>
        </>
    );
}

export default OsSdc;
