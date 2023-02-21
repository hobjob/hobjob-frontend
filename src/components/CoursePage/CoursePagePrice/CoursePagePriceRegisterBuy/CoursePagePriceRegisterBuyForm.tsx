import React from "react";
import {useDispatch} from "react-redux";
import {Field, reduxForm, InjectedFormProps} from "redux-form";

import {useTypedSelector} from "../../../../hooks/useTypedSelector";

import {RenderInput, BtnLoader} from "../../../";

import validate from "./validate";

import {CoursePagePriceSections} from "../../../../redux/types/coursePage/ICoursePage";
import {changeCurrentSection} from "../../../../redux/actions/coursePage";

let CoursePagePriceRegisterBuyForm: React.FC<InjectedFormProps<{}>> = ({
    handleSubmit,
}) => {
    const dispatch = useDispatch();

    const {isSend} = useTypedSelector(({register}) => register);

    return (
        <form
            className="course-page-price-register-form"
            onSubmit={handleSubmit}
        >
            <div className="course-page-price-register-form-text">
                <button
                    className="course-page-price-register-form-text__back"
                    onClick={() =>
                        dispatch(
                            changeCurrentSection(
                                CoursePagePriceSections.CHOICE_TYPE_BUY
                            )
                        )
                    }
                    type="button"
                >
                    ← Назад
                </button>
                <h3 className="course-page-price-register-form-text__title">
                    Введите электронную почту для начала обучения
                </h3>
            </div>

            <div className="course-page-price-register-form-input">
                <Field
                    component={RenderInput}
                    type="text"
                    name="email"
                    label="Электронная почта"
                />
            </div>

            {isSend ? (
                <button
                    className="btn course-page-price-register-form__btn disabled"
                    disabled
                >
                    <BtnLoader />
                </button>
            ) : (
                <button
                    className="btn course-page-price-register-form__btn"
                    type="submit"
                >
                    Перейти к оплате
                </button>
            )}
            <span className="course-page-price-register-form__policy">
                Нажимая на кнопку, я соглашаюсь на обработку{" "}
                <a href="/policy">персональных данных</a> и{" "}
                <a href="/public-offer">публичной офертой</a>
            </span>
        </form>
    );
};

export default reduxForm<{}>({
    form: "course-page-price-register-buy-form",
    validate,
})(CoursePagePriceRegisterBuyForm);
