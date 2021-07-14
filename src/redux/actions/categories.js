import $api from '../../http/';

export const fetchCategories = () => (dispatch) => {
	$api.get(`/categories`).then(({ data }) => {
		dispatch(setCategories(data))
	})
}

const setCategories = (items) => ({
	type: "SET_CATEGORIES",
	payload: items
})