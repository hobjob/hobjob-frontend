import $api from '../../http/';

export const fetchPaymentCoursesById = (id) => (dispatch) => {
	dispatch({
		type: "SET_LOADED_PAYMENT",
		payload: false,
	})

	$api.get(`/payment/courses/${id}`).then(({ data }) => {
		dispatch(setCoursesPayment(data))
	})
}

export const sendCreateCoursesPayment = (data) => (dispatch) => {
	$api.post(`/payment/courses`, data).then(({ data }) => {
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

export const fetchPaymentCourseExtraLessonsById = (id) => (dispatch) => {
	dispatch({
		type: "SET_LOADED_PAYMENT",
		payload: false,
	})

	$api.get(`/payment/courses/extra-lessons/${id}`).then(({ data }) => {
		dispatch(setCourseExtraLessonsPayment(data))
	})
}

export const sendCreateCourseExtraLessonsPayment = (data) => (dispatch) => {
	$api.post(`/payment/courses/extra-lessons`, data).then(({ data }) => {
		window.location.href = `/payment/courses/extra-lessons/${data.paymentNumber}`
	})
}

export const sendConfirmationCourseExtraLessonsPayment = (paymentNumber) => (dispatch) => {
	$api.get(`/payment/courses/extra-lessons/confirmation/${paymentNumber}`).then(({ data }) => {
		window.location.href = `/go/passing/${data}/1`
	}).catch(() => {
		window.location.href = `/go/training`
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

export const sendCreateProSubscribePayment = () => (dispatch) => {
	$api.get(`/payment/pro`).then(({ data }) => {
		window.location.href = `/payment/pro/${data.paymentNumber}`
	})
}

export const sendConfirmationProSubscribePayment = (paymentNumber) => (dispatch) => {
	$api.get(`/payment/pro/confirmation/${paymentNumber}`).then(() => {
		window.location.href = `/go/cabinet`
	}).catch(() => {
		window.location.href = `/go/cabinet`
	})
}

const setCoursesPayment = (payment) => ({
	type: "SET_COURSES_PAYMENT",
	payload: payment
})

const setCourseExtraLessonsPayment = (payment) => ({
	type: "SET_COURSE_EXTRA_LESSONS_PAYMENT",
	payload: payment
})

const setProSubscribePayment = (payment) => ({
	type: "SET_PRO_SUBSCRIBE_PAYMENT",
	payload: payment
})