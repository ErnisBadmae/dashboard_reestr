import { Link } from 'react-router-dom';
import './breadCrumbs.scss';

export const BreadCrumbs = (props) => {
    const handleRegistry = (registry) => {
        switch (registry) {
            case 'sds-card':
                return (
                    <Link
                        className="bread-crumbs-link"
                        to={'/standard-certifications/list'}
                    >
                        Реестр СДС
                    </Link>
                );
            case 'os-card':
                return (
                    <Link
                        className="bread-crumbs-link"
                        to={'/organ-certifications/list'}
                    >
                        Реестр ОС
                    </Link>
                );
            case 'certificate-card':
                return (
                    <Link
                        className="bread-crumbs-link"
                        to={'/certificates/list'}
                    >
                        Реестр сертификатов
                    </Link>
                );
            case 'expert-card':
                return (
                    <Link
                        className="bread-crumbs-link"
                        to={'/organ-certification-experts/list'}
                    >
                        Реестр экспертов
                    </Link>
                );

            default:
        }
    };
    return (
        <div className="bread-crumbs">
            {handleRegistry(props.registry)}
            {props.children}
        </div>
    );
};
