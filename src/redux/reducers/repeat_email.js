const initialState = {
	isSend: false
}

const repeat_email = (state = initialState, action) => {
	if (action.type === "SET_SEND_REPEAT_EMAIL") {
		return {
			...state,
			isSend: action.payload,
		}
	}

	return state;
}

export default repeat_email;