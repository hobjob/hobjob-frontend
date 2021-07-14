import React from "react";

const RenderCheckbox = ({input, label, id, meta: {touched, error}}) => {
    return (
        <>
            <input {...input} type="checkbox" className="checkbox" id={id} />
            <label
                className={`checkbox__label ${touched && error ? "error" : ""}`}
                htmlFor={id}
            >
                {label}
            </label>
        </>
    );
};

export default RenderCheckbox;
