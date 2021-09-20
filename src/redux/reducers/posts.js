import queryString from "query-string";

const parseQuery = queryString.parse(window.location.search.replace('?', '?'), {
	arrayFormat: "comma",
});

const initialState = {
	isLoadedAllPostsFirst: false,
	isLoadedAllPosts: false,
	isFetchAllPosts: false,

	items: [],

	totalCount: 0,
	page: 1,

	isLoadedByIdPosts: false,
	itemById: {},

	filters: {
		categories: {}
	}
}

if (parseQuery.category) {
	if (typeof parseQuery.category === "object") {
		parseQuery.category.map(
			(item) => (initialState.filters.categories[item] = item)
		);
	} else {
		initialState.filters.categories[parseQuery.category] =
			parseQuery.category;
	}
}

const posts = (state = initialState, action) => {
	if (action.type === "SET_POSTS") {
		return {
			...state,
			items: action.payload.data,
			totalCount: action.payload.headers["x-total-count"],
			isLoadedAllPostsFirst: true,
			page: 1,
		}
	}

	if (action.type === "SET_ADD_PAGINATION_POSTS") {
		return {
			...state,
			items: [...state.items, ...action.payload.data],
			isLoadedAllPosts: true,
			page: state.page + 1
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

	if (action.type === "SET_LOADED_POSTS_ALL_FIRST") {
		return {
			...state,
			isLoadedAllPostsFirst: action.payload,
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

	if (action.type === "SET_IS_FETCH_ALL_POSTS") {
		return {
			...state,
			isFetchAllPosts: action.payload,
		}
	}

	return state;
}

export default posts;