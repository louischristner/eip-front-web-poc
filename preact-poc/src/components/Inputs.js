import { h } from 'preact';

const InputField = ({
    type,
    value,
    placeholder,
    onChange,
}) => {
    return (
        <div>
            <input
                type={type}
                value={value}
                placeholder={placeholder}
                onChange={onChange}
            />
        </div>
    );
};

const InputButton = ({ text, onClick }) => {
    return (
        <div>
            <button onClick={onClick}>{text}</button>
        </div>
    );
};

export { InputField, InputButton };