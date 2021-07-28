import $api from '../../http/';

export const sendCreatePayment = (data) => (dispatch) => {
	dispatch({
		type: "SET_LOADED_CREATE_PAYMENT",
		payload: false,
	})

	$api.post(`/payment`, data).then(({ data }) => {
		dispatch(setPayment(data))
	})
}

const setPayment = (payment) => ({
	type: "SET_PAYMENT",
	payload: payment
})