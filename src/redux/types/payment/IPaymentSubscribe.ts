import { PaymentSubscribe } from "../../../models/Payment/IPaymentSubscribe";

export interface PaymentSubscribeState {
	payment: PaymentSubscribe;
	isLoaded: boolean;

	isSend: boolean;
}

export enum PaymentSubscribeActionTypes {
	SET_PAYMENT = "SET_PAYMENT",
	SET_LOADED_PAYMENT = "SET_LOADED_PAYMENT",
	SET_SEND_PAYMENT = "SET_SEND_PAYMENT",
}

interface setPaymentSubscribe {
	type: PaymentSubscribeActionTypes.SET_PAYMENT;
	payload: PaymentSubscribe;
}

interface setLoadedPaymentSubscribe {
	type: PaymentSubscribeActionTypes.SET_LOADED_PAYMENT;
	payload: boolean;
}

interface setSendPaymentSubscribe {
	type: PaymentSubscribeActionTypes.SET_SEND_PAYMENT;
	payload: boolean;
}

export type PaymentSubscribeActions = setPaymentSubscribe | setLoadedPaymentSubscribe | setSendPaymentSubscribe;
