import React from "react";
import {Field, reduxForm, InjectedFormProps} from "redux-form";

import {useTypedSelector} from "../../hooks/useTypedSelector";

import {RenderInput, BtnLoader} from "../";

import {validateEmail as validate} from "./validateEmail";

interface PasswordRecoveryEmailFormProps {}

let PasswordRecoveryEmailForm: React.FC<
    PasswordRecoveryEmailFormProps &
        InjectedFormProps<{}, PasswordRecoveryEmailFormProps>
> = ({handleSubmit}) => {
    const {isSend} = useTypedSelector(
        ({password_recovery}) => password_recovery
    );

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

export default reduxForm<{}, PasswordRecoveryEmailFormProps>({
    form: "password-recovery-email-form",
    validate,
})(PasswordRecoveryEmailForm);
