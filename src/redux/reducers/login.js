const initialState = {
	isSend: false,
	message: ""
}

const login = (state = initialState, action) => {
	if (action.type === "SET_LOADED_SEND_LOGIN") {
		return {
			...state,
			isSend: action.payload,
		}
	}

	if (action.type === "ERROR_SEND_LOGIN") {
		return {
			...state,
			message: action.payload,
			isSend: false,
		}
	}

	return state;
}

export default login;