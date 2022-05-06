export const Button = ({ disabled, onClick, ...props}) => {
    const { content, value } = props;

    const handleClick = (e) => {
        if (disabled) {
            e.preventDefault();
            return;
        }
        onClick({ value });
    };

    return (
        <button
            className="mx-4 px-4 py-2 bg-sky-700 rounded-md text-md text-white disabled:opacity-75"
            disabled={disabled}
            onClick={handleClick}
        >
            {content}
        </button>
    );
}