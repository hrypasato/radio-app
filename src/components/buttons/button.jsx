export const Button = ({ disabled, onClick, ...props }) => {
    const { text } = props;

    return (
        <button
            disabled={disabled}
        >
            {text}
        </button>
    )
};