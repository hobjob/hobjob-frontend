import React from "react";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {Field, reduxForm, InjectedFormProps} from "redux-form";

import {RenderInput, BtnLoader} from "../";

import {validatePassword as validate} from "./validatePassword";

interface CabinetUserPasswordProps {}

let CabinetUserPassword: React.FC<
    CabinetUserPasswordProps & InjectedFormProps<{}, CabinetUserPasswordProps>
> = ({handleSubmit, invalid, submitting, pristine}) => {
    const {isSendUpdateUserPassword} = useTypedSelector(({user}) => user);

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
                    Сохранить
                </button>
            )}
        </form>
    );
};

export default reduxForm<{}, CabinetUserPasswordProps>({
    form: "cabinet-user-password-form",
    validate,
})(CabinetUserPassword);
