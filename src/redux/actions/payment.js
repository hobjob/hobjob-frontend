import $api from '../../http/';

export const fetchPaymentCoursesById = (id) => (dispatch) => {
	dispatch({
		type: "SET_LOADED_PAYMENT",
		payload: false,
	})

	$api.get(`/payment/courses/${id}`).then(({ data }) => {
		dispatch(setCoursesPayment(data))
	}).catch(() => {
		window.location.href = `/go/training`
	})
}

export const sendCreateCoursesPayment = (data, user) => (dispatch) => {
	dispatch({
		type: "SET_SEND_COURSES_PAYMENT",
		payload: true,
	})

	const { order } = data
	const { courses } = user

	let newOrder = [];

	if (courses.length) {
		order.map((key, index) => {
			if ((courses[index] && courses[index].courseId !== key) || (courses[index] && courses[index].testing)) {
				newOrder.push(key);
			}
		})
	} else {
		newOrder = data.order
	}

	if (!newOrder.length) {
		window.location.href = "/go/training/"
	} else {
		$api.post(`/payment/courses`, { order: newOrder }).then(({ data }) => {
			localStorage.removeItem("cart")
			window.location.href = `/payment/courses/${data.paymentNumber}`
		})
	}
}

export const fetchPaymentCourseExtraLessonsById = (id) => (dispatch) => {
	dispatch({
		type: "SET_LOADED_PAYMENT",
		payload: false,
	})

	$api.get(`/payment/courses/extra-lessons/${id}`).then(({ data }) => {
		dispatch(setCourseExtraLessonsPayment(data))
	}).catch(() => {
		window.location.href = `/go/training`
	})
}

export const sendCreateCourseExtraLessonsPayment = (data) => (dispatch) => {
	dispatch({
		type: "SET_SEND_COURSE_EXTRA_LESSONS_PAYMENT",
		payload: true,
	})

	$api.post(`/payment/courses/extra-lessons`, data).then(({ data }) => {
		window.location.href = `/payment/courses/extra-lessons/${data.paymentNumber}`
	})
}

export const fetchPaymentProSubscribeById = (id) => (dispatch) => {
	dispatch({
		type: "SET_LOADED_PAYMENT",
		payload: false,
	})

	$api.get(`/payment/pro/${id}`).then(({ data }) => {
		dispatch(setProSubscribePayment(data))
	}).catch(() => {
		window.location.href = `/go/training`
	})
}

export const sendCreateProSubscribePayment = ({ pro }) => (dispatch) => {
	dispatch({
		type: "SET_SEND_PRO_SUBSCRIBE_PAYMENT",
		payload: true,
	})

	if (pro) {
		window.location.href = `/go/cabinet`
	}

	$api.post(`/payment/pro`, {}).then(({ data }) => {
		window.location.href = `/payment/pro/${data.paymentNumber}`
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