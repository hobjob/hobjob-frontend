import React from "react";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {
    Field,
    reduxForm,
    InjectedFormProps,
    formValueSelector,
} from "redux-form";
import {createTextMask} from "redux-form-input-masks";

import {RenderInput, BtnLoader} from "../";

import {validateInfo as validate} from "./validateInfo";
import {validateInfoValues} from "./validateInfo";

let CabinetUserInfoForm: React.FC<
    validateInfoValues & InjectedFormProps<{}, validateInfoValues>
> = ({handleSubmit, initialize, name, surname, dateOfBirth, phone, city}) => {
    const {isSendUpdateUserInfo} = useTypedSelector(({user}) => user);

    const selector = formValueSelector("cabinet-user-info-form");

    const {nameValue, surnameValue, dateOfBirthValue, phoneValue, cityValue} =
        useTypedSelector((state) => {
            const {name, surname, dateOfBirth, phone, city} = selector(
                state,
                "name",
                "surname",
                "dateOfBirth",
                "phone",
                "city"
            );
            return {
                nameValue: name,
                surnameValue: surname,
                dateOfBirthValue: dateOfBirth,
                phoneValue: phone,
                cityValue: city,
            };
        });

    React.useEffect(() => {
        initialize({
            name: name,
            surname: surname,
            dateOfBirth: dateOfBirth,
            phone: phone,
            city: city,
        });
    }, [name, surname, dateOfBirth, phone, city]);

    return (
        <div className="cabinet-section-content">
            <form
                className="cabinet-section-content-form"
                onSubmit={handleSubmit}
            >
                <div className="cabinet-section-content-form-input">
                    <Field
                        component={RenderInput}
                        type="name"
                        name="name"
                        label="Имя"
                    />
                </div>
                <div className="cabinet-section-content-form-input">
                    <Field
                        component={RenderInput}
                        type="name"
                        name="surname"
                        label="Фамилия"
                    />
                </div>
                <div className="cabinet-section-content-form-input">
                    <Field
                        component={RenderInput}
                        type="text"
                        name="dateOfBirth"
                        label="Дата рождения"
                    />
                </div>
                <div className="cabinet-section-content-form-input">
                    <Field
                        component={RenderInput}
                        type="phone"
                        name="phone"
                        label="Номер телефона"
                        {...createTextMask({
                            pattern: "+7 999 999 99-99",
                            guide: false,
                            stripMask: false,
                        })}
                    />
                </div>
                <div className="cabinet-section-content-form-input">
                    <Field
                        component={RenderInput}
                        type="text"
                        name="city"
                        label="Город"
                    />
                </div>
                {isSendUpdateUserInfo ? (
                    <button
                        className="btn disabled cabinet-section-content-form-btn"
                        disabled
                    >
                        <BtnLoader />
                    </button>
                ) : (
                    <button
                        className={`btn ${
                            nameValue !== name ||
                            surnameValue !== surname ||
                            dateOfBirthValue !== dateOfBirth ||
                            phoneValue !== phone ||
                            cityValue !== city
                                ? ""
                                : "disabled"
                        } cabinet-section-content-form-btn`}
                    >
                        Сохранить
                    </button>
                )}
            </form>
        </div>
    );
};

export default reduxForm<{}, validateInfoValues>({
    form: "cabinet-user-info-form",
    validate,
})(CabinetUserInfoForm);
