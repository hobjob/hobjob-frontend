import $api from '../../http/';

export const fetchStatistics = () => (dispatch) => {
	$api.get(`/statistics`).then(({ data }) => {
		dispatch(setStatistics(data))
	})
}

const setStatistics = (items) => ({
	type: "SET_STATISTICS",
	payload: items
})