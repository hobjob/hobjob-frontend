import $api from '../../http/';

export const fetchStatistics = () => (dispatch) => {
	return $api.get(`/statistics`).then(({ data }) => {
		dispatch(setStatistics(data))
	})
}

const setStatistics = (items) => ({
	type: "SET_STATISTICS",
	payload: items
})