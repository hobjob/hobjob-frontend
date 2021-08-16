import $api from '../../http/';

export const sendCreateCoursesPayment = (data) => (dispatch) => {
	$api.post(`/payment/courses`, data).then(({ data }) => {
		dispatch(setCoursesPayment(data))

		window.location.href = `/payment/courses/${data.paymentNumber}`
	})
}

export const sendConfirmationCoursesPayment = (paymentNumber) => (dispatch) => {
	$api.get(`/payment/courses/confirmation/${paymentNumber}`).then(() => {
		localStorage.removeItem("cart")
		window.location.href = `/go/training`
	}).catch(() => {
		window.location.href = `/go/training`
	})
}

export const fetchPaymentCoursesById = (id) => (dispatch) => {
	dispatch({
		type: "SET_LOADED_PAYMENT",
		payload: false,
	})

	$api.get(`/payment/courses/${id}`).then(({ data }) => {
		dispatch(setCoursesPayment(data))
	})
}

export const sendCreateProSubscribePayment = () => (dispatch) => {
	$api.get(`/payment/pro`).then(({ data }) => {
		dispatch(setProSubscribePayment(data))

		window.location.href = `/payment/pro/${data.paymentNumber}`
	})
}

export const sendConfirmationProSubscribePayment = (paymentNumber) => (dispatch) => {
	$api.get(`/payment/pro/confirmation/${paymentNumber}`).then(() => {
		localStorage.removeItem("cart")
		window.location.href = `/go/cabinet`
	}).catch(() => {
		window.location.href = `/go/cabinet`
	})
}

export const fetchPaymentProSubscribeById = (id) => (dispatch) => {
	dispatch({
		type: "SET_LOADED_PAYMENT",
		payload: false,
	})

	$api.get(`/payment/pro/${id}`).then(({ data }) => {
		dispatch(setProSubscribePayment(data))
	})
}

const setCoursesPayment = (payment) => ({
	type: "SET_COURSES_PAYMENT",
	payload: payment
})

const setProSubscribePayment = (payment) => ({
	type: "SET_PRO_SUBSCRIBE_PAYMENT",
	payload: payment
})