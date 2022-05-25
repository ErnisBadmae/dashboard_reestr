import { NavLink } from 'react-router-dom';
import './button-registry.scss';

export const ButtonRegistry = (props) => {
    const { text, path } = props;
    return (
        <button className="button-registry">
            <NavLink to={path} className="button-registry__link">
                {text}
            </NavLink>
        </button>
    );
};
