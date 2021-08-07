import $api from '../../http/';

export const sendCreatePayment = (data) => (dispatch) => {
	$api.post(`/payment`, data).then(({ data }) => {
		dispatch(setPayment(data))

		window.location.href = `/payment/${data.paymentNumber}`
	})
}

export const sendConfirmationPayment = (paymentNumber) => (dispatch) => {
	$api.get(`/payment/confirmation/${paymentNumber}`).then(() => {
		localStorage.removeItem("cart")
		window.location.href = `/go/training`
	}).catch(() => {
		window.location.href = `/go/training`
	})
}

export const fetchPaymentById = (id) => (dispatch) => {
	dispatch({
		type: "SET_LOADED_CREATE_PAYMENT",
		payload: false,
	})

	$api.get(`/payment/${id}`).then(({ data }) => {
		dispatch(setPayment(data))
	})
}

const setPayment = (payment) => ({
	type: "SET_PAYMENT",
	payload: payment
})