const initialState = {
	user: {},
	courses: {},
	referrals: [],
	masterCourses: [],
	isLoaded: false,
}

const user = (state = initialState, action) => {
	if (action.type === "SET_USER") {
		const newObj = {}
		const referrals = action.payload.referrals
		const masterCourses = action.payload.masterCourses

		action.payload.courses.map(item => {
			newObj[item._id] = item
		})

		delete action.payload.courses
		delete action.payload.referrals
		delete action.payload.masterCourses

		return {
			...state,
			user: action.payload,
			courses: newObj,
			referrals,
			masterCourses,
			isLoaded: true
		}
	}

	return state
}

export default user