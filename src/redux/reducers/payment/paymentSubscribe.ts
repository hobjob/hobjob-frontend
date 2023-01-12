import {
	PaymentSubscribeState,
	PaymentSubscribeActions,
	PaymentSubscribeActionTypes,
} from "../../types/payment/IPaymentSubscribe";

const initialState: PaymentSubscribeState = {
	payment: {
		paymentNumber: "",
		confirmation: {},
		order: "",
		status: "",
		typeSubscribe: "",
	},

	isLoaded: false,
	isSend: false,
};

const paymentSubscribe = (
	state = initialState,
	action: PaymentSubscribeActions
): PaymentSubscribeState => {
	if (action.type === PaymentSubscribeActionTypes.SET_PAYMENT) {
		return {
			...state,
			payment: action.payload,
			isLoaded: true,
		};
	}

	if (action.type === PaymentSubscribeActionTypes.SET_LOADED_PAYMENT) {
		return {
			...state,
			isLoaded: action.payload,
		};
	}

	if (action.type === PaymentSubscribeActionTypes.SET_SEND_PAYMENT) {
		return {
			...state,
			isSend: action.payload,
		};
	}

	return state;
};

export default paymentSubscribe;
