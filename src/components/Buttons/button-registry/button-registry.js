import './button-registry.scss';

export const ButtonRegistry = (props) => {
    const { text, onClick, style, icon } = props;
    return (
        <button
            style={style}
            onClick={onClick}
            className="btn__login declaration__btn"
        >
            {icon}
            {text}
        </button>
    );
};
