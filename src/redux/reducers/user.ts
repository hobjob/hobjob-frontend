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
			auto: false,
			working: false,

			type: "",

			saveOffers: {
				isUsedSale: false,
				isUsedFree: false
			},

			periodInfo: {
				count: 0,
				title: "month",
			},

			registration: "",

			stopped: "",
			lastDebitStopped: ""
		},
		courses: {
			buy: [],
			subscribe: [],
		},
		payment: {
			title: ""
		}
	},

	referrals: [],

	isLoadedUserInfo: false,

	isLoadedReferrals: false,

	isSendUpdateUserInfo: false,
	isSendUpdateUserPassword: false,
};

const user = (state = initialState, action: UserActions) => {
	if (action.type === UserActionTypes.SET_USER_INFO) {
		return {
			...state,
			userInfo: action.payload,
			isLoadedUserInfo: true,
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
