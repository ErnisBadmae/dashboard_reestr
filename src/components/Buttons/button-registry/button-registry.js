import './button-registry.scss';

export const ButtonRegistry = (props) => {
    const { text, onClick, style } = props;
    return (
        <button style={style} onClick={onClick} className="button-registry">
            {text}
        </button>
    );
};
