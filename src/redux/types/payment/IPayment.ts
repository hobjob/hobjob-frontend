import {Payment} from "../../../models/IPayment";

export interface PaymentState {
    payment: Payment;
    isLoaded: boolean;

    isSend: boolean;
}

export enum PaymentActionTypes {
    SET_PAYMENT = "SET_PAYMENT",
    SET_LOADED_PAYMENT = "SET_LOADED_PAYMENT",
    SET_SEND_PAYMENT = "SET_SEND_PAYMENT",
}

interface setPayment {
    type: PaymentActionTypes.SET_PAYMENT;
    payload: Payment;
}

interface setLoadedPayment {
    type: PaymentActionTypes.SET_LOADED_PAYMENT;
    payload: boolean;
}

interface setSendPayment {
    type: PaymentActionTypes.SET_SEND_PAYMENT;
    payload: boolean;
}

export type PaymentActions = setPayment | setLoadedPayment | setSendPayment;
