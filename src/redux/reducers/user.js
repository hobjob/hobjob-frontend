const initialState = {
	user: {},
	courses: {},
	referrals: [],
	masterCourses: [],
	isLoaded: false,

	isSendUpdateUserInfo: false,
	isSendUpdateUserPassword: false,
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

	if (action.type === "SET_SEND_UPDATE_USER_INFO") {
		return {
			...state,
			isSendUpdateUserInfo: action.payload,
		}
	}

	if (action.type === "SET_SEND_UPDATE_USER_PASSWORD") {
		return {
			...state,
			isSendUpdateUserPassword: action.payload,
		}
	}

	return state
}

export default user