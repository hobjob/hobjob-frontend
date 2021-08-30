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

export const fetchCoursesArrayById = (arrayId) => (dispatch) => {
	dispatch({
		type: "SET_LOADED_COURSES_ARRAY_BY_ID",
		payload: false,
	})

	$api.get(`/courses?_id=${Object.keys(arrayId).map(id => arrayId[id]._id)}`).then(({ data }) => {
		dispatch(setCoursesArrayById(data))
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

export const fetchCoursesSection = () => (dispatch) => {
	dispatch({
		type: "SET_LOADED_COURSES_SECTION",
		payload: false,
	})

	$api.get(`/courses?sort=buyCountWeek&order=desc&limit=4`).then(({ data }) => {
		dispatch(setCoursesSection(data))
	})
}

export const fetchCourseBuyCountWeek = () => (dispatch) => {
	$api.get(`/courses?sort=buyCountWeek&order=desc`).then(({ data }) => {
		dispatch(setCoursesBuyCountWeek(data[0]))
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

const setCourses = (items) => ({
	type: "SET_COURSES",
	payload: items
})

const setCoursesArrayById = (items) => ({
	type: "SET_COURSES_ARRAY_BY_ID",
	payload: items
})

const setAddPaginationCourses = (items) => ({
	type: "SET_ADD_PAGINATION_COURSES",
	payload: items
})


const setCoursesSection = (items) => ({
	type: "SET_COURSES_SECTION",
	payload: items
})

const setCoursesBuyCountWeek = (item) => ({
	type: "SET_COURSES_BUY_COUNT_WEEK",
	payload: item
})

const setCourseById = (item) => ({
	type: "SET_COURSE_BY_ID",
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

export const setCoursesFiltersSale = (status) => ({
	type: "SET_COURSES_FILTERS_SALE",
	payload: status
})

export const setCoursesFiltersMasters = (masterId) => ({
	type: "SET_COURSES_FILTERS_MASTERS",
	payload: masterId
})

export const setCoursesFiltersTimes = (times) => ({
	type: "SET_COURSES_FILTERS_TIMES",
	payload: times
})

export const setCoursesFilters = (filters) => ({
	type: "SET_COURSES_FILTERS",
	payload: filters
})