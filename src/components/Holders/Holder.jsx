import React from 'react';
import { ButtonRegistry } from '../Buttons/button-registry/button-registry';
import { useNavigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { PlusOutlined } from '@ant-design/icons';

function Holder(props) {
    const { pathname } = useLocation();

    const navigate = useNavigate();

    const { isCardEditable } = useSelector((state) => state.proposalTest);
    const userRole = useSelector((state) => state.auth.user.roles);
    return (
        <div className="card__title__container">
            <div className="card__title">
                <strong className="strong-title">
                    {props.holderName
                        ? `Держатель: ${props.holderName}`
                        : `Держатель`}
                </strong>
            </div>

            {props.drawBtn && userRole === 'user_sdc' && isCardEditable && (
                <div className="btn__edit">
                    <ButtonRegistry
                        text={'Добавить держателя'}
                        icon={<PlusOutlined />}
                        className={'btn__login'}
                        onClick={() => navigate(`${pathname}/form-holder`)}
                    />
                </div>
            )}
        </div>
    );
}

export default Holder;
