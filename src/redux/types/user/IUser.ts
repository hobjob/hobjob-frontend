import {UserInfoState, UserInfo} from "../../../models/IUserInfo";
import {CoursePassing} from "../../../models/ICoursePassing";
import {UserReferral} from "../../../models/IUserReferral";

export interface UserState {
    userInfo: UserInfoState;
    courses: {[key: string]: CoursePassing};
    referrals: UserReferral[];

    isLoadedUserInfo: boolean;
    isLoadedUserCourses: boolean;
    isLoadedReferrals: boolean;
    isLoadedMasterCourses: boolean;

    isSendUpdateUserInfo: boolean;
    isSendUpdateUserPassword: boolean;
}

export enum UserActionTypes {
    SET_USER_INFO = "SET_USER_INFO",
    SET_USER_COURSES = "SET_USER_COURSES",
    SET_USER_REFERRALS = "SET_USER_REFERRALS",
    SET_SEND_UPDATE_USER_INFO = "SET_SEND_UPDATE_USER_INFO",
    SET_SEND_UPDATE_USER_PASSWORD = "SET_SEND_UPDATE_USER_PASSWORD",
}

interface setUserInfo {
    type: UserActionTypes.SET_USER_INFO;
    payload: UserInfo;
}

interface setUserCourses {
    type: UserActionTypes.SET_USER_COURSES;
    payload: CoursePassing[];
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
    | setUserCourses
    | setUserReferrals
    | setSendUpdateUserInfo
    | setSendUpdateUserPassword;
