const initialState = {
	user: {},
	courses: {},
	isLoaded: false,
}

const user = (state = initialState, action) => {
	if (action.type === "SET_USER") {
		const newObj = {}

		action.payload.courses.map(item => {
			newObj[item._id] = item
		})

		delete action.payload.courses

		return {
			...state,
			user: action.payload,
			courses: newObj,
			isLoaded: true
		}
	}

	return state
}

export default user