import axios from 'axios';

export const fetchStatistics = () => (dispatch) => {
	axios.get(`${process.env.REACT_APP_API_DOMEN}/statistics`).then(({ data }) => {
		dispatch(setStatistics(data))
	})
}

const setStatistics = (items) => ({
	type: "SET_STATISTICS",
	payload: items
})