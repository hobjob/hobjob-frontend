import React from "react";
import {Field, reduxForm, InjectedFormProps} from "redux-form";

import {useTypedSelector} from "../../hooks/useTypedSelector";

import {RenderInput, BtnLoader} from "../";

import {validatePassword as validate} from "./validatePassword";

interface PasswordRecoveryNewPasswordFormProps {}

let PasswordRecoveryNewPasswordForm: React.FC<
    PasswordRecoveryNewPasswordFormProps &
        InjectedFormProps<{}, PasswordRecoveryNewPasswordFormProps>
> = ({handleSubmit}) => {
    const {isSend} = useTypedSelector(
        ({password_recovery}) => password_recovery
    );

    return (
        <form className="reglog-block" onSubmit={handleSubmit}>
            <div className="reglog-block-title">
                <h2 className="reglog-block__title">Новый пароль</h2>
            </div>
            <div className="input reglog-block-input">
                <Field
                    component={RenderInput}
                    type="password"
                    name="password"
                    label="Новый пароль"
                />
            </div>
            <div className="input reglog-block-input">
                <Field
                    component={RenderInput}
                    type="password"
                    name="password_repeat"
                    label="Повторите новый пароль"
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

export default reduxForm<{}, PasswordRecoveryNewPasswordFormProps>({
    form: "password-recovery-new-password-form",
    validate,
})(PasswordRecoveryNewPasswordForm);
