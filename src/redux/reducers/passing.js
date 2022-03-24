const initialState = {
	materialsIsDownloading: {},
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

	return state
}

export default passing