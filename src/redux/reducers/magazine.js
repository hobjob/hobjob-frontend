const initialState = {
	isLoadedAllMagazine: false,
	items: [],

	isLoadedByIdMagazine: false,
	itemById: {},

	filters: {
		categories: {}
	}
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

	if (action.type === "SET_MAGAZINE_FILTERS_CATEGORIES") {
		if (action.payload === "all") {
			return {
				...state,
				filters: {
					...state.filters,
					categories: {}
				},
			}
		}

		if (state.filters.categories[action.payload]) {
			delete state.filters.categories[action.payload];

			return {
				...state,
			}
		}

		return {
			...state,
			filters: {
				...state.filters,
				categories: {
					...state.filters.categories,
					[action.payload]: action.payload
				}
			},
		}
	}

	if (action.type === "SET_MAGAZINE_FILTERS") {
		return {
			...state,
			filters: action.payload
		}
	}

	if (action.type === "SET_LOADED_MAGAZINE_ALL") {
		return {
			...state,
			isLoadedAllMagazine: action.payload,
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