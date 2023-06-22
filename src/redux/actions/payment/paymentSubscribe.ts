import { Dispatch } from "redux";

import $api from "../../../http/";

import { PaymentSubscribeActions, PaymentSubscribeActionTypes } from "../../types/payment/IPaymentSubscribe";
import { PaymentSubscribe } from "../../../models/Payment/IPaymentSubscribe";

export const fetchPaymentSubscribeById = (id: string) => {
	return async (dispatch: Dispatch<PaymentSubscribeActions>) => {
		dispatch({
			type: PaymentSubscribeActionTypes.SET_LOADED_PAYMENT,
			payload: false,
		});

		$api.get<PaymentSubscribe>(`/payment/subscribe/${id}`)
			.then(({ data }) => {
				if (data.status === "canceled") {
					dispatch(sendCreatePaymentSubscribe(data.type) as any)
				} else {
					dispatch({
						type: PaymentSubscribeActionTypes.SET_PAYMENT,
						payload: data,
					});
				}
			})
			.catch(() => {
				window.location.href = `/go/training`;
			});
	};
};

export const sendCreatePaymentSubscribe = (
	type: string
) => {
	return async (dispatch: Dispatch<PaymentSubscribeActions>) => {
		dispatch({
			type: PaymentSubscribeActionTypes.SET_SEND_PAYMENT,
			payload: true,
		});

		$api.post(`/payment/subscribe`, { type }).then(({ data }) => {
			window.location.href = `/payment/subscribe/${data.number}`;
		});
	};
};
