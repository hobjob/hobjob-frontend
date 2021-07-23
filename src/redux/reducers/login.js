const initialState = {
	isSend: false
}

const login = (state = initialState, action) => {
	if (action.type === "SET_SEND_LOGIN") {
		return {
			...state,
			isSend: action.payload,
		}
	}

	return state;
}

export default login;