import {Dispatch} from "redux";

import $api from "../../http/";

import {PaymentActions, PaymentActionTypes} from "../types/payment/IPayment";
import {Payment} from "../../models/IPayment";

export const fetchPaymentSubscribeById = (id: string) => {
    return async (dispatch: Dispatch<PaymentActions>) => {
        dispatch({
            type: PaymentActionTypes.SET_LOADED_PAYMENT,
            payload: false,
        });

        $api.get<Payment>(`/payment/subscribe/${id}`)
            .then(({data}) => {
                dispatch({
                    type: PaymentActionTypes.SET_PAYMENT,
                    payload: data,
                });
            })
            .catch(() => {
                window.location.href = `/go/training`;
            });
    };
};

export const sendCreateSubscribePayment = (
    typeSubscribe: "year-subscribe" | "month-subscribe"
) => {
    return async (dispatch: Dispatch<PaymentActions>) => {
        dispatch({
            type: PaymentActionTypes.SET_SEND_PAYMENT,
            payload: true,
        });

        $api.post(`/payment/subscribe`, {typeSubscribe}).then(({data}) => {
            window.location.href = `/payment/subscribe/${data.paymentNumber}`;
        });
    };
};
