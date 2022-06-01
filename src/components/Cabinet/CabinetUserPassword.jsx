import React from "react";
import {useSelector} from "react-redux";
import {Field, reduxForm} from "redux-form";

import {RenderInput, BtnLoader} from "../";

import {validatePassword as validate} from "./validatePassword";

let CabinetUserPassword = ({handleSubmit, invalid, submitting, pristine}) => {
    const {isSendUpdateUserPassword} = useSelector(({user}) => user);

    return (
        <form className="cabinet-block-form" onSubmit={handleSubmit}>
            <div className="cabinet-block-form-input">
                <Field
                    component={RenderInput}
                    type="password"
                    name="currentPassword"
                    label="Текущий пароль"
                />
            </div>
            <div className="cabinet-block-form-input">
                <Field
                    component={RenderInput}
                    type="password"
                    name="newPassword"
                    label="Новый пароль"
                />
            </div>
            <div className="cabinet-block-form-input">
                <Field
                    component={RenderInput}
                    type="password"
                    name="newPasswordRepeat"
                    label="Повторите новый пароль"
                />
            </div>
            {isSendUpdateUserPassword ? (
                <button
                    className="btn disabled cabinet-block-form-btn"
                    disabled
                >
                    <BtnLoader />
                </button>
            ) : (
                <button
                    className={`btn ${
                        invalid ? "disabled" : ""
                    } cabinet-block-form-btn`}
                    disabled={invalid || submitting || pristine}
                >
                    Обновить
                </button>
            )}
        </form>
    );
};

CabinetUserPassword = reduxForm({
    form: "cabinet-user-password-form",
    validate,
})(CabinetUserPassword);

export default CabinetUserPassword;
