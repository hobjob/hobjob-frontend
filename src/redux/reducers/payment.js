const initialState = {
	payment: {},
	isLoaded: false,

	isSendSubscribe: false
}

const payment = (state = initialState, action) => {
	if (action.type === "SET_SUBSCRIBE_PAYMENT") {
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

	if (action.type === "SET_SEND_SUBSCRIBE_PAYMENT") {
		return {
			...state,
			isSendProSubscribe: action.payload
		}
	}

	return state
}

export default payment