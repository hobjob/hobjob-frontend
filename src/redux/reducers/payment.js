const initialState = {
	payment: {},
	isLoaded: false,
}

const payment = (state = initialState, action) => {
	if (action.type === "SET_PAYMENT") {
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

	return state
}

export default payment