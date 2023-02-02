import moment from "moment";

import { Image } from "../IImage";

interface UserInfoSubscribe {
	auto: boolean;
	working: boolean;

	typeSubscribe: string;
	nextTypeSubscribe: string;

	periodInfo: {
		count: number;
		title: moment.unitOfTime.DurationConstructor;
	};

	registrationSubscribe: string;

	stoppedSubscribe: string;
	lastDebitStoppedSubscribe: string;

	paymentId: string
}

export interface UserInfoCourseBuy {
	courseId: string;
	completedLessons: number[];
	dateCreate: string;
	totalLessons: number

	title: string;
	image: Image;
	masterId: string
}

export interface UserInfoCourseSubscribe {
	courseId: string;
	completedLessons: number[];
	dateCreate: string;

	totalLessons: number;

	visible: boolean;

	title: string;
	image: Image;
	masterId: string
}

export interface UserInfoCourse {
	buy: UserInfoCourseBuy[]
	subscribe: UserInfoCourseSubscribe[]
}

interface UserInfoPayment {
	title: string,
}

export interface UserInfo {
	_id: string;
	email: string;
	avatar: Image;
	city: string;
	dateOfBirth: string;

	name: string;
	surname: string;
	phone: string;

	subscribe: UserInfoSubscribe;
	courses: UserInfoCourse;
	payment: UserInfoPayment;
}