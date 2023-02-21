import React from "react";

const RenderInput: React.FC<any> = ({
    disabled,
    input,
    label,
    type,
    meta: {touched, error},
    classNameInput,
}) => {
    const [passwordState, setPasswordState] = React.useState<boolean>(false);

    return (
        <>
            <div
                style={{position: "relative"}}
                className={`input ${touched && error ? "error" : ""}`}
            >
                <input
                    {...input}
                    type={passwordState ? "text" : type}
                    className={`input__field ${classNameInput}`}
                    placeholder={label}
                    disabled={disabled ? true : false}
                />

                {type === "password" ? (
                    <div className="input-state">
                        <span
                            className={`input-state__hidden ${
                                passwordState ? "active" : ""
                            }`}
                            onClick={() => setPasswordState(!passwordState)}
                        >
                            Скрыть
                        </span>
                        <span
                            className={`input-state__visible ${
                                passwordState ? "active" : ""
                            }`}
                            onClick={() => setPasswordState(!passwordState)}
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
