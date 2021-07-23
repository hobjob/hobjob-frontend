import React from "react";
import {useSelector} from "react-redux";
import {Field, reduxForm} from "redux-form";

import {RenderInput, BtnLoader} from "../";

import {validateEmail as validate} from "./validateEmail";

let RepeatEmailForm = ({handleSubmit}) => {
    const {isSend} = useSelector(({repeat_email}) => repeat_email);
    return (
        <form className="reglog-block" onSubmit={handleSubmit}>
            <div className="reglog-block-title">
                <h2 className="reglog-block__title">Подтвердить email</h2>
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
                    Подтвердить email
                </button>
            )}
        </form>
    );
};

RepeatEmailForm = reduxForm({
    form: "repeat-email-form",
    validate,
})(RepeatEmailForm);

export default RepeatEmailForm;
