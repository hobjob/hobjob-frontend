const initialState = {
	isLoadedAllCourses: false,
	items: [],

	isLoadedSectionCourses: false,
	itemsSection: [],

	isLoadedBuyCountWeek: false,
	itemBuyCountWeek: {},

	filters: {
		categories: {},
		search: "",
		sale: null,
		masters: {},
		times: {}
	},
}

const courses = (state = initialState, action) => {
	if (action.type === "SET_COURSES") {
		return {
			...state,
			items: action.payload,
			isLoadedAllCourses: true,
		}
	}

	if (action.type === "SET_COURSES_SECTION") {
		return {
			...state,
			itemsSection: action.payload,
			isLoadedSectionCourses: true,
		}
	}

	if (action.type === "SET_COURSES_BUY_COUNT_WEEK") {
		return {
			...state,
			itemBuyCountWeek: action.payload,
			isLoadedBuyCountWeek: true,
		}
	}

	if (action.type === "SET_COURSES_FILTERS_CATEGORIES") {
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

	if (action.type === "SET_COURSES_FILTERS_SEARCH") {
		return {
			...state,
			filters: {
				...state.filters,
				search: action.payload
			},
		}
	}

	if (action.type === "SET_COURSES_FILTERS_SALE") {
		return {
			...state,
			filters: {
				...state.filters,
				sale: action.payload
			},
		}
	}

	if (action.type === "SET_COURSES_FILTERS_MASTERS") {
		if (state.filters.masters[action.payload]) {
			delete state.filters.masters[action.payload];

			return {
				...state,
			}
		}

		return {
			...state,
			filters: {
				...state.filters,
				masters: {
					...state.filters.masters,
					[action.payload]: action.payload
				}
			},
		}
	}

	if (action.type === "SET_COURSES_FILTERS_TIMES") {
		if (state.filters.times[action.payload]) {
			delete state.filters.times[action.payload];

			return {
				...state,
			}
		}

		return {
			...state,
			filters: {
				...state.filters,
				times: {
					...state.filters.times,
					[action.payload]: action.payload
				}
			},
		}
	}

	if (action.type === "SET_COURSES_FILTERS") {
		return {
			...state,
			filters: action.payload
		}
	}

	if (action.type === "SET_LOADED_COURSES") {
		return {
			...state,
			isLoadedAllCourses: action.payload,
		}
	}

	return state;
}

export default courses;