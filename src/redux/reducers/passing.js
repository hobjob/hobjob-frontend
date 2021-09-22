const initialState = {
	materialsIsDownloading: {},
	timecodeSeconds: 0
}

const passing = (state = initialState, action) => {
	if (action.type === "PUSH_STATE_MATERIALS_DOWNLOADING") {
		const newObj = { ...state.materialsIsDownloading, [action.payload.materialNum]: action.payload.state }

		console.log(newObj)

		return {
			...state,
			materialsIsDownloading: newObj
		}
	}

	if (action.type === "DELETE_STATE_MATERIALS_DOWNLOADING") {
		delete state.materialsIsDownloading[action.payload]

		return {
			...state
		}
	}

	if (action.type === "SET_TIMECODE_SECONDS") {
		return {
			...state,
			timecodeSeconds: action.payload
		}
	}

	return state
}

export default passing