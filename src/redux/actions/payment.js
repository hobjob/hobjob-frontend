import $api from '../../http/';

export const fetchPaymentSubscribeById = (id) => (dispatch) => {
	dispatch({
		type: "SET_LOADED_PAYMENT",
		payload: false,
	})

	$api.get(`/payment/subscribe/${id}`).then(({ data }) => {
		dispatch(setSubscribePayment(data))
	}).catch(() => {
		window.location.href = `/go/training`
	})
}

export const sendCreateSubscribePayment = (typeSubscribe) => (dispatch) => {
	dispatch({
		type: "SET_SEND_SUBSCRIBE_PAYMENT",
		payload: true,
	})

	$api.post(`/payment/subscribe`, { typeSubscribe }).then(({ data }) => {
		window.location.href = `/payment/subscribe/${data.paymentNumber}`
	})
}

const setSubscribePayment = (payment) => ({
	type: "SET_SUBSCRIBE_PAYMENT",
	payload: payment
})