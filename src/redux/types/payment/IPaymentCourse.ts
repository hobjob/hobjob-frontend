import { PaymentCourse } from "../../../models/Payment/IPaymentCourse";

export interface PaymentCourseState {
	payment: PaymentCourse;
	isLoaded: boolean;

	isSend: boolean;
}

export enum PaymentCourseActionTypes {
	SET_PAYMENT_COURSE = "SET_PAYMENT_COURSE",
	SET_LOADED_PAYMENT_COURSE = "SET_LOADED_PAYMENT_COURSE",
	SET_SEND_PAYMENT_COURSE = "SET_SEND_PAYMENT_COURSE",
}

interface setPaymentCourse {
	type: PaymentCourseActionTypes.SET_PAYMENT_COURSE;
	payload: PaymentCourse;
}

interface setLoadedPaymentCourse {
	type: PaymentCourseActionTypes.SET_LOADED_PAYMENT_COURSE;
	payload: boolean;
}

interface setSendPaymentCourse {
	type: PaymentCourseActionTypes.SET_SEND_PAYMENT_COURSE;
	payload: boolean;
}

export type PaymentCourseActions = setPaymentCourse | setLoadedPaymentCourse | setSendPaymentCourse;
