import React from "react";

const RenderSelect = ({
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
                {choise.map((item, index) => (
                    <option
                        value={item}
                        className="select__option"
                        key={`select__option-${index}`}
                    >
                        {item}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default RenderSelect;
