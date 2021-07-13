import axios from 'axios';

export const fetchCategories = () => (dispatch) => {
	axios.get(`${process.env.REACT_APP_API_DOMEN}/categories`).then(({ data }) => {
		dispatch(setCategories(data))
	})
}

const setCategories = (items) => ({
	type: "SET_CATEGORIES",
	payload: items
})