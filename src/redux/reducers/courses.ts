import {
	CoursesState,
	CoursesActions,
	CoursesActionTypes,
} from "../types/courses/ICourses";

const initialState: CoursesState = {
	isLoadedAllCoursesFirst: false,
	isLoadedAllCourses: false,
	isFetchAllCourses: false,

	courses: [],

	isLoadedCourseByUrl: false,
	courseByUrl: {
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
		materials: [],
		skills: [],
		useSkills: [],
		tools: [],
		feedbacks: {
			images: [],
			mediaImages: []
		},
		adsVk: {
			subscribe: "",
			buy: ""
		},
		HobJobProduction: false
	},

	isLoadedCourseById: false,
	courseById: {
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
		materials: [],
		skills: [],
		useSkills: [],
		tools: [],
		feedbacks: {
			images: [],
			mediaImages: []
		},
		adsVk: {
			subscribe: "",
			buy: ""
		},
		HobJobProduction: false
	},

	totalCount: 0,
	page: 1,

	isLoadedSectionCourses: false,
	coursesSection: [],

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
			courses: action.payload.courses,
			totalCount: action.payload.totalCount,
			isLoadedAllCoursesFirst: true,
			page: 1,
		};
	}

	if (action.type === CoursesActionTypes.SET_ADD_PAGINATION_COURSES) {
		return {
			...state,
			courses: [...state.courses, ...action.payload],
			isLoadedAllCourses: true,
			page: state.page + 1,
		};
	}

	if (action.type === CoursesActionTypes.SET_COURSES_SECTION) {
		return {
			...state,
			coursesSection: action.payload,
			isLoadedSectionCourses: true,
		};
	}

	if (action.type === CoursesActionTypes.SET_COURSE_BY_URL) {
		return {
			...state,
			courseByUrl: action.payload,
			isLoadedCourseByUrl: true,
		};
	}

	if (action.type === CoursesActionTypes.SET_COURSE_BY_ID) {
		return {
			...state,
			courseById: action.payload,
			isLoadedCourseById: true,
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

	if (action.type === CoursesActionTypes.SET_LOADED_COURSE_BY_ID) {
		return {
			...state,
			isLoadedCourseById: action.payload,
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
