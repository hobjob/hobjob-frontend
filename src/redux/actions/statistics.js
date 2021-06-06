import axios from 'axios';

import { API_DOMEN } from '../../api';

export const fetchStatistics = () => (dispatch) => {
	axios.get(`${API_DOMEN}/statistics`).then(({ data }) => {
		dispatch(setStatistics(data))
	})
}

const setStatistics = (items) => ({
	type: "SET_STATISTICS",
	payload: items
})