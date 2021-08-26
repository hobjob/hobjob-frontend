const initialState = {
	payment: {},
	isLoaded: false,
	isSend: false,
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

	if (action.type === "SET_SEND_PAYMENT") {
		return {
			...state,
			isSend: action.payload
		}
	}

	return state
}

export default payment