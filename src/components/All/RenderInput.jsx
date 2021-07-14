import React from "react";

const RenderInput = ({
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
                />
                <label
                    className={`input__label ${
                        touched && error ? "error" : ""
                    }`}
                >
                    {label}
                </label>

                {type === "password" ? (
                    passwordState ? (
                        <span
                            className="input__state"
                            onClick={setStatePasswordFunc}
                        >
                            Скрыть
                        </span>
                    ) : (
                        <span
                            className="input__state"
                            onClick={setStatePasswordFunc}
                        >
                            Показать
                        </span>
                    )
                ) : null}
            </div>

            {touched && error && <span className="input__error">{error}</span>}
        </>
    );
};

export default RenderInput;
