import React from "react";
import {Field, reduxForm} from "redux-form";
import {createTextMask} from "redux-form-input-masks";

import { RenderInput, BtnLoader } from "../";

import validate from "./validate";

let ReferralsBlockForm = ({handleSubmit}) => {
    const cardMask = createTextMask({
        pattern: "9999 9999 9999 9999",
        stripMask: false,
    });

    return (
        <form
            className="referrals-info-block-content referrals-info-block-content-form"
            onSubmit={handleSubmit}
        >
            <div className="referrals-info-block-content-form-top">
                <h6 className="referrals-info-block-content-form__title">
                    Реквизиты
                </h6>
                <div className="input referrals-info-block-content-form-input">
                    <Field
                        component={RenderInput}
                        type="card"
                        name="card"
                        label="Номер карты"
                        {...cardMask}
                    />
                </div>
            </div>
            <div className="referrals-info-block-content-form-bottom">
                <button className="btn referrals-info-block-content-form__btn">
                    Отправить заявку
                </button>
            </div>
        </form>
    );
};

ReferralsBlockForm = reduxForm({
    form: "referrals-form",
    validate,
})(ReferralsBlockForm);

export default ReferralsBlockForm;
