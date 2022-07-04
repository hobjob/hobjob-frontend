import React from "react";
import {Link} from "react-router-dom";
import {Field, reduxForm, InjectedFormProps} from "redux-form";

import {useTypedSelector} from "../../hooks/useTypedSelector";

import {RenderInput, BtnLoader} from "../";

import validate from "./validate";

interface LoginFormProps {
    registerLink?: string;
}

let LoginForm: React.FC<
    LoginFormProps & InjectedFormProps<{}, LoginFormProps>
> = ({handleSubmit, registerLink}) => {
    const {isSend} = useTypedSelector(({login}) => login);

    return (
        <form className="reglog-block" onSubmit={handleSubmit}>
            <div className="reglog-block-title">
                <h2 className="reglog-block__title">Войти</h2>
                <Link
                    to={registerLink ? registerLink : "/go/register"}
                    className="reglog-block__subtitle"
                >
                    Зарегистрироваться
                </Link>
            </div>

            <div className="input reglog-block-input">
                <Field
                    component={RenderInput}
                    type="text"
                    name="email"
                    label="Email"
                />
            </div>
            <div className="input reglog-block-input">
                <Field
                    component={RenderInput}
                    type="password"
                    name="password"
                    label="Пароль"
                />
            </div>

            {isSend ? (
                <button className="btn reglog-block__btn disabled" disabled>
                    <BtnLoader />
                </button>
            ) : (
                <button className="btn reglog-block__btn">Войти</button>
            )}

            <Link to="/go/password-recovery" className="reglog-block__link">
                Забыли пароль?
            </Link>
        </form>
    );
};

export default reduxForm<{}, LoginFormProps>({
    form: "login-form",
    validate,
})(LoginForm);
