const initialState = {
	isLoadedAllPosts: false,
	items: [],

	isLoadedByIdPosts: false,
	itemById: {},

	filters: {
		categories: {}
	}
}

const posts = (state = initialState, action) => {
	if (action.type === "SET_POSTS") {
		return {
			...state,
			items: action.payload,
			isLoadedAllPosts: true,
		}
	}

	if (action.type === "SET_POSTS_BY_ID") {
		return {
			...state,
			itemById: action.payload,
			isLoadedByIdPosts: true,
		}
	}

	if (action.type === "SET_LOADED_POSTS_BY_ID") {
		return {
			...state,
			isLoadedByIdPosts: action.payload,
		}
	}

	if (action.type === "SET_POSTS_FILTERS_CATEGORIES") {
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

	if (action.type === "SET_POSTS_FILTERS") {
		return {
			...state,
			filters: action.payload
		}
	}

	if (action.type === "SET_LOADED_POSTS_ALL") {
		return {
			...state,
			isLoadedAllPosts: action.payload,
		}
	}

	if (action.type === "SET_LOADED_POSTS_BY_ID") {
		return {
			...state,
			isLoadedByIdPosts: action.payload,
		}
	}

	return state;
}

export default posts;