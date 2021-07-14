import React from "react";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import {Field, reduxForm} from "redux-form";

import {RenderInput, RenderCheckbox} from "../";

import validate from "./validate";

let RegisterForm = ({handleSubmit}) => {
    const [passwordState, setPasswordState] = React.useState(false);

    const {message} = useSelector(({register}) => register);

    const onClickSetPasswordState = () => {
        setPasswordState(!passwordState);
    };

    return (
        <form className="reglog-block" onSubmit={handleSubmit}>
            <div className="reglog-block-title">
                <h2 className="reglog-block__title">
                    Зарегистрируйтесь в HobJob
                </h2>
                <Link to="/login" className="reglog-block__subtitle">
                    Войти
                </Link>
            </div>
            <div className="input reglog-block-input">
                <Field
                    component={RenderInput}
                    type="name"
                    name="name"
                    label="Имя"
                    className="input__field"
                />
            </div>
            <div className="input reglog-block-input">
                <Field
                    component={RenderInput}
                    type="email"
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
            <div className="reglog-block-checkbox">
                <Field
                    component={RenderCheckbox}
                    name="policy"
                    label="Я согласен с условиями обработки персональных данных"
                    id="reglog-checkbox"
                />
            </div>
            <button className="btn reglog-block__btn">
                Зарегистрироваться
            </button>
        </form>
    );
};

RegisterForm = reduxForm({
    form: "register",
    validate,
})(RegisterForm);

export default RegisterForm;
