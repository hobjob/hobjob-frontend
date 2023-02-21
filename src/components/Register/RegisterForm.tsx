import React from "react";
import {Field, reduxForm, InjectedFormProps} from "redux-form";

import {useTypedSelector} from "../../hooks/useTypedSelector";

import {RenderInput, BtnLoader} from "../";

let RegisterForm: React.FC<InjectedFormProps<{}>> = ({handleSubmit}) => {
    const {isSend} = useTypedSelector(({register}) => register);

    return (
        <form className="reglog-form" onSubmit={handleSubmit}>
            <div className="reglog-form-title">
                <h2 className="reglog-form-title__title">
                    Нам нужна ваша электронная почта
                </h2>
            </div>

            <div className="input reglog-form-input">
                <Field
                    component={RenderInput}
                    type="text"
                    name="email"
                    label="Электронная почта"
                />
            </div>

            {isSend ? (
                <button className="btn reglog-form__btn disabled" disabled>
                    <BtnLoader />
                </button>
            ) : (
                <button className="btn reglog-form__btn">Перейти к оплате</button>
            )}
            <span className="reglog-form__policy">
                Нажимая на кнопку, я соглашаюсь на обработку{" "}
                <a href="/policy">персональных данных</a> и{" "}
                <a href="/public-offer">публичной офертой</a>
            </span>
        </form>
    );
};

export default reduxForm<{}>({
    form: "register-form",
})(RegisterForm);
