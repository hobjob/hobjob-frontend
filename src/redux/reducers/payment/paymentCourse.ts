import {
	PaymentCourseState,
	PaymentCourseActions,
	PaymentCourseActionTypes,
} from "../../types/payment/IPaymentCourse";

const initialState: PaymentCourseState = {
	payment: {
		paymentNumber: "",
		confirmation: {},
		order: "",
		status: "",
		courseId: "",
	},

	isLoaded: false,
	isSend: false,
};

const paymentCourse = (
	state = initialState,
	action: PaymentCourseActions
): PaymentCourseState => {
	if (action.type === PaymentCourseActionTypes.SET_PAYMENT_COURSE) {
		return {
			...state,
			payment: action.payload,
			isLoaded: true,
		};
	}

	if (action.type === PaymentCourseActionTypes.SET_LOADED_PAYMENT_COURSE) {
		return {
			...state,
			isLoaded: action.payload,
		};
	}

	if (action.type === PaymentCourseActionTypes.SET_SEND_PAYMENT_COURSE) {
		return {
			...state,
			isSend: action.payload,
		};
	}

	return state;
};

export default paymentCourse;
