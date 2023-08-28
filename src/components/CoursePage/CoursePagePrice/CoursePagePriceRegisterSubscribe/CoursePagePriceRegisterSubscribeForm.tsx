import React from "react";
import { useDispatch } from "react-redux";
import { Field, reduxForm, InjectedFormProps } from "redux-form";

import { useTypedSelector } from "../../../../hooks/useTypedSelector";

import { RenderInput, BtnLoader } from "../../../";

import validate from "./validate";

import { CoursePagePriceSections } from "../../../../redux/types/coursePage/ICoursePage";
import { changePriceCurrentSection } from "../../../../redux/actions/coursePage";

let CoursePagePriceRegisterSubscribeForm: React.FC<InjectedFormProps<{}>> = ({
	handleSubmit,
}) => {
	const dispatch = useDispatch();

	const { isSend } = useTypedSelector(({ register }) => register);

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
							changePriceCurrentSection(
								CoursePagePriceSections.CHOICE_TYPE_BUY
							)
						)
					}
					type="button"
				>
					<svg viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M0.256186 10.7549H2.06259L2.04609 3.94342L11.8323 13.7297L13.1084 12.4536L3.32219 2.66731L10.1336 2.68388V0.877441H0.256186V10.7549Z" />
					</svg>

					Назад
				</button>
				<h3 className="course-page-price-register-form-text__title">
					Создайте аккаунт для начала обучения
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

			<div className="course-page-price-register-form-input">
				<Field
					component={RenderInput}
					type="password"
					name="password"
					label="Придумайте пароль"
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
	form: "course-page-price-register-subscribe-form",
	validate,
})(CoursePagePriceRegisterSubscribeForm);
