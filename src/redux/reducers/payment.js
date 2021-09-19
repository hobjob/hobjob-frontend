const initialState = {
	payment: {},
	isLoaded: false,

	isSendCourses: false,
	isSendCourseExtraLessons: false,
	isSendProSubscribe: false,

	isSendRequestPaymentReferrals: false,
	requestPaymentNumberReferrals: ""
}

const payment = (state = initialState, action) => {
	if (action.type === "SET_COURSES_PAYMENT") {
		return {
			...state,
			payment: action.payload,
			isLoaded: true
		}
	}

	if (action.type === "SET_COURSE_EXTRA_LESSONS_PAYMENT") {
		return {
			...state,
			payment: action.payload,
			isLoaded: true
		}
	}

	if (action.type === "SET_PRO_SUBSCRIBE_PAYMENT") {
		return {
			...state,
			payment: action.payload,
			isLoaded: true
		}
	}

	if (action.type === "SET_LOADED_PAYMENT") {
		return {
			...state,
			isLoaded: action.payload
		}
	}

	if (action.type === "SET_SEND_COURSES_PAYMENT") {
		return {
			...state,
			isSendCourses: action.payload
		}
	}

	if (action.type === "SET_SEND_COURSE_EXTRA_LESSONS_PAYMENT") {
		return {
			...state,
			isSendCourseExtraLessons: action.payload
		}
	}

	if (action.type === "SET_SEND_PRO_SUBSCRIBE_PAYMENT") {
		return {
			...state,
			isSendProSubscribe: action.payload
		}
	}

	if (action.type === "SET_SEND_REQUEST_PAYMENT_REFERRALS") {
		return {
			...state,
			isSendRequestPaymentReferrals: action.payload
		}
	}

	if (action.type === "SET_REQUEST_PAYMENT_NUMBER_REFERRALS") {
		return {
			...state,
			requestPaymentNumberReferrals: action.payload,
			isSendRequestPaymentReferrals: false
		}
	}

	return state
}

export default payment