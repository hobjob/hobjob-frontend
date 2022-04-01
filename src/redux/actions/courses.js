import $api from '../../http/';

export const fetchCourses = (query = null, page) => (dispatch) => {
	dispatch({
		type: "SET_LOADED_COURSES_FIRST",
		payload: false,
	})

	dispatch({
		type: "SET_IS_FETCH_ALL_COURSES",
		payload: true,
	})

	$api.get(`/courses?limit=8&page=${page}&${query !== null ? query : ""}`).then((response) => {
		dispatch(setCourses(response))

		dispatch({
			type: "SET_IS_FETCH_ALL_COURSES",
			payload: false,
		})
	})
}

export const fetchAddPaginationCourses = (query = null, page) => (dispatch) => {
	dispatch({
		type: "SET_LOADED_COURSES",
		payload: false,
	})

	dispatch({
		type: "SET_IS_FETCH_ALL_COURSES",
		payload: true,
	})

	$api.get(`/courses?limit=8&page=${page}&${query !== null ? query : ""}`).then((response) => {
		dispatch(setAddPaginationCourses(response))

		dispatch({
			type: "SET_IS_FETCH_ALL_COURSES",
			payload: false,
		})
	})
}

export const fetchCoursesSection = (userInfo = null, url = "") => (dispatch) => {
	dispatch({
		type: "SET_LOADED_COURSES_SECTION",
		payload: false,
	})

	$api.get(`/courses`).then(({ data }) => {
		dispatch(setCoursesSection(data, userInfo, url))
	})
}

export const fetchCourseById = (id) => (dispatch) => {
	dispatch({
		type: "SET_LOADED_COURSE_BY_ID",
		payload: false,
	})

	$api.get(`/courses/${id}`).then(({ data }) => {
		dispatch(setCourseById(data))
	})
}

export const fetchCourseByUrl = (url) => (dispatch) => {
	dispatch({
		type: "SET_LOADED_COURSE_BY_URL",
		payload: false,
	})

	$api.get(`/courses?url=${url}`).then(({ data }) => {
		dispatch(setCourseByUrl(data[0] ? data[0] : {}))
	})
}

const setCourses = (items) => ({
	type: "SET_COURSES",
	payload: items
})

const setAddPaginationCourses = (items) => ({
	type: "SET_ADD_PAGINATION_COURSES",
	payload: items
})


const setCoursesSection = (items, userInfo, url) => ({
	type: "SET_COURSES_SECTION",
	payload: { items, userInfo, url }
})

const setCourseById = (item) => ({
	type: "SET_COURSE_BY_ID",
	payload: item
})

const setCourseByUrl = (item) => ({
	type: "SET_COURSE_BY_URL",
	payload: item
})

export const setCoursesFiltersCategories = (category) => ({
	type: "SET_COURSES_FILTERS_CATEGORIES",
	payload: category
})

export const setCoursesFiltersSearch = (q) => ({
	type: "SET_COURSES_FILTERS_SEARCH",
	payload: q
})

export const setCoursesFiltersMasters = (masterId) => ({
	type: "SET_COURSES_FILTERS_MASTERS",
	payload: masterId
})

export const setCoursesFilters = (filters) => ({
	type: "SET_COURSES_FILTERS",
	payload: filters
})