import React from "react";

const RenderInput = ({
    disabled,
    input,
    label,
    type,
    meta: {touched, error},
    classNameInput,
    setStatePasswordFunc,
    passwordState,
}) => {
    return (
        <>
            <div style={{position: "relative"}}>
                <input
                    {...input}
                    type={passwordState ? "text" : type}
                    className={`input__field ${classNameInput} ${
                        touched && error ? "error" : ""
                    }`}
                    required
                    disabled={disabled ? true : false}
                />
                <label
                    className={`input__label ${
                        touched && error ? "error" : ""
                    } ${disabled ? "active" : ""}`}
                >
                    {label}
                </label>

                {type === "password" ? (
                    <div className="input-state">
                        <span
                            className={`input-state__hidden ${
                                passwordState ? "active" : ""
                            }`}
                            onClick={setStatePasswordFunc}
                        >
                            Скрыть
                        </span>{" "}
                        <span
                            className={`input-state__visible ${
                                passwordState ? "active" : ""
                            }`}
                            onClick={setStatePasswordFunc}
                        >
                            Показать
                        </span>
                    </div>
                ) : null}
            </div>

            {touched && error && <span className="input__error">{error}</span>}
        </>
    );
};

export default RenderInput;
