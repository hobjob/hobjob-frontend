import React from "react";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import {Field, reduxForm} from "redux-form";

import {RenderInput} from "../";

import validate from "./validate";

let LoginForm = ({handleSubmit}) => {
    const [passwordState, setPasswordState] = React.useState(false);

    const {message} = useSelector(({login}) => login);

    const onClickSetPasswordState = () => {
        setPasswordState(!passwordState);
    };

    return (
        <form className="reglog-block" onSubmit={handleSubmit}>
            <div className="reglog-block-title">
                <h2 className="reglog-block__title">Войти</h2>
                <Link to="/register" className="reglog-block__subtitle">
                    Зарегистрироваться
                </Link>
            </div>

            <div className="input reglog-block-input">
                <Field
                    component={RenderInput}
                    type="text"
                    name="email"
                    label="Email"
                    className="input__field"
                />
            </div>
            <div className="input reglog-block-input">
                <Field
                    component={RenderInput}
                    setStatePasswordFunc={onClickSetPasswordState}
                    passwordState={passwordState}
                    type="password"
                    name="password"
                    label="Пароль"
                    className="input__field"
                />
            </div>

            <div className="reglog-block-error">
                <h4 className="reglog-block-error__title">{message}</h4>
            </div>

            <button className="btn reglog-block__btn">Войти</button>
        </form>
    );
};

LoginForm = reduxForm({
    form: "login",
    validate,
})(LoginForm);

export default LoginForm;
