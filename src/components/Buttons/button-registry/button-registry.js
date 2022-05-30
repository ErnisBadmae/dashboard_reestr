// import { NavLink } from 'react-router-dom';
import './button-registry.scss';

export const ButtonRegistry = (props) => {
    const { text, onClick } = props;
    return (
        <button onClick={onClick} className="button-registry">
            {/* <NavLink to={path} className="button-registry__link">
                
            </NavLink> */}
            {text}
        </button>
    );
};
