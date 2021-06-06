import axios from 'axios';

import { API_DOMEN } from '../../api';

export const fetchMagazine = () => (dispatch) => {
	axios.get(`${API_DOMEN}/magazine`).then(({ data }) => {
		dispatch(setMagazine(data))
	})
}

export const fetchMagazineById = (id) => (dispatch) => {
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