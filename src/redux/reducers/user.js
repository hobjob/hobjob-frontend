const initialState = {
	userInfo: {},
	courses: {},
	referrals: [],
	masterCourses: [],

	isLoadedUserInfo: false,
	isLoadedUserCourses: false,
	isLoadedReferrals: false,
	isLoadedMasterCourses: false,

	isSendUpdateUserInfo: false,
	isSendUpdateUserPassword: false,
}

const user = (state = initialState, action) => {
	if (action.type === "SET_USER_INFO") {
		return {
			...state,
			userInfo: action.payload,
			isLoadedUserInfo: true
		}
	}

	if (action.type === "SET_USER_COURSES") {
		const newObj = {}
		action.payload.map(item => {
			newObj[item._id] = item
		})

		return {
			...state,
			courses: newObj,
			isLoadedUserCourses: true
		}
	}

	if (action.type === "SET_USER_REFERRALS") {
		return {
			...state,
			referrals: action.payload,
			isLoadedReferrals: true
		}
	}

	if (action.type === "SET_USER_MASTER_COURSES") {
		return {
			...state,
			masterCourses: action.payload,
			isLoadedMasterCourses: true
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