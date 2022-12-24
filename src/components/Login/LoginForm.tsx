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
        <form className="reglog-form" onSubmit={handleSubmit}>
            <div className="reglog-form-title">
                <h2 className="reglog-form__title">Войти</h2>
                <Link
                    to={registerLink ? registerLink : "/go/register"}
                    className="reglog-form__subtitle"
                >
                    Зарегистрироваться
                </Link>
            </div>
            <div className="input reglog-form-input">
                <Field
                    component={RenderInput}
                    type="text"
                    name="email"
                    label="Email"
                />
            </div>
            <div className="input reglog-form-input">
                <Field
                    component={RenderInput}
                    type="password"
                    name="password"
                    label="Пароль"
                />
			</div>
			
            {isSend ? (
                <button className="btn reglog-form__btn disabled" disabled>
                    <BtnLoader />
                </button>
            ) : (
                <button className="btn reglog-form__btn">Войти</button>
			)}
			
            <div className="reglog-form-recovery">
                <Link
                    to="/go/password-recovery"
                    className="reglog-form-recovery__link"
                >
                    Забыли пароль?
                </Link>
            </div>
        </form>
    );
};

export default reduxForm<{}, LoginFormProps>({
    form: "login-form",
    validate,
})(LoginForm);
