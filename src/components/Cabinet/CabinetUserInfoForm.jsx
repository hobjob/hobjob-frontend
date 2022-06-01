import React from "react";
import {useSelector} from "react-redux";
import {Field, reduxForm, formValueSelector} from "redux-form";
import {createTextMask} from "redux-form-input-masks";

import {RenderInput, BtnLoader} from "../";

import {validateInfo as validate} from "./validateInfo";

let CabinetUserInfoForm = ({
    handleSubmit,
    initialize,
    name,
    surname,
    dateOfBirth,
    phone,
    city,
    sex,
}) => {
    const {isSendUpdateUserInfo} = useSelector(({user}) => user);

    const selector = formValueSelector("cabinet-user-info-form");

    const {
        nameValue,
        surnameValue,
        dateOfBirthValue,
        phoneValue,
        cityValue,
        sexValue,
    } = useSelector((state) => {
        const {name, surname, dateOfBirth, phone, city, sex} = selector(
            state,
            "name",
            "surname",
            "dateOfBirth",
            "phone",
            "city",
            "sex"
        );
        return {
            nameValue: name,
            surnameValue: surname,
            dateOfBirthValue: dateOfBirth,
            phoneValue: phone,
            cityValue: city,
            sexValue: sex,
        };
    });

	React.useEffect(() => {
        initialize({
            name: name,
            surname: surname,
            dateOfBirth: dateOfBirth,
            phone: phone,
            city: city,
            sex: sex,
        });
    }, [name, surname, dateOfBirth, phone, city, sex]);

    const phoneMask = createTextMask({
        pattern: "+7 999 999 99-99",
        guide: false,
        stripMask: false,
    });

    const dateMask = createTextMask({
        pattern: "99.99.9999",
        stripMask: false,
    });

    return (
        <form className="cabinet-block-form" onSubmit={handleSubmit}>
            <div className="cabinet-block-form-input">
                <Field
                    component={RenderInput}
                    type="name"
                    name="name"
                    label="Имя"
                />
            </div>
            <div className="cabinet-block-form-input">
                <Field
                    component={RenderInput}
                    type="name"
                    name="surname"
                    label="Фамилия"
                />
            </div>
            <div className="cabinet-block-form-input">
                <Field
                    component={RenderInput}
                    type="text"
                    name="dateOfBirth"
                    label="Дата рождения"
                    {...dateMask}
                />
            </div>
            <div className="cabinet-block-form-input">
                <Field
                    component={RenderInput}
                    type="phone"
                    name="phone"
                    label="Номер телефона"
                    {...phoneMask}
                />
            </div>
            <div className="cabinet-block-form-input">
                <Field
                    component={RenderInput}
                    type="text"
                    name="city"
                    label="Город"
                />
            </div>
            {isSendUpdateUserInfo ? (
                <button
                    className="btn disabled cabinet-block-form-btn"
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
                        cityValue !== city ||
                        sexValue !== sex
                            ? ""
                            : "disabled"
                    } cabinet-block-form-btn`}
                >
                    Обновить
                </button>
            )}
        </form>
    );
};

CabinetUserInfoForm = reduxForm({
    form: "cabinet-user-info-form",
    validate,
})(CabinetUserInfoForm);

export default CabinetUserInfoForm;
