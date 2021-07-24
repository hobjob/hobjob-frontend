const initialState = {
	user: {},
	courses: {},
	referrals: [],
	isLoaded: false,
}

const user = (state = initialState, action) => {
	if (action.type === "SET_USER") {
		const newObj = {}
		const referrals = action.payload.referrals

		action.payload.courses.map(item => {
			newObj[item._id] = item
		})

		delete action.payload.courses
		delete action.payload.referrals

		return {
			...state,
			user: action.payload,
			courses: newObj,
			referrals: referrals,
			isLoaded: true
		}
	}

	return state
}

export default user