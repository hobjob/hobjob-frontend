import { SubmissionError } from 'redux-form'

import $api from '../../http/';

export const sendRepeatEmail = (data) => (dispatch) => {
	dispatch({
		type: "SET_SEND_REPEAT_EMAIL",
		payload: true
	})

	return $api.post(`/repeat-email`, data).then(({ data }) => {
		dispatch({
			type: "SET_SEND_REPEAT_EMAIL",
			payload: false
		})
		
		window.location.href = "/training"
	}).catch(({ response }) => {
		dispatch({
			type: "SET_SEND_REPEAT_EMAIL",
			payload: false
		})

		if (response) {
			throw new SubmissionError({
				[response.data.fieldError]: response.data.message,
			});
		}
	})
}