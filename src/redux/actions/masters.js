import axios from 'axios'

export const fetchMasters = () => (dispatch) => {
	axios.get(`${process.env.REACT_APP_API_DOMEN}/masters`).then(({ data }) => {
		dispatch(setMasters(data))
	})
}

export const fetchMasterById = (id) => (dispatch) => {
	axios.get(`${process.env.REACT_APP_API_DOMEN}/masters/${id}`).then(({ data }) => {
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