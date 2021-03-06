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

	filters: {
		categories: {},
		search: parseQuery.q ? parseQuery.q : "",
		masters: {},
	},
}

if (document.location.pathname === "/shop/" || document.location.pathname === "/shop") {
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

	if (parseQuery.masters) {
		if (typeof parseQuery.masters === "object") {
			parseQuery.masters.map(
				(item) => (initialState.filters.masters[item] = item)
			);
		} else {
			initialState.filters.masters[parseQuery.masters] = parseQuery.masters;
		}
	}
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

		action.payload.items.map((item) => {
			if (action.payload.userInfo) {
				if (!action.payload.userInfo.courses[item._id] && item.url !== action.payload.url) {
					newObj[item._id] = item
				}
			} else {
				if (item.url !== action.payload.url) {
					newObj[item._id] = item
				}
			}
		})

		return {
			...state,
			itemsSection: newObj,
			isLoadedSectionCourses: true,
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