import $api from '../../http/';

export const fetchMasters = () => (dispatch) => {
	$api.get(`/masters`).then(({ data }) => {
		dispatch(setMasters(data))
	})
}

export const fetchMasterById = (id) => (dispatch) => {
	dispatch({
		type: "SET_LOADED_BY_ID",
		payload: false
	})

	$api.get(`/masters/${id}`).then(({ data }) => {
		dispatch(setMasterById(data))
	})
}

const setMasters = (masters) => ({
	type: "SET_MASTERS",
	payload: masters
})

const setMasterById = (master) => ({
	type: "SET_MASTER_BY_ID",
	payload: master
})