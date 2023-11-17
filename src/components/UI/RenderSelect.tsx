import React from "react";

interface RenderSelectProps {
	disabled: boolean
	input: any
	label: string
	choise: string[]
	meta: any
}

const RenderSelect: React.FC<RenderSelectProps> = ({
    disabled,
    input,
    label,
    choise,
    meta: {touched, error},
}) => {
    return (
        <div className="select">
            <label
                className={`select__label ${touched && error ? "error" : ""}`}
            >
                {label}
            </label>
            <select
                {...input}
                className={`select__field ${touched && error ? "error" : ""}`}
                disabled={disabled ? true : false}
            >
                {choise.map((title, index) => (
                    <option
                        value={title}
                        className="select__option"
                        key={`select__option-${index}`}
                    >
                        {title}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default RenderSelect;
