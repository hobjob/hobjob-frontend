import { SubmissionError } from 'redux-form'

import $api from '../../http/';

export const sendRegister = (data, redirect = {}) => (dispatch) => {
	dispatch({
		type: "SET_SEND_REGISTER",
		payload: true
	})

	return $api.post(`/register`, data).then(({ data }) => {
		localStorage.setItem("accessToken", data.accessToken)

		if (!Object.keys(redirect).length) {
			window.location.href = "/go/training"
		} else {
			window.location.href = `/${redirect.redirect}`
		}

	}).catch(({ response }) => {
		dispatch({
			type: "SET_SEND_REGISTER",
			payload: false
		})

		if (response) {
			throw new SubmissionError({
				[response.data.fieldError]: response.data.message,
			});
		}
	})
}