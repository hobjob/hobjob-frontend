import $api from '../../http/';

export const sendLogin = (data) => (dispatch) => {
	dispatch({
		type: "SET_LOADED_SEND_LOGIN",
		payload: true
	})

	$api.post('/login', data).then(({ data }) => {
		localStorage.setItem("accessToken", data.accessToken)

		dispatch({
			type: "SET_LOADED_SEND_LOGIN",
			payload: false
		})

		window.location.href = "/cabinet"
	}).catch(({ response }) => {
		dispatch(errorLogin(response.data.message))
	})
}

const errorLogin = (message) => ({
	type: "ERROR_SEND_LOGIN",
	payload: message
})