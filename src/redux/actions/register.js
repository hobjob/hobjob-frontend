import $api from '../../http/';

export const sendRegister = (data) => (dispatch) => {
	dispatch({
		type: "SET_LOADED_SEND_REGISTER",
		payload: true
	})

	$api.post(`/register`, data).then(({ data }) => {
		localStorage.setItem("accessToken", data.accessToken)

		dispatch({
			type: "SET_LOADED_SEND_REGISTER",
			payload: false
		})

		window.location.href = "/cabinet"
	}).catch(({ response }) => {
		dispatch(errorRegister(response.data.message))
	})
}

const errorRegister = (message) => ({
	type: "ERROR_SEND_REGISTER",
	payload: message
})