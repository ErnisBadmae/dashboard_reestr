import { Link } from 'react-router-dom';
import './registr.scss';

function RegisterSuccess(props) {
    const { text, redirect, textRedirect } = props;
    return (
        <div className="success__container">
            {text}
            <div className="success__backlogin">
                <Link to={redirect}>{textRedirect}</Link>
            </div>
        </div>
    );
}

export default RegisterSuccess;
