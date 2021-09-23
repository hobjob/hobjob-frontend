import queryString from "query-string";

const parseQuery = queryString.parse(window.location.search.replace('?', '?'), {
	arrayFormat: "comma",
});

const initialState = {
	isLoadedAllCoursesFirst: false,
	isLoadedAllCourses: false,
	isFetchAllCourses: false,

	items: [],

	isLoadedCourseById: false,
	itemById: {},

	isLoadedCourseByUrl: false,
	itemByUrl: {},

	isLoadedCoursesArrayById: false,
	itemsArrayById: {},

	totalCount: 0,
	page: 1,

	isLoadedSectionCourses: false,
	itemsSection: [],

	isLoadedBuyCountWeek: false,
	itemBuyCountWeek: {},

	filters: {
		categories: {},
		search: parseQuery.q ? parseQuery.q : "",
		sale: parseQuery.sale ? parseQuery.sale : null,
		masters: {},
		times: {}
	},
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
} else {
	initialState.filters.categories = {}
}

if (parseQuery.masters) {
	if (typeof parseQuery.masters === "object") {
		parseQuery.masters.map(
			(item) => (initialState.filters.masters[item] = item)
		);
	} else {
		initialState.filters.masters[parseQuery.masters] = parseQuery.masters;
	}
} else {
	initialState.filters.masters = {}
}

if (parseQuery.times) {
	if (typeof parseQuery.times === "object") {
		parseQuery.times.map(
			(item) => (initialState.filters.times[item] = item)
		);
	} else {
		initialState.filters.times[parseQuery.times] = parseQuery.times;
	}
} else {
	initialState.filters.times = {}
}

const courses = (state = initialState, action) => {
	if (action.type === "SET_COURSES") {
		return {
			...state,
			items: action.payload.data,
			totalCount: action.payload.headers["x-total-count"],
			isLoadedAllCoursesFirst: true,
			page: 1,
		}
	}

	if (action.type === "SET_COURSES_ARRAY_BY_ID") {
		const newObj = {}

		action.payload.map((item) => {
			newObj[item._id] = item
		})

		return {
			...state,
			itemsArrayById: newObj,
			isLoadedCoursesArrayById: true,
		}
	}

	if (action.type === "SET_ADD_PAGINATION_COURSES") {
		return {
			...state,
			items: [...state.items, ...action.payload.data],
			isLoadedAllCourses: true,
			page: state.page + 1
		}
	}

	if (action.type === "SET_COURSES_SECTION") {
		const newObj = {}

		action.payload.map((item) => {
			newObj[item._id] = item
		})

		return {
			...state,
			itemsSection: newObj,
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

	if (action.type === "SET_COURSE_BY_ID") {
		return {
			...state,
			itemById: action.payload,
			isLoadedCourseById: true,
		}
	}

	if (action.type === "SET_COURSE_BY_URL") {
		return {
			...state,
			itemByUrl: action.payload,
			isLoadedCourseByUrl: true,
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
		if (action.payload === state.filters.sale) {
			return {
				...state,
				filters: {
					...state.filters,
					sale: null
				},
			}
		}

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

	if (action.type === "SET_LOADED_COURSES_FIRST") {
		return {
			...state,
			isLoadedAllCoursesFirst: action.payload,
		}
	}

	if (action.type === "SET_LOADED_COURSES") {
		return {
			...state,
			isLoadedAllCourses: action.payload,
		}
	}

	if (action.type === "SET_LOADED_COURSE_BY_ID") {
		return {
			...state,
			isLoadedCourseById: action.payload,
		}
	}

	if (action.type === "SET_LOADED_COURSE_BY_URL") {
		return {
			...state,
			isLoadedCourseByUrl: action.payload,
		}
	}

	if (action.type === "SET_IS_FETCH_ALL_COURSES") {
		return {
			...state,
			isFetchAllCourses: action.payload,
		}
	}

	if (action.type === "SET_LOADED_COURSES_ARRAY_BY_ID") {
		return {
			...state,
			isLoadedCoursesArrayById: action.payload,
		}
	}


	return state;
}

export default courses;