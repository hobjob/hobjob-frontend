const initialState = {
	isLoadedAllCategories: false,
	items: {},
}

const categories = (state = initialState, action) => {
	if (action.type === "SET_CATEGORIES") {
		const newObj = {};

		action.payload.map((item) => {
			newObj[item.transfer] = item
		})

		return {
			...state,
			isLoadedAllCategories: true,
			items: newObj,
		}
	}

	return state;
}

export default categories;