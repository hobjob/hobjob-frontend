import { CoursePassing } from "../../models/ICoursePassing";
import { UserInfoCourse } from "../../models/IUserInfo";

import { UserState, UserActions, UserActionTypes } from "../types/user/IUser";

const initialState: UserState = {
	userInfo: {
		_id: "",
		email: "",
		avatar: {
			size_512: "",
			size_768: "",
			size_1024: "",
			size_1536: "",
			size_2048: "",
		},
		city: "",
		dateOfBirth: "",

		name: "",
		surname: "",
		phone: "",

		subscribe: {
			working: false,
			passedPeriodTesting: false,

			typeSubscribe: "",
			nextTypeSubscribe: "",

			periodInfo: {
				count: 0,
				title: "month",
			},

			registrationSubscribe: "",

			paymentId: "",
			paymentNumber: "",
		},
		courses: {},
		payment: {
			auto: false,

			methodId: "",
		},
	},

	courses: {},
	referrals: [],

	isLoadedUserInfo: false,
	isLoadedUserCourses: false,
	isLoadedReferrals: false,
	isLoadedMasterCourses: false,

	isSendUpdateUserInfo: false,
	isSendUpdateUserPassword: false,
};

const user = (state = initialState, action: UserActions) => {
	if (action.type === UserActionTypes.SET_USER_INFO) {
		const newObj: { [key: string]: UserInfoCourse } = {};

		action.payload.courses.map((item) => {
			newObj[item.courseId] = item;
		});

		return {
			...state,
			userInfo: { ...action.payload, courses: newObj },
			isLoadedUserInfo: true,
		};
	}

	if (action.type === UserActionTypes.SET_USER_COURSES) {
		const newObj: { [key: string]: CoursePassing } = {};

		action.payload.map((item) => {
			newObj[item._id] = item;
		});

		return {
			...state,
			courses: newObj,
			isLoadedUserCourses: true,
		};
	}

	if (action.type === UserActionTypes.SET_USER_REFERRALS) {
		return {
			...state,
			referrals: action.payload,
			isLoadedReferrals: true,
		};
	}

	if (action.type === UserActionTypes.SET_SEND_UPDATE_USER_INFO) {
		return {
			...state,
			isSendUpdateUserInfo: action.payload,
		};
	}

	if (action.type === UserActionTypes.SET_SEND_UPDATE_USER_PASSWORD) {
		return {
			...state,
			isSendUpdateUserPassword: action.payload,
		};
	}

	return state;
};

export default user;
