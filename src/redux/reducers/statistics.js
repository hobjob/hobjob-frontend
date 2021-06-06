const initialState = {
	isLoaded: false,
	statistics: {}
}

const statistics = (state = initialState, action) => {
	if (action.type === "SET_STATISTICS") {
		return {
			...state,
			statistics: action.payload
		}
	}

	return state;
}

export default statistics;