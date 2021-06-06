import axios from 'axios';

import { API_DOMEN } from '../../api';

export const fetchCourses = (query) => (dispatch) => {
	dispatch({
		type: "SET_LOADED_COURSES",
		payload: false,
	})

	axios.get(`${API_DOMEN}/courses?${query}`).then(({ data }) => {
		dispatch(setCourses(data))
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

export const setCoursesFilters = (filters) => ({
	type: "SET_COURSES_FILTERS",
	payload: filters
})