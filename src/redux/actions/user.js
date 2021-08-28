import { SubmissionError } from 'redux-form'

import $api from '../../http/';

export const fetchUser = () => (dispatch) => {
	$api.get("/me").then(({ data }) => {
		dispatch(setUser(data))
	})
}

export const fetchUpdateUser = (data) => (dispatch) => {
	dispatch({
		type: "SET_SEND_UPDATE_USER_INFO",
		payload: true
	})

	$api.put("/me/info", data).then(({ data }) => {
		dispatch({
			type: "SET_SEND_UPDATE_USER_INFO",
			payload: false
		})

		dispatch(setUser(data))
	})
}

export const fetchUpdateUserPassword = (data) => (dispatch) => {
	dispatch({
		type: "SET_SEND_UPDATE_USER_PASSWORD",
		payload: true
	})

	return $api.put("/me/password", data).then(({ data }) => {
		window.location.reload()
	}).catch(({ response }) => {
		dispatch({
			type: "SET_SEND_UPDATE_USER_PASSWORD",
			payload: false
		})

		if (response) {
			throw new SubmissionError({
				[response.data.fieldError]: response.data.message,
			});
		}
	})
}

export const fetchConfirmedUser = (hash) => (dispatch) => {
	$api.get(`/confirmed/${hash}`).then(({ data }) => {
		dispatch(setUser(data))

		window.location.href = "/go/training"
	}).catch(() => {
		window.location.href = "/go/training"
	})
}

const setUser = (user) => ({
	type: "SET_USER",
	payload: user
})