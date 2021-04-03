import React from 'react';

type FieldProps = {
    type: string;
    value: string;
    placeholder: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const InputField: React.FC<FieldProps> = ({
    type,
    value,
    placeholder,
    onChange,
}: FieldProps) => {
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

type ButtonProps = {
    text: string;
    onClick?: () => void;
};

const InputButton: React.FC<ButtonProps> = ({ text, onClick }: ButtonProps) => {
    return (
        <div>
            <button onClick={onClick}>{text}</button>
        </div>
    );
};

export { InputField, InputButton };
