const initialState = {
	isLoadedAllMagazine: false,
	items: [],

	isLoadedByIdMagazine: false,
	itemById: {}
}

const magazine = (state = initialState, action) => {
	if (action.type === "SET_MAGAZINE") {
		return {
			...state,
			items: action.payload,
			isLoadedAllMagazine: true,
		}
	}

	if (action.type === "SET_MAGAZINE_BY_ID") {
		return {
			...state,
			itemById: action.payload,
			isLoadedByIdMagazine: true,
		}
	}

	if (action.type === "SET_LOADED_MAGAZINE_BY_ID") {
		return {
			...state,
			isLoadedByIdMagazine: action.payload,
		}
	}

	return state;
}

export default magazine;