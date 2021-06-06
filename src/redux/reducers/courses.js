import { categories } from "../../categories"

const initialState = {
	isLoadedAllCourses: false,
	items: [],

	isLoadedBuyCountWeek: false,
	itemBuyCountWeek: {},

	filters: {
		categories: {

		},
		search: ""
	}
}

const courses = (state = initialState, action) => {
	if (action.type === "SET_COURSES") {
		return {
			...state,
			items: action.payload,
			isLoadedAllCourses: true,
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