import './button-registry.scss';

export const ButtonRegistry = (props) => {
    const { text, onClick, style, icon, className } = props;
    return (
        <button style={style} onClick={onClick} className={className}>
            {icon}
            {text}
        </button>
    );
};
