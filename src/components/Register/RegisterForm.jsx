import React from "react";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import {Field, reduxForm} from "redux-form";

import {RenderInput, RenderCheckbox, BtnLoader} from "../";

import validate from "./validate";

let RegisterForm = ({handleSubmit}) => {
    const [passwordState, setPasswordState] = React.useState(false);

	const {isSend} = useSelector(({register}) => register);

    const onClickSetPasswordState = () => {
        setPasswordState(!passwordState);
    };

    return (
        <form className="reglog-block" onSubmit={handleSubmit}>
            <div className="reglog-block-title">
                <h2 className="reglog-block__title">
                    Зарегистрируйтесь в HobJob
                </h2>
                <Link to="/go/login" className="reglog-block__subtitle">
                    Войти
                </Link>
            </div>
            <div className="input reglog-block-input">
                <Field
                    component={RenderInput}
                    type="name"
                    name="name"
                    label="Имя"
                />
            </div>
            <div className="input reglog-block-input">
                <Field
                    component={RenderInput}
                    type="email"
                    name="email"
                    label="Email"
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
                />
            </div>
            <div className="reglog-block-checkbox">
                <Field
                    component={RenderCheckbox}
                    name="policy"
                    label="Я согласен с условиями обработки персональных данных"
                    id="reglog-checkbox"
                />
            </div>
            {isSend ? (
                <button className="btn reglog-block__btn disabled" disabled>
                    <BtnLoader />
                </button>
            ) : (
                <button className="btn reglog-block__btn">
                    Зарегистрироваться
                </button>
            )}
        </form>
    );
};

RegisterForm = reduxForm({
    form: "register",
    validate,
})(RegisterForm);

export default RegisterForm;
