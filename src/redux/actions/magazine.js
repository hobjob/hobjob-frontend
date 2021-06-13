import axios from 'axios';

import { API_DOMEN } from '../../api';

export const fetchMagazine = (query = null) => (dispatch) => {
	dispatch({
		type: "SET_LOADED_MAGAZINE_ALL",
		payload: false,
	})

	axios.get(`${API_DOMEN}/magazine?${query !== null ? query : ""}`).then(({ data }) => {
		dispatch(setMagazine(data))
	})
}

export const fetchMagazineById = (id) => (dispatch) => {
	dispatch({
		type: "SET_LOADED_MAGAZINE_BY_ID",
		payload: false,
	})

	dispatch({
		type: "SET_LOADED_MAGAZINE_BY_ID",
		payload: false,
	})

	axios.get(`${API_DOMEN}/magazine?_id=${id}`).then(({ data }) => {
		dispatch(setMagazineById(data[0]))
	})
}

const setMagazine = (items) => ({
	type: "SET_MAGAZINE",
	payload: items,
})

const setMagazineById = (item) => ({
	type: "SET_MAGAZINE_BY_ID",
	payload: item,
})

export const setMagazineFiltersCategories = (category) => ({
	type: "SET_MAGAZINE_FILTERS_CATEGORIES",
	payload: category
})

export const setMagazineFilters = (filters) => ({
	type: "SET_MAGAZINE_FILTERS",
	payload: filters
})