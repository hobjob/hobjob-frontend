import React from 'react'
import { Field, reduxForm, InjectedFormProps } from "redux-form";

import { RenderInput, RenderRadio } from "../../";

const CabinetSubscribeDisableFeedbackForm: React.FC<InjectedFormProps<{}>> = ({ handleSubmit, invalid, pristine, submitting }) => {
	return (
		<form className='cabinet-subscribe-disable-block-content-text-form' onSubmit={handleSubmit}>
			<div className="cabinet-subscribe-disable-block-content-text-form-checkbox">
				<Field component={RenderRadio} name="feedback" type='radio' value={`Дорогая цена подписки`} />
			</div>
			<div className="cabinet-subscribe-disable-block-content-text-form-checkbox">
				<Field component={RenderRadio} name="feedback" type='radio' value={`Не понравилось качество курсов`} />
			</div>
			<div className="cabinet-subscribe-disable-block-content-text-form-checkbox">
				<Field component={RenderRadio} name="feedback" type='radio' value={`Мне нужен был только один курс`} />
			</div>
			<div className="cabinet-subscribe-disable-block-content-text-form-checkbox">
				<Field component={RenderRadio} name="feedback" type='radio' value={`Мало курсов по тематике которая мне интересна`} />
			</div>
			<div className="cabinet-subscribe-disable-block-content-text-form-checkbox">
				<Field component={RenderRadio} name="feedback" type='radio' value={`Другая причина`} />

				<Field component={RenderInput} name="feedback__comment" type='text' label={"Опишите причину"} />
			</div>


			<button className={`btn ${invalid || pristine || submitting ? "disabled" : ""} cabinet-subscribe-disable-block-content-text-form__btn`} disabled={invalid || pristine || submitting}>
				Отменить подписку
			</button>
		</form>
	)
}


export default reduxForm<{}>({
	form: "cabinet-subscribe-disable-feedback-form",
	// validate,
})(CabinetSubscribeDisableFeedbackForm);