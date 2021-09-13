import { SubmissionError } from 'redux-form'

import $api from '../../http/';

export const sendLogin = (data, functionSuccess) => (dispatch) => {
	dispatch({
		type: "SET_SEND_LOGIN",
		payload: true
	})

	return $api.post('/login', data).then(({ data }) => {
		localStorage.setItem("accessToken", data.accessToken)

		functionSuccess(data.user.courses)

		dispatch({
			type: "SET_SEND_LOGIN",
			payload: false
		})
	}).catch(({ response }) => {
		dispatch({
			type: "SET_SEND_LOGIN",
			payload: false
		})

		if (response) {
			throw new SubmissionError({
				[response.data.fieldError]: response.data.message,
			});
		}
	})
}