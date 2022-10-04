import queryString from "query-string";
import { createSearchParams } from "react-router-dom";

import {
	CoursesState,
	CoursesActions,
	CoursesActionTypes,
} from "../types/courses/ICourses";

import { CourseGood } from "../../models/ICourseGood";

// const parseQuery = queryString.parse(window.location.search.replace("?", "?"), {
//     arrayFormat: "comma",
// });

const initialState: CoursesState = {
	isLoadedAllCoursesFirst: false,
	isLoadedAllCourses: false,
	isFetchAllCourses: false,

	items: [],

	isLoadedCourseByUrl: false,
	itemByUrl: {
		_id: "",
		url: "",
		title: "",
		description: "",
		image: {
			size_512: "",
			size_768: "",
			size_1024: "",
			size_1536: "",
			size_2048: "",
		},
		masterId: "",
		category: "",
		path: "",
		lessons: [],
		HobJobProduction: false,
	},

	totalCount: 0,
	page: 1,

	isLoadedSectionCourses: false,
	itemsSection: {},

	filters: {
		isParse: false,

		categories: {},
		search: "",
		masters: {},
	},
};

const courses = (
	state = initialState,
	action: CoursesActions
): CoursesState => {
	if (action.type === CoursesActionTypes.SET_COURSES) {
		return {
			...state,
			items: action.payload.data,
			totalCount: action.payload.headers["x-total-count"],
			isLoadedAllCoursesFirst: true,
			page: 1,
		};
	}

	if (action.type === CoursesActionTypes.SET_ADD_PAGINATION_COURSES) {
		return {
			...state,
			items: [...state.items, ...action.payload.data],
			isLoadedAllCourses: true,
			page: state.page + 1,
		};
	}

	if (action.type === CoursesActionTypes.SET_COURSES_SECTION) {
		const newObj: { [key: string]: CourseGood } = {};

		action.payload.items.map((item) => {
			if (action.payload.userInfo) {
				if (
					!action.payload.userInfo.courses[item._id] &&
					item.url !== action.payload.url
				) {
					newObj[item._id] = item;
				}
			} else {
				if (item.url !== action.payload.url) {
					newObj[item._id] = item;
				}
			}
		});

		return {
			...state,
			itemsSection: newObj,
			isLoadedSectionCourses: true,
		};
	}

	if (action.type === CoursesActionTypes.SET_COURSE_BY_URL) {
		return {
			...state,
			itemByUrl: action.payload,
			isLoadedCourseByUrl: true,
		};
	}

	if (action.type === CoursesActionTypes.SET_COURSES_FILTERS) {
		return {
			...state,
			filters: action.payload,
		};
	}

	if (action.type === CoursesActionTypes.SET_COURSES_FILTERS_CATEGORIES) {
		if (action.payload === "all") {
			return {
				...state,
				filters: {
					...state.filters,
					categories: {},
				},
			};
		}

		if (state.filters.categories[action.payload]) {
			delete state.filters.categories[action.payload];

			return {
				...state,
			};
		}

		return {
			...state,
			filters: {
				...state.filters,
				categories: {
					...state.filters.categories,
					[action.payload]: action.payload,
				},
			},
		};
	}

	if (action.type === CoursesActionTypes.SET_COURSES_FILTERS_SEARCH) {
		return {
			...state,
			filters: {
				...state.filters,
				search: action.payload,
			},
		};
	}

	if (action.type === CoursesActionTypes.SET_COURSES_FILTERS_MASTERS) {
		if (state.filters.masters[action.payload]) {
			delete state.filters.masters[action.payload];

			return {
				...state,
			};
		}

		return {
			...state,
			filters: {
				...state.filters,
				masters: {
					...state.filters.masters,
					[action.payload]: action.payload,
				},
			},
		};
	}

	if (action.type === CoursesActionTypes.SET_LOADED_COURSES_FIRST) {
		return {
			...state,
			isLoadedAllCoursesFirst: action.payload,
		};
	}

	if (action.type === CoursesActionTypes.SET_LOADED_COURSES) {
		return {
			...state,
			isLoadedAllCourses: action.payload,
		};
	}

	if (action.type === CoursesActionTypes.SET_LOADED_COURSE_BY_URL) {
		return {
			...state,
			isLoadedCourseByUrl: action.payload,
		};
	}

	if (action.type === CoursesActionTypes.SET_IS_FETCH_ALL_COURSES) {
		return {
			...state,
			isFetchAllCourses: action.payload,
		};
	}

	return state;
};

export default courses;
