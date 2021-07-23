const initialState = {
	timecode: {
		seconds: "",
		minutes: ""
	}
}

const passing = (state = initialState, action) => {
	if (action.type === "SET_PASSING_TIMECODE") {
		const splitTimecode = action.payload.split(":")

		return {
			...state,
			timecode: { seconds: parseFloat(parseInt(splitTimecode[0]) * 60 + parseInt(splitTimecode[1])), minutes: action.payload },
		}
	}

	return state
}

export default passing