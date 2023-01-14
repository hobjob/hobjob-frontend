import { UserInfoState, UserInfo } from "../../../models/User/IUserInfo";
import { UserReferral } from "../../../models/User/IUserReferral";

export interface UserState {
	userInfo: UserInfoState;
	referrals: UserReferral[];

	isLoadedUserInfo: boolean;
	isLoadedReferrals: boolean;

	isSendUpdateUserInfo: boolean;
	isSendUpdateUserPassword: boolean;
}

export enum UserActionTypes {
	SET_USER_INFO = "SET_USER_INFO",
	SET_USER_REFERRALS = "SET_USER_REFERRALS",
	SET_SEND_UPDATE_USER_INFO = "SET_SEND_UPDATE_USER_INFO",
	SET_SEND_UPDATE_USER_PASSWORD = "SET_SEND_UPDATE_USER_PASSWORD",
}

interface setUserInfo {
	type: UserActionTypes.SET_USER_INFO;
	payload: UserInfo;
}

interface setUserReferrals {
	type: UserActionTypes.SET_USER_REFERRALS;
	payload: UserReferral[];
}

interface setSendUpdateUserInfo {
	type: UserActionTypes.SET_SEND_UPDATE_USER_INFO;
	payload: boolean;
}

interface setSendUpdateUserPassword {
	type: UserActionTypes.SET_SEND_UPDATE_USER_PASSWORD;
	payload: boolean;
}

export type UserActions =
	| setUserInfo
	| setUserReferrals
	| setSendUpdateUserInfo
	| setSendUpdateUserPassword;
