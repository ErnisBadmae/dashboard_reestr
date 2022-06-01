import './button-registry.scss';

export const ButtonRegistry = (props) => {
    const { text, onClick } = props;
    return (
        <button onClick={onClick} className="button-registry">
            {text}
        </button>
    );
};
