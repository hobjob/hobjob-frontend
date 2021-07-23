import React from "react";
import {useSelector} from "react-redux";
import {Field, reduxForm} from "redux-form";

import {RenderInput, BtnLoader} from "../";

import {validateEmail as validate} from "./validateEmail";

let PasswordRecoveryEmailForm = ({handleSubmit}) => {
    const {isSend} = useSelector(({password_recovery}) => password_recovery);

    return (
        <form className="reglog-block" onSubmit={handleSubmit}>
            <div className="reglog-block-title">
                <h2 className="reglog-block__title">Восстановить пароль</h2>
            </div>
            <div className="input reglog-block-input">
                <Field
                    component={RenderInput}
                    type="email"
                    name="email"
                    label="Email"
                />
            </div>

            {isSend ? (
                <button className="btn reglog-block__btn disabled" disabled>
                    <BtnLoader />
                </button>
            ) : (
                <button className="btn reglog-block__btn">
                    Восстановить пароль
                </button>
            )}
        </form>
    );
};

PasswordRecoveryEmailForm = reduxForm({
    form: "password-recovery-email-form",
    validate,
})(PasswordRecoveryEmailForm);

export default PasswordRecoveryEmailForm;
