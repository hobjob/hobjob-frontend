const initialState = {
	videoUrl: "",
	percentLoading: 0,
	materialsIsDownloading: {}
}

const passing = (state = initialState, action) => {
	if (action.type === "SET_VIDEO_URL_COURSE_LESSON") {
		return {
			...state,
			videoUrl: action.payload
		}
	}

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

	if (action.type === "SET_PERCENT_LOADED_VIDEO_COURSE_LESSON") {
		return {
			...state,
			percentLoading: action.payload
		}
	}

	return state
}

export default passing