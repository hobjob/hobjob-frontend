const initialState = {
	isSend: false
}

const register = (state = initialState, action) => {
	if (action.type === "SET_SEND_REGISTER") {
		return {
			...state,
			isSend: action.payload,
		}
	}
	
	return state;
}

export default register;