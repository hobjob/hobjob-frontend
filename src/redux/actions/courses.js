import axios from 'axios';

import { API_DOMEN } from '../../api';

export const fetchCourses = (query = null) => (dispatch) => {
	dispatch({
		type: "SET_LOADED_COURSES",
		payload: false,
	})

	axios.get(`${API_DOMEN}/courses?${query !== null ? query : ""}`).then(({ data }) => {
		dispatch(setCourses(data))
	})
}

export const fetchCoursesSection = () => (dispatch) => {
	dispatch({
		type: "SET_LOADED_COURSES_SECTION",
		payload: false,
	})

	axios.get(`${API_DOMEN}/courses?_sort=buyCountWeek&_order=desc&_limit=4`).then(({ data }) => {
		dispatch(setCoursesSection(data))
	})
}

export const fetchCourseBuyCountWeek = () => (dispatch) => {
	axios.get(`${API_DOMEN}/courses?_sort=buyCountWeek&_order=desc`).then(({ data }) => {
		dispatch(setCoursesBuyCountWeek(data[0]))
	})
}

const setCourses = (items) => ({
	type: "SET_COURSES",
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