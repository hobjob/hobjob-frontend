const initialState = {
	items: {},
	isLoaded: false,

	itemById: {},
	isLoadedById: false,
}

const masters = (state = initialState, action) => {
	if (action.type === "SET_MASTERS") {
		const newObj = {}

		action.payload.map(item => {
			newObj[item._id] = item
		})

		return {
			...state,
			items: newObj,
			isLoaded: true
		}
	}

	if (action.type === "SET_MASTER_BY_ID") {
		return {
			...state,
			itemById: action.payload,
			isLoadedById: true
		}
	}

	if (action.type === "SET_LOADED_BY_ID") {
		return {
			...state,
			isLoadedById: action.payload,
		}
	}

	return state
}

export default masters