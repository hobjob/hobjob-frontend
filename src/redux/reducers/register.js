const initialState = {
	isSend: false,
	message: ""
}

const register = (state = initialState, action) => {
	if (action.type === "SET_LOADED_SEND_REGISTER") {
		return {
			...state,
			isSend: action.payload,
		}
	}

	if (action.type === "ERROR_SEND_REGISTER") {
		return {
			...state,
			message: action.payload,
			isSend: false,
		}
	}

	return state;
}

export default register;