import { NavLink } from 'react-router-dom';

import './button-registry.scss';

export const ButtonRegistry = (props) => {
    const { text, onClick, path } = props;
    return (
        <button onClick={onClick} className="button-registry">
            <NavLink to={path} className="button-registry__link">
                {text}
            </NavLink>
        </button>
    );
};
